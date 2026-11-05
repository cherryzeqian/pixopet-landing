const translations={
  en:{
    title:'PixoPet — Your life. Their adventure.',description:'PixoPet turns sleep, focus, and movement into energy for a companion that grows with you.',navHow:'How it works',navSignals:'Daily energy',navVoices:'Voices',download:'Download',downloadIphone:'Download for iPhone',heroEyebrow:'A PET POWERED BY YOU',heroTitle:'Your life.<br>Their adventure.',heroText:'Sleep. Focus. Move. Your everyday habits become energy<br>for a companion that grows with you.',watchFilm:'Watch the 28 sec film',comingSoon:'Coming soon on iPhone',howTitle:'Care for<br>yourself.<br>Care for<br>them.',howText:'You do not need to change everything. Start with one small thing today.',hatchTitle:'Hatch your companion',hatchText:'Begin with a favorite photo and create a PixoPet that feels like yours.',energyTitle:'Turn life into energy',energyText:'Sleep, focus, and movement become EXP you can give to your pet.',storyTitle:'Unlock new stories',storyText:'Level up, explore, and keep every shared milestone in your journey.',hatchCaption:'One photo, one new friend',energyCaption:'Today became 512 EXP',storyCaption:'A new journey is unlocked',signalTitle:'Your day becomes<br>their energy.',signalIntro:'Three everyday signals. One growing companion.',sleepKicker:'RECOVER',sleepTitle:'Sleep',sleepText:'A good night becomes energy your pet can wake up with.',sleepTag:'REST + RECHARGE',focusKicker:'CREATE',focusTitle:'Focus',focusText:'Focused minutes move your companion closer to the next level.',focusTag:'TIME + GROWTH',moveKicker:'EXPLORE',moveTitle:'Move',moveText:'Every walk gives your pet more of the world to discover.',moveTag:'STEPS + ADVENTURE',journalTitle:'Every place you visit<br>becomes part of your<br>collection.',journalText:'Adventure posters, milestones, and little daily moments slowly become a journal you share.',cloudPost:'Cloud Post Office',cloudCopy:'We mailed today’s good mood to our future selves.',moonCamp:'Moonlight camp',forestNap:'Forest nap',memoryQuote:'We walked far today, but Pixo stayed right beside me.',voicesKicker:'MEET THE PEOPLE AROUND PIXOPET',voicesTitle:'Why we keep coming back.',coCreator:'Co-creator',earlyPreview:'Early preview',sampleFeedback:'Sample feedback',quoteBarney:'Most health apps tell you what you should be doing. We wanted to make one that gives you something to care about.',quoteZeqian:'I wanted health data to feel less like numbers and more like a little world you build together.',quoteWalk:'It makes a short walk feel like it actually went somewhere.',quoteCare:'I opened it to check my pet—and ended up taking better care of myself too.',quoteData:'The health data disappears. What I notice is that my companion is growing.',quoteDetails:'The pixel details make every tiny unlock feel surprisingly special.',previewNote:'Preview reactions are draft placeholders and should be replaced with approved tester quotes before launch.',downloadTitle:'Take care of yourself.<br>Grow something you love.',downloadText:'PixoPet is getting ready to meet you.',toast:'PixoPet for iPhone is coming soon.'
  },
  zh:{
    title:'PixoPet — 你的生活，它的冒险',description:'PixoPet 把睡眠、专注和运动变成宠物成长能量。',navHow:'它如何成长',navSignals:'日常能量',navVoices:'用户声音',download:'下载',downloadIphone:'下载 iPhone 版',heroEyebrow:'由你的生活驱动的伙伴',heroTitle:'你的生活。<br>它的冒险。',heroText:'睡眠、专注、运动。每天的习惯都会成为能量，<br>陪伴你的数字宠物一起成长。',watchFilm:'观看 28 秒短片',comingSoon:'iPhone 版即将推出',howTitle:'照顾自己，<br>也是在<br>照顾它。',howText:'不需要改变全部生活。从今天能做到的一点点开始。',hatchTitle:'孵化你的伙伴',hatchText:'从一张喜欢的照片开始，创造一只属于你的 PixoPet。',energyTitle:'把日常变成能量',energyText:'睡眠、专注和运动，会成为可以分配给宠物的成长经验。',storyTitle:'解锁新的故事',storyText:'一起升级、探索旅程，并留下每一次共同成长。',hatchCaption:'一张照片，一个新朋友',energyCaption:'今天积累了 512 EXP',storyCaption:'新的旅程已经解锁',signalTitle:'你度过的一天，<br>是它成长的能量。',signalIntro:'三种日常信号，一个不断成长的伙伴。',sleepKicker:'恢复',sleepTitle:'睡眠',sleepText:'一个好觉，会成为它醒来时收到的成长能量。',sleepTag:'休息 + 充能',focusKicker:'创造',focusTitle:'专注',focusText:'每一分钟专注，都让它更靠近下一个等级。',focusTag:'时间 + 成长',moveKicker:'探索',moveTitle:'运动',moveText:'每一次步行，都让它发现更多新的世界。',moveTag:'步数 + 冒险',journalTitle:'走过的每一站，<br>都成为只属于<br>你们的收藏。',journalText:'冒险海报、成长瞬间和日常碎片，会慢慢长成一本共同回忆。',cloudPost:'云上邮局',cloudCopy:'我们把今天的好心情，寄给了未来。',moonCamp:'月光露营地',forestNap:'森林午睡',memoryQuote:'今天走了很远，但 Pixo 一直在身边。',voicesKicker:'认识 PIXOPET 身边的人',voicesTitle:'为什么我们总想回来看看。',coCreator:'共同创作者',earlyPreview:'早期体验者',sampleFeedback:'示例反馈',quoteBarney:'大多数健康应用只会告诉你应该做什么。我们想做一个让你真正愿意关心的伙伴。',quoteZeqian:'我希望健康数据不再只是数字，而是你和伙伴一起建立的小世界。',quoteWalk:'它让一次短短的散步，也感觉真的去了某个地方。',quoteCare:'我只是打开看看宠物，最后却也开始更认真地照顾自己。',quoteData:'健康数据慢慢消失在背景里，我真正注意到的是伙伴正在长大。',quoteDetails:'像素细节让每一次小小解锁，都变得意外地特别。',previewNote:'这些体验反馈目前是草稿占位内容，正式上线前应替换为通过确认的用户评价。',downloadTitle:'照顾好自己。<br>养大你喜欢的伙伴。',downloadText:'PixoPet 正在准备与你见面。',toast:'PixoPet iPhone 版即将推出。'
  }
};

