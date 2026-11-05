const translations={
  en:{
    title:'PixoPet — Your life. Their adventure.',description:'PixoPet turns sleep, focus, and movement into energy for a companion that grows with you.',
    navHow:'How it grows',navActivity:'Daily energy',navJournal:'Shared memories',meetPet:'Meet PixoPet',
    heroEyebrow:'YOUR LIFE, YOUR SHARED STORY',heroTitle:'Your every step,<br><em>helps them grow.</em>',heroText:'Turn everyday sleep, focus, and movement into a growing adventure with your digital companion.',watchDay:'See how one day becomes EXP',lastSleep:'Last night',focusDone:'Focus done',scrollStart:'Scroll to start the journey',
    beliefTitle:'Growth does not have to be loud.<br>Sleep a little earlier, focus for a while, take a few more steps—<br><em>they will remember.</em>',
    howTitle:'Care for yourself.<br>Care for them.',howText:'You do not need to change everything. Start with one small thing today.',howHatchTitle:'Hatch your companion',howHatchText:'Begin with a favorite photo and create a PixoPet that feels like yours.',howEnergyTitle:'Turn life into energy',howEnergyText:'Sleep, focus, and movement become EXP you can give to your pet.',howStoryTitle:'Unlock new stories',howStoryText:'Level up, explore, and keep every shared milestone in your journey.',hatchCaption:'One photo, one new friend',energyCaption:'Today became 512 EXP',storyCaption:'A new journey is unlocked',
    activityTitle:'The day you live<br>becomes their energy.',activityText:'No extra check-in. PixoPet gently gathers the good habits already inside your day.',sleep:'Sleep',focus:'Focus',move:'Move',todayRecord:'Today’s record',energyEarned:'Energy earned',todayActivity:'Today’s activity',today:'Today',recorded:'recorded',converted:'Converted to growth energy',wellDone:'You did well today',everyBit:'Every little bit helps your companion grow.',
    growTitle:'It is not the number growing.<br><em>It is how far you go together.</em>',allocateExp:'Allocate today’s EXP',toNext:'52 EXP to LV. 09',feedPet:'Feed Pixo',surprise:'A surprise awaits',
    journalTitle:'Every place you visit<br>becomes part of your collection.',journalText:'Adventure posters, milestones, and little daily moments slowly become a journal you share.',cloudPost:'Cloud Post Office',cloudCopy:'We mailed today’s good mood to our future selves.',forestNap:'Forest nap',moonCamp:'Moonlight camp',memoryQuote:'We walked far today, but Pixo stayed right beside me.',
    joinTitle:'Start today.<br>Grow together.',joinText:'Turn every day you care for yourself into a story of growing together.',followNext:'Follow PixoPet’s next step',comingSoon:'Product in progress · not publicly available yet',footerLine:'Care for yourself. Care for them.',toast:'PixoPet for iPhone is coming soon.'
  },
  zh:{
    title:'PixoPet — 你的生活，它的冒险',description:'PixoPet 把睡眠、专注和运动变成宠物成长能量。',
    navHow:'它如何成长',navActivity:'日常能量',navJournal:'共同回忆',meetPet:'认识 PixoPet',
    heroEyebrow:'你的生活，你们的成长故事',heroTitle:'你的每一步，<br><em>它都在长大。</em>',heroText:'用每天的睡眠、专注和运动，陪伴属于你的数字宠物成长。',watchDay:'看看一天如何变成 EXP',lastSleep:'昨夜睡眠',focusDone:'专注完成',scrollStart:'向下滚动，开始旅程',
    beliefTitle:'我们相信，成长不用声势浩大。<br>今天早睡一点，专心一会儿，多走几步——<br><em>它都会记得。</em>',
    howTitle:'照顾自己，<br>也是在照顾它。',howText:'不需要改变全部生活。从今天能做到的一点点开始。',howHatchTitle:'孵化你的伙伴',howHatchText:'从一张喜欢的照片开始，创造一只属于你的 PixoPet。',howEnergyTitle:'把日常变成能量',howEnergyText:'睡眠、专注和运动，会成为可以分配给宠物的成长经验。',howStoryTitle:'解锁新的故事',howStoryText:'一起升级、探索旅程，并把每一次成长留在你们的共同记录里。',hatchCaption:'一张照片，一个新朋友',energyCaption:'今天积累了 512 EXP',storyCaption:'新的旅程已经解锁',
    activityTitle:'你度过的一天，<br>是它长大的能量。',activityText:'无需额外打卡。PixoPet 把真实生活里的好习惯，轻轻收进你们的成长记录。',sleep:'睡眠',focus:'专注',move:'运动',todayRecord:'今日记录',energyEarned:'获得能量',todayActivity:'今日活动',today:'今天',recorded:'已记录',converted:'转化为成长能量',wellDone:'今天做得很好',everyBit:'每一点积累，都在陪它长大。',
    growTitle:'不是数值在增加，<br><em>是你们一起走得更远。</em>',allocateExp:'分配今天的 EXP',toNext:'还差 52 EXP 升级 LV. 09',feedPet:'喂给 Pixo',surprise:'新的故事正在等待',
    journalTitle:'走过的每一站，<br>都成为只属于你们的收藏。',journalText:'冒险海报、成长瞬间和日常碎片，会在 Journal 里慢慢长成一本共同回忆。',cloudPost:'云上邮局',cloudCopy:'我们把今天的好心情，寄给了未来。',forestNap:'森林午睡',moonCamp:'月光露营地',memoryQuote:'今天走了很远，但 Pixo 一直在身边。',
    joinTitle:'从今天开始，<br>一起长大。',joinText:'把照顾自己的每一天，变成陪伴它成长的故事。',followNext:'关注 PixoPet 的下一步',comingSoon:'产品正在准备中 · 暂未公开上架',footerLine:'照顾自己，也是在照顾它。',toast:'PixoPet iPhone 版即将推出。'
  }
};

