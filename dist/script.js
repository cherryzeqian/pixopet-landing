const translations = {
  en: {
    title:'PixoPet — Your habits grow your pet', description:'PixoPet turns sleep, focus, and movement into energy that helps your pet grow.',
    navHow:'How it works', navStory:'Voices', download:'Download', heroKicker:'A PET THAT GROWS WITH YOU', heroTitle:'Your habits grow your pet.',
    heroText:'Sleep, focus, and move. PixoPet turns everyday care into energy for a pet that grows with you.', downloadIphone:'Download for iPhone', availability:'Coming soon',
    howKicker:'HOW IT WORKS', howTitle:'Live your day. Grow together.', stepOneTitle:'Meet your pet', stepOneText:'Start with a companion that feels like yours.',
    stepTwoTitle:'Earn energy', stepTwoText:'Sleep, focus, and movement become growth energy.', stepThreeTitle:'Grow together', stepThreeText:'Level up and unlock new moments along the way.',
    energyKicker:'REAL LIFE BECOMES ENERGY', energyTitle:'Care for yourself. Care for them.', energyText:'Your health data becomes something you can see and share with your pet—not another chart to worry about.',
    sleep:'Sleep', focus:'Focus', move:'Move', wallKicker:'VOICES BEHIND PIXOPET', wallTitle:'What we want PixoPet to feel like.', coCreator:'Co-creator',
    barneyQuoteOne:'Most health apps tell you what you should be doing. We wanted to make one that gives you something to care about.',
    zeqianQuoteOne:'I wanted health data to feel less like numbers and more like a story you are building with someone.',
    barneyQuoteTwo:'We wanted healthy habits to feel less like homework and more like spending time with a pet you love.',
    zeqianQuoteTwo:'A good day does not have to be perfect. Even a small walk or a little more sleep can help your pet grow.',
    privacyKicker:'YOUR DATA STAYS YOURS', privacyText:'PixoPet uses only the health categories you choose to share. Raw health samples are never shared with friends.',
    finalTitle:'Take care of yourself.<br>Grow something you love.', availabilityLong:'PixoPet is getting ready to meet you.', footerLine:'Take care of yourself. Grow together.', toast:'PixoPet for iPhone is coming soon.'
  },
  zh: {
    title:'PixoPet — 你的生活，养大你的宠物', description:'PixoPet 把睡眠、专注和运动变成宠物成长能量。',
    navHow:'怎么玩', navStory:'大家怎么说', download:'下载', heroKicker:'陪你一起成长的宠物', heroTitle:'你的生活，养大你的宠物。',
    heroText:'睡眠、专注和运动，会变成宠物的成长能量。照顾好自己，也陪它一起长大。', downloadIphone:'下载 iPhone 版', availability:'即将推出',
    howKicker:'怎么玩', howTitle:'过好今天，一起长大。', stepOneTitle:'遇见你的宠物', stepOneText:'从一只真正属于你的伙伴开始。',
    stepTwoTitle:'获得成长能量', stepTwoText:'睡眠、专注和运动会变成成长能量。', stepThreeTitle:'一起成长', stepThreeText:'升级，并在一路上解锁新的共同回忆。',
    energyKicker:'真实生活变成能量', energyTitle:'照顾自己，也是在照顾它。', energyText:'你的健康记录会变成看得见的宠物成长，而不是另一张需要担心的图表。',
    sleep:'睡眠', focus:'专注', move:'运动', wallKicker:'来自 PIXOPET 团队', wallTitle:'我们希望 PixoPet 带来的感受。', coCreator:'共同创作者',
    barneyQuoteOne:'大多数健康应用都在告诉你应该做什么。我们想做一个真正让人产生牵挂的产品。',
    zeqianQuoteOne:'我希望健康数据不只是一堆数字，而是一段你和某个伙伴共同写下的故事。',
    barneyQuoteTwo:'我们希望健康习惯不再像作业，而是像陪伴一只你喜欢的宠物。',
    zeqianQuoteTwo:'好的一天不需要完美。多走一小段路，或者多睡一会儿，也可以帮助宠物成长。',
    privacyKicker:'你的数据属于你', privacyText:'PixoPet 只使用你选择分享的健康类别。原始健康数据不会分享给朋友。',
    finalTitle:'照顾好自己。<br>养大你喜欢的生命。', availabilityLong:'PixoPet 正在为和你见面做准备。', footerLine:'照顾自己，一起长大。', toast:'PixoPet iPhone 版即将推出。'
  }
};

const languageButtons = document.querySelectorAll('[data-language]');
const translatableElements = document.querySelectorAll('[data-i18n]');
const toast = document.querySelector('#toast');
let currentLanguage = localStorage.getItem('pixopet-language') || 'en';
let toastTimer;

function applyLanguage(language) {
  const copy = translations[language] || translations.en;
  currentLanguage = language;
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.title = copy.title;
  document.querySelector('meta[name="description"]').setAttribute('content',copy.description);
  translatableElements.forEach((element) => { const value = copy[element.dataset.i18n]; if (typeof value === 'string') element.innerHTML = value; });
  document.querySelectorAll('[data-alt-en]').forEach((image) => { image.alt = image.dataset[language === 'zh' ? 'altZh' : 'altEn']; });
  languageButtons.forEach((button) => { const active = button.dataset.language === language; button.classList.toggle('is-active',active); button.setAttribute('aria-pressed',String(active)); });
  localStorage.setItem('pixopet-language',language);
}

languageButtons.forEach((button) => button.addEventListener('click',() => applyLanguage(button.dataset.language)));
document.querySelectorAll('[data-download]').forEach((button) => button.addEventListener('click',() => {
  toast.textContent = translations[currentLanguage].toast;
  toast.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('is-visible'),2600);
}));

applyLanguage(currentLanguage);
