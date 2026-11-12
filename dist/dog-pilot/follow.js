import {createFrameAnimator,createCssSpriteRenderer} from './frame-scrub.js';

export async function mount(stage, style) {
  const base=new URL('follow-'+style+'/',import.meta.url);
  function asset(name){
    const url=new URL(name,base);
    if(style==='seated')url.searchParams.set('v','detail2');
    return url;
  }
  const dog=document.createElement('div');
  Object.assign(dog.style,{position:'absolute',bottom:'0',right:'10%',height:'100%',aspectRatio:'352 / 450',
    background:`url("${asset(style==='seated'?'rest-hd.webp':'rest.webp')}") center / contain no-repeat`});
  stage.replaceChildren(dog);
  if(style==='seated'){
    Object.assign(stage.style,{transform:'scale(1.3)',transformOrigin:'right 83%'});
    Object.assign(dog.style,{transform:'scale(1.15)',transformOrigin:'20% 83%'});
    const cat=document.createElement('img');
    cat.alt='';
    cat.src=asset('sleeping-cat.webp');
    // The dog's painted paws sit at 83% of its sprite height.
    Object.assign(cat.style,{inset:'auto',right:'46%',bottom:'16%',width:'44%',height:'auto',pointerEvents:'none'});
    stage.append(cat);
  }
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  if(reduced.matches)return;
  try {
    const smallAtlas=style==='seated'
      ? dog.getBoundingClientRect().width*window.devicePixelRatio<=176
      : matchMedia('(max-width:760px)').matches;
    const useDetail=style==='seated' && dog.getBoundingClientRect().width*window.devicePixelRatio>352;
    const atlasName=useDetail?'detail.json':(smallAtlas?'small.json':'atlas.json');
    const manifest=await fetch(asset(atlasName)).then(r=>r.json());
    const image=new Image();image.src=asset(manifest.asset);await image.decode();
    const render=createCssSpriteRenderer(dog,manifest.columns,manifest.rows);
    dog.style.backgroundImage=`url("${image.src}")`;
    const mid=(manifest.columns-1)/2;
    let col=mid,row=mid;
    const draw=()=>render(row*manifest.columns+col);
    const axis=update=>createFrameAnimator({frameCount:manifest.columns,initialFrame:mid,smoothTime:.105,maxSpeed:24,render:update});
    const horizontal=axis(n=>{col=n;draw()});
    const vertical=axis(n=>{row=n;draw()});
    const eye=style==='seated'?[.35,.33]:(style==='card'?[.39,.29]:[.21,.33]);
    function track(e){
      if(reduced.matches)return;
      const box=dog.getBoundingClientRect();
      const dx=e.clientX-box.left-box.width*eye[0],dy=e.clientY-box.top-box.height*eye[1];
      horizontal.setProgress(.5+.5*Math.tanh(dx/(box.width*.53)));
      vertical.setProgress(.5+.5*Math.tanh(dy/(box.height*.5)));
    }
    function reset(){horizontal.setTarget(mid);vertical.setTarget(mid)}
    window.addEventListener('pointermove',track,{passive:true});
    window.addEventListener('pointerdown',track,{passive:true});
    window.addEventListener('blur',reset);document.documentElement.addEventListener('pointerleave',reset);
    reduced.addEventListener('change',reset);
  }catch{/* Keep the visible neutral artwork when an atlas is unavailable. */}
}
