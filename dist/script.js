const translations={
  en:{
    title:'PixoPet — Your life. Their adventure.',description:'PixoPet turns sleep, focus, and movement into energy for a pet that grows with you.',navHow:'How it works',navFilm:'Watch',navVoices:'Voices',download:'Download',heroEyebrow:'A PET POWERED BY YOU',heroTitle:'Your life.<br>Their adventure.',heroText:'Sleep. Focus. Move. Your everyday habits become energy for a companion that grows with you.',downloadIphone:'Download for iPhone',watchFilm:'Watch the 28 sec film',availability:'Coming soon on iPhone',howEyebrow:'HOW IT WORKS',howTitle:'Your day becomes their energy.',sleep:'Sleep',sleepText:'Rest becomes energy for tomorrow.',focus:'Focus',focusText:'Focused time helps your pet level up.',move:'Move',moveText:'Every walk adds to the adventure.',filmEyebrow:'SEE PIXOPET IN ACTION',filmTitle:'One day. One pet.<br>A world that grows.',filmText:'A 28-second look at how real life wakes up your PixoPet world.',videoFallback:'Your browser does not support this video.',worldEyebrow:'MORE THAN A STREAK',worldTitle:'A little care unlocks a whole world.',worldText:'Hatch a companion, unlock new actions and places, and watch your shared journey take shape.',voicesEyebrow:'MEET THE PEOPLE AROUND PIXOPET',voicesTitle:'Why we keep coming back.',coCreator:'Co-creator',barneyQuoteOne:'Most health apps tell you what you should be doing. We wanted to make one that gives you something to care about.',zeqianQuoteOne:'I wanted health data to feel less like numbers and more like a little world you build together.',previewVoice:'Early preview',sampleFeedback:'Sample feedback',previewQuoteOne:'It makes a short walk feel like it actually went somewhere.',previewQuoteTwo:'I opened it to check my pet—and ended up taking better care of myself too.',previewQuoteThree:'The health data disappears. What I notice is that my companion is growing.',previewQuoteFour:'The pixel details make every tiny unlock feel surprisingly special.',sampleNote:'Preview reactions are draft placeholders and should be replaced with approved tester quotes before launch.',finalTitle:'Take care of yourself.<br>Grow something you love.',finalText:'PixoPet is getting ready to meet you.',footerLine:'Your life. Their adventure.',toast:'PixoPet for iPhone is coming soon.'
  },
  zh:{
    title:'PixoPet — 你的生活，它的冒险',description:'PixoPet 把睡眠、专注和运动变成宠物成长能量。',navHow:'怎么玩',navFilm:'看视频',navVoices:'大家怎么说',download:'下载',heroEyebrow:'由你的生活驱动的宠物',heroTitle:'你的生活。<br>它的冒险。',heroText:'睡眠、专注、运动。每天照顾好自己，也在为一只陪你成长的宠物积蓄能量。',downloadIphone:'下载 iPhone 版',watchFilm:'观看 28 秒影片',availability:'即将登陆 iPhone',howEyebrow:'怎么玩',howTitle:'你的每一天，都会变成它的能量。',sleep:'睡眠',sleepText:'好好休息，为明天积蓄能量。',focus:'专注',focusText:'每一段专注时间，都帮助宠物升级。',move:'运动',moveText:'每一步，都把冒险带得更远。',filmEyebrow:'看看 PIXOPET 如何运作',filmTitle:'一天。一只宠物。<br>一个不断长大的世界。',filmText:'用 28 秒看看真实生活如何唤醒 PixoPet 的世界。',videoFallback:'你的浏览器不支持此视频。',worldEyebrow:'不只是一串连续记录',worldTitle:'一点点照顾，解锁一整个世界。',worldText:'孵化伙伴、解锁新动作和新地点，看见你们共同的旅程慢慢成形。',voicesEyebrow:'认识 PIXOPET 身边的人',voicesTitle:'为什么我们总会回来看看。',coCreator:'共同创作者',barneyQuoteOne:'大多数健康应用都在告诉你应该做什么。我们想做一个真正让人产生牵挂的产品。',zeqianQuoteOne:'我希望健康数据不只是一堆数字，而是一个你和伙伴一起慢慢建起来的小世界。',previewVoice:'抢先体验',sampleFeedback:'示例反馈',previewQuoteOne:'它让一次短短的散步，也像是真的带我们去了某个地方。',previewQuoteTwo:'我本来只是想看看宠物，结果也顺便把自己照顾得更好了。',previewQuoteThree:'我不会一直盯着健康数据，我看到的是自己的伙伴正在长大。',previewQuoteFour:'像素细节让每一次小小的解锁都显得很特别。',sampleNote:'抢先体验反馈目前为排版示例，正式发布前需替换为已确认的真实用户评价。',finalTitle:'照顾好自己。<br>养大你喜欢的生命。',finalText:'PixoPet 正在为和你见面做准备。',footerLine:'你的生活，它的冒险。',toast:'PixoPet iPhone 版即将推出。'
  }
};
const languageButtons=document.querySelectorAll('[data-language]');
const translatableElements=document.querySelectorAll('[data-i18n]');
const toast=document.querySelector('#toast');
const heroVideo=document.querySelector('.hero-video');
const videoToggle=document.querySelector('.video-toggle');
let currentLanguage=localStorage.getItem('pixopet-language')||'en';
let toastTimer;
function applyLanguage(language){
  const copy=translations[language]||translations.en;
  currentLanguage=language;
  document.documentElement.lang=language==='zh'?'zh-CN':'en';
  document.title=copy.title;
  document.querySelector('meta[name="description"]').setAttribute('content',copy.description);
  translatableElements.forEach(element=>{const value=copy[element.dataset.i18n];if(typeof value==='string')element.innerHTML=value});
  document.querySelectorAll('[data-alt-en]').forEach(image=>{image.alt=image.dataset[language==='zh'?'altZh':'altEn']});
  languageButtons.forEach(button=>{const active=button.dataset.language===language;button.classList.toggle('is-active',active);button.setAttribute('aria-pressed',String(active))});
  localStorage.setItem('pixopet-language',language);
}
function showDownloadMessage(){toast.textContent=translations[currentLanguage].toast;toast.classList.add('is-visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('is-visible'),2600)}
function updateVideoToggle(){const paused=heroVideo.paused;videoToggle.setAttribute('aria-pressed',String(paused));videoToggle.setAttribute('aria-label',paused?'Play background video':'Pause background video');videoToggle.querySelector('span').textContent=paused?'▶':'Ⅱ'}
languageButtons.forEach(button=>button.addEventListener('click',()=>applyLanguage(button.dataset.language)));
document.querySelectorAll('[data-download]').forEach(button=>button.addEventListener('click',showDownloadMessage));
videoToggle.addEventListener('click',()=>{if(heroVideo.paused)heroVideo.play();else heroVideo.pause();updateVideoToggle()});
heroVideo.addEventListener('play',updateVideoToggle);heroVideo.addEventListener('pause',updateVideoToggle);
if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){heroVideo.removeAttribute('autoplay');heroVideo.pause()}
applyLanguage(currentLanguage);updateVideoToggle();