const languageButtons=document.querySelectorAll('[data-language]');
const translatable=document.querySelectorAll('[data-i18n]');
const howTabs=document.querySelectorAll('[data-how]');
const howPanels=document.querySelectorAll('[data-how-panel]');
const signalChapters=document.querySelectorAll('[data-signal]');
const signalVisual=document.querySelector('[data-signal-visual]');
const signalIcon=document.querySelector('[data-signal-icon]');
const signalLabel=document.querySelector('[data-signal-label]');
const heroVideo=document.querySelector('.hero-media video');
const videoToggle=document.querySelector('.video-toggle');
const filmModal=document.querySelector('.film-modal');
const filmVideo=filmModal.querySelector('video');
const toast=document.querySelector('#toast');
let currentLanguage=localStorage.getItem('pixopet-language')||'en';
let toastTimer;

function applyLanguage(language){
  const copy=translations[language]||translations.en;
  currentLanguage=language;
  document.documentElement.lang=language==='zh'?'zh-CN':'en';
  document.title=copy.title;
  document.querySelector('meta[name="description"]').setAttribute('content',copy.description);
  translatable.forEach(element=>{const value=copy[element.dataset.i18n];if(typeof value==='string')element.innerHTML=value});
  languageButtons.forEach(button=>{const active=button.dataset.language===language;button.classList.toggle('is-active',active);button.setAttribute('aria-pressed',String(active))});
  localStorage.setItem('pixopet-language',language);
}