const languageButtons=document.querySelectorAll('[data-language]');
const translatable=document.querySelectorAll('[data-i18n]');
const toast=document.querySelector('#toast');
const hero=document.querySelector('.hero');
const heroStage=document.querySelector('[data-hero-stage]');
const heroFloats=document.querySelectorAll('.hero-float');
const howTabs=document.querySelectorAll('[data-how]');
const howPanels=document.querySelectorAll('[data-how-panel]');
const activityTabs=document.querySelectorAll('[data-activity]');
const activityVisual=document.querySelector('[data-activity-visual]');
const activityRecord=document.querySelector('[data-activity-record]');
const activityExp=document.querySelector('[data-activity-exp]');
const activityPhoneRecord=document.querySelector('[data-activity-phone-record]');
const activityPhoneExp=document.querySelector('[data-activity-phone-exp]');
const activityIcon=document.querySelector('[data-activity-icon]');
const activityBubble=document.querySelector('[data-activity-bubble]');
const filmModal=document.querySelector('.film-modal');
const filmVideo=filmModal.querySelector('video');
const joinVisual=document.querySelector('[data-mouse-glow]');
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

function showDownloadMessage(){
  toast.textContent=translations[currentLanguage].toast;
  toast.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>toast.classList.remove('is-visible'),2600);
}

function setHowStep(step){
  howTabs.forEach(tab=>{const active=tab.dataset.how===step;tab.classList.toggle('is-active',active);tab.setAttribute('aria-selected',String(active))});
  howPanels.forEach(panel=>panel.classList.toggle('is-active',panel.dataset.howPanel===step));
}

const activityData={
  sleep:{record:'7h 42m',exp:'+78 EXP',bubble:'+26',icon:'assets/sleep@3x.png',accent:'#6e3bf0'},
  focus:{record:'2h 15m',exp:'+54 EXP',bubble:'+18',icon:'assets/focus@3x.png',accent:'#00a1a1'},
  move:{record:'3,775',exp:'+380 EXP',bubble:'+127',icon:'assets/move@3x.png',accent:'#ed4740'}
};
function setActivity(type){
  const data=activityData[type];
  if(!data)return;
  activityTabs.forEach(tab=>{const active=tab.dataset.activity===type;tab.classList.toggle('is-active',active);tab.setAttribute('aria-selected',String(active));tab.style.setProperty('--activity-accent',activityData[tab.dataset.activity].accent)});
  activityVisual.dataset.activityVisual=type;
  activityVisual.style.setProperty('--activity-accent',data.accent);
  activityVisual.classList.remove('is-changing');void activityVisual.offsetWidth;activityVisual.classList.add('is-changing');
  activityRecord.textContent=data.record;activityExp.textContent=data.exp;activityPhoneRecord.textContent=data.record;activityPhoneExp.textContent=data.exp;activityBubble.textContent=data.bubble;activityIcon.src=data.icon;
}

