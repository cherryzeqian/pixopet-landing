#!/usr/bin/env python3
"""Generate pixel-stable PixoPet gaze frames from the immutable center pose."""

from __future__ import annotations

import argparse
import statistics
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter


EYES = (
    # center x/y, pupil ellipse x/y radius, iris palette
    (735, 223, 14, 20, "brown"),
    (871, 276, 14, 20, "brown"),
    (1033, 357, 9, 13, "green"),
    (1147, 379, 9, 13, "green"),
)

STATES = (
    ("center", 0.0, 0.0),
    ("up", 0.0, -1.0),
    ("up-right", 0.78, -0.78),
    ("right", 1.0, 0.0),
    ("down-right", 0.78, 0.78),
    ("down", 0.0, 1.0),
    ("down-left", -0.78, 0.78),
    ("left", -1.0, 0.0),
    ("up-left", -0.78, -0.78),
)


def eligible(pixel: tuple[int, int, int, int], palette: str) -> bool:
    red, green, blue, alpha = pixel
    if alpha < 220 or red + green + blue < 105 or min(red, green, blue) > 218:
        return False
    if palette == "brown":
        return 35 < red < 205 and green < 145 and blue < 105 and red > green * 1.08
    return 45 < green < 205 and red < 175 and blue < 150 and green > red * 1.03 and green > blue * 1.03


def iris_row_color(image: Image.Image, cx: int, cy: int, rx: int, y: int, palette: str) -> tuple[int, int, int, int]:
    samples: list[tuple[int, int, int, int]] = []
    for y_offset in (-3, -2, -1, 0, 1, 2, 3):
        sample_y = max(0, min(image.height - 1, y + y_offset))
        for distance in range(rx + 3, rx + 14):
            for sample_x in (cx - distance, cx + distance):
                if 0 <= sample_x < image.width:
                    pixel = image.getpixel((sample_x, sample_y))
                    if eligible(pixel, palette):
                        samples.append(pixel)
    if not samples:
        fallback = (92, 49, 25, 255) if palette == "brown" else (101, 137, 63, 255)
        return fallback
    return tuple(int(statistics.median(channel)) for channel in zip(*samples))


def move_pupil(base: Image.Image, source: Image.Image, eye: tuple[int, int, int, int, str], dx: int, dy: int) -> None:
    cx, cy, rx, ry, palette = eye
    box = (cx - rx - 3, cy - ry - 3, cx + rx + 4, cy + ry + 4)
    patch = source.crop(box)

    mask = Image.new("L", patch.size, 0)
    ImageDraw.Draw(mask).ellipse((2, 2, patch.width - 3, patch.height - 3), fill=255)
    mask = mask.filter(ImageFilter.GaussianBlur(1.35))

    pixels = base.load()
    for y in range(cy - ry - 2, cy + ry + 3):
        normalized_y = (y - cy) / (ry + 2)
        half_width = int((rx + 2) * max(0.0, 1.0 - normalized_y * normalized_y) ** 0.5)
        color = iris_row_color(source, cx, cy, rx, y, palette)
        for x in range(cx - half_width, cx + half_width + 1):
            pixels[x, y] = color

    destination = (box[0] + dx, box[1] + dy)
    base.paste(patch, destination, mask)


def render(source: Image.Image, horizontal: float, vertical: float) -> Image.Image:
    if horizontal == 0 and vertical == 0:
        return source.copy()
    output = source.copy()
    for index, eye in enumerate(EYES):
        is_dog = index < 2
        dx = round(horizontal * (8 if is_dog else 6))
        dy = round(vertical * (6 if is_dog else 5))
        move_pupil(output, source, eye, dx, dy)
    return output


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("source", type=Path)
    parser.add_argument("output", type=Path)
    args = parser.parse_args()
    args.output.mkdir(parents=True, exist_ok=True)
    source = Image.open(args.source).convert("RGBA")
    for index, (state, horizontal, vertical) in enumerate(STATES):
        frame = render(source, horizontal, vertical)
        frame.save(args.output / f"frame_{index:05d}.png")
        frame.save(args.output / f"pointer-pets-eyes-{state}-v4.png")


if __name__ == "__main__":
    main()