function showDownloadMessage(){toast.textContent=translations[currentLanguage].toast;toast.classList.add('is-visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('is-visible'),2600)}
function setHowStep(step){howTabs.forEach(tab=>{const active=tab.dataset.how===step;tab.classList.toggle('is-active',active);tab.setAttribute('aria-selected',String(active))});howPanels.forEach(panel=>panel.classList.toggle('is-active',panel.dataset.howPanel===step))}

const signalData={
  sleep:{color:'#7b68ee',icon:'assets/sleep@3x.png',label:'REST + ENERGY'},
  focus:{color:'#04b1ad',icon:'assets/focus@3x.png',label:'TIME + GROWTH'},
  move:{color:'#ed694f',icon:'assets/move@3x.png',label:'STEPS + ADVENTURE'}
};
function setSignal(type){const data=signalData[type];if(!data)return;signalChapters.forEach(chapter=>chapter.classList.toggle('is-active',chapter.dataset.signal===type));signalVisual.dataset.signalVisual=type;signalVisual.style.setProperty('--signal-color',data.color);signalIcon.src=data.icon;signalLabel.textContent=data.label;signalIcon.animate([{transform:'scale(.82) rotate(-8deg)',opacity:.4},{transform:'scale(1) rotate(0)',opacity:1}],{duration:500,easing:'cubic-bezier(.22,.78,.2,1)'})}

const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-in-view');revealObserver.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('[data-reveal]').forEach(element=>revealObserver.observe(element));
const signalObserver=new IntersectionObserver(entries=>{const visible=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];if(visible)setSignal(visible.target.dataset.signal)},{rootMargin:'-30% 0px -35% 0px',threshold:[.05,.25,.5,.75]});
signalChapters.forEach(chapter=>signalObserver.observe(chapter));

let motionFrame;
function updateParallax(){cancelAnimationFrame(motionFrame);motionFrame=requestAnimationFrame(()=>{document.querySelectorAll('[data-parallax]').forEach(element=>{const rect=element.getBoundingClientRect();const progress=innerHeight*.5-(rect.top+rect.height*.5);const speed=Number(element.dataset.parallax)||0;element.style.setProperty('--parallax-y',`${Math.max(-80,Math.min(80,progress*speed))}px`)})})}

languageButtons.forEach(button=>button.addEventListener('click',()=>applyLanguage(button.dataset.language)));
howTabs.forEach(tab=>tab.addEventListener('click',()=>setHowStep(tab.dataset.how)));
document.querySelectorAll('[data-download]').forEach(button=>button.addEventListener('click',showDownloadMessage));
document.querySelectorAll('[data-open-film]').forEach(button=>button.addEventListener('click',()=>{filmModal.classList.add('is-open');filmModal.setAttribute('aria-hidden','false');filmVideo.play().catch(()=>{})}));
document.querySelector('.film-close').addEventListener('click',closeFilm);
filmModal.addEventListener('click',event=>{if(event.target===filmModal)closeFilm()});
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeFilm()});
function closeFilm(){filmModal.classList.remove('is-open');filmModal.setAttribute('aria-hidden','true');filmVideo.pause()}
videoToggle.addEventListener('click',()=>{if(heroVideo.paused){heroVideo.play();videoToggle.textContent='Ⅱ';videoToggle.setAttribute('aria-label','Pause background video')}else{heroVideo.pause();videoToggle.textContent='▶';videoToggle.setAttribute('aria-label','Play background video')}});
addEventListener('scroll',updateParallax,{passive:true});
applyLanguage(currentLanguage);setHowStep('story');setSignal('sleep');updateParallax();