function openFilm(){
  filmModal.classList.add('is-open');filmModal.setAttribute('aria-hidden','false');
  filmVideo.play().catch(()=>{});
}
function closeFilm(){
  filmModal.classList.remove('is-open');filmModal.setAttribute('aria-hidden','true');filmVideo.pause();
}

languageButtons.forEach(button=>button.addEventListener('click',()=>applyLanguage(button.dataset.language)));
document.querySelectorAll('[data-download]').forEach(button=>button.addEventListener('click',showDownloadMessage));
document.querySelectorAll('[data-open-film]').forEach(button=>button.addEventListener('click',openFilm));
document.querySelector('.film-close').addEventListener('click',closeFilm);
filmModal.addEventListener('click',event=>{if(event.target===filmModal)closeFilm()});
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeFilm()});
howTabs.forEach(tab=>tab.addEventListener('click',()=>setHowStep(tab.dataset.how)));
activityTabs.forEach(tab=>tab.addEventListener('click',()=>setActivity(tab.dataset.activity)));
document.querySelector('[data-feed-exp]').addEventListener('click',event=>event.currentTarget.closest('.grow-card').classList.toggle('is-fed'));

const revealObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-in-view');revealObserver.unobserve(entry.target)}});
},{threshold:.14});
document.querySelectorAll('[data-reveal]').forEach(element=>revealObserver.observe(element));

let motionFrame;
function updateScrollMotion(){
  cancelAnimationFrame(motionFrame);
  motionFrame=requestAnimationFrame(()=>{
    const y=window.scrollY;
    const heroProgress=Math.min(1,Math.max(0,y/(window.innerHeight*.8)));
    hero.classList.toggle('is-scrolled',heroProgress>.08);
    heroStage.style.setProperty('--hero-shift',`${heroProgress*-30}px`);
    heroFloats.forEach((card,index)=>card.style.setProperty('--float-y',`${heroProgress*[-78,-116][index]}px`));
    document.querySelectorAll('[data-parallax]').forEach(element=>{
      const rect=element.getBoundingClientRect();
      const progress=(window.innerHeight*.5-(rect.top+rect.height*.5));
      const speed=Number(element.dataset.parallax)||0;
      element.style.setProperty('--parallax-y',`${Math.max(-90,Math.min(90,progress*speed))}px`);
    });
  });
}
window.addEventListener('scroll',updateScrollMotion,{passive:true});
window.addEventListener('resize',updateScrollMotion);

if(joinVisual&&window.matchMedia('(pointer:fine)').matches&&!window.matchMedia('(prefers-reduced-motion:reduce)').matches){
  joinVisual.addEventListener('pointermove',event=>{
    const rect=joinVisual.getBoundingClientRect();
    const x=Math.max(0,Math.min(1,(event.clientX-rect.left)/rect.width));
    const y=Math.max(0,Math.min(1,(event.clientY-rect.top)/rect.height));
    joinVisual.style.setProperty('--glow-x',`${x*100}%`);joinVisual.style.setProperty('--glow-y',`${y*100}%`);
    joinVisual.style.setProperty('--join-x',`${(x-.5)*18}px`);joinVisual.style.setProperty('--join-y',`${(y-.5)*12}px`);
  });
  joinVisual.addEventListener('pointerleave',()=>{joinVisual.style.setProperty('--glow-x','50%');joinVisual.style.setProperty('--glow-y','40%');joinVisual.style.setProperty('--join-x','0px');joinVisual.style.setProperty('--join-y','0px')});
}

applyLanguage(currentLanguage);
setActivity('sleep');
updateScrollMotion();
