const pane=document.getElementById('pane');window.pane=pane;
var currentApp='',mode='lock',pass='',timer;
const appNames={Kalender:'Calendar',Jam:'Clock',Catatan:'Notes',Foto:'Photos',Kalkulator:'Calculator',Kamera:'Camera',Setelan:'Settings',Kontak:'Contacts',Musik:'Music',Pesan:'Messages',Berita:'News'};
const el=id=>document.getElementById(id);
const icons={
 Kalender:['calendar','<small class="icon-weekday"></small><strong class="icon-day"></strong>'],
 Jam:['clock','<i></i><i></i><i></i>'],
 Catatan:['notes','<i></i>'],Foto:['photos','<i></i><i></i><i></i><i></i>'],
 Mail:['mail','<i></i>'],Kalkulator:['calculator','<i>−</i><i>+</i><i>×</i><i>=</i>'],
 Kamera:['camera','<i></i>'],Setelan:['settings','<i>⚙</i>'],
 Phone:['phone','<i>☎</i>'],Kontak:['contacts','<i></i>'],Musik:['music','<i>♫</i>'],
 Safari:['browser','<i></i>'],Pesan:['messages','<i></i>'],
 Memo:['memo','<i></i>'],Berita:['news','<i></i>'],DOWNWEB:['downweb','<i class="anon-hood"></i><i class="anon-mask"></i>']
};
function dateNow(){return window.storyDate?.()||new Date(2026,10,28,8,0)}
function tick(){const t=dateNow(),opts={hour:'2-digit',minute:'2-digit',hour12:false};const clock=t.toLocaleTimeString('en-GB',opts);for(const node of document.querySelectorAll('#bigtime,#smalltime,.widgettime'))node.textContent=clock;document.querySelector('.lockdate').textContent=t.toLocaleDateString('en-GB',{weekday:'long',day:'numeric',month:'long',year:'numeric'});document.querySelector('.daynum').textContent=t.getDate();document.querySelector('.weekday').textContent=t.toLocaleDateString('en-GB',{weekday:'long'}).toUpperCase();const dateIcon=document.querySelector('.icon-day');if(dateIcon){dateIcon.textContent=t.getDate();document.querySelector('.icon-weekday').textContent=t.toLocaleDateString('en-GB',{weekday:'short'})}}
function screenMode(m){mode=m;for(const id of ['lock','pin','home','app'])el(id).hidden=id!==m;el('bar').hidden=m==='pin';if(m==='pin'){pass='';dots();el('err').textContent=''}}
function tile(name){
 const [type,art]=icons[name];
 const button=document.createElement('button');
 button.className='tile';
 if(name==='DOWNWEB'&&window.highlightDownweb?.())button.classList.add('new-app');
 button.innerHTML='<b class="app-icon icon-'+type+'" aria-hidden="true">'+art+'</b>';
 button.append(appNames[name]||name);
 button.onclick=()=>openApp(name);
 return button;
}
function refreshHome(){
 const dock=['Phone','Pesan','Safari','Musik'];
 el('grid').replaceChildren(...Object.keys(icons).filter(name=>!dock.includes(name)&&(name!=='DOWNWEB'||window.hasDownweb?.())).map(tile));
 el('dock').replaceChildren(...dock.map(tile));
 const pending=window.pendingReply?.(), reply=el('home-reply');
 reply.hidden=!pending||(window.highlightDownweb?.()&&pending==='Unknown Number');
 reply.textContent=pending?'Reply in '+pending:'';
 reply.onclick=()=>window.openPendingReply?.();
 tick();
}
function goHome(){if(mode==='lock'){screenMode('pin');return}if(mode==='pin')return;window.cleanupUtility?.();currentApp='';screenMode('home');refreshHome()}
window.lockPhone=()=>{
 window.suspendStory?.();
 window.cleanupUtility?.();
 clearTimeout(timer);
 el('toast').hidden=true;
 currentApp='';
 pane.replaceChildren();
 screenMode('lock');
 el('unlock').focus({preventScroll:true});
};
window.refreshConnectionStatus=()=>{
 const status=document.querySelector('.status-icons');
 const {airplane,wifi,mobile,carrier,network}=window.connectionStatus();
 status.querySelector('.signal').hidden=airplane;
 status.querySelector('.wifi').hidden=!wifi;
 status.querySelector('.cellular-label').hidden=!mobile||wifi;
 status.querySelector('.status-plane').hidden=!airplane;
 status.setAttribute('aria-label',[
  airplane?'Airplane mode':carrier,
  network||(mobile?'LTE':'Cellular data off'),
  'Battery'
 ].filter(Boolean).join(', '));
};
function nestedBack(){return pane.querySelector('[data-back],.u > .back')}
function updateBack(){
 const nested=nestedBack();
 const label=nested?.textContent.trim().replace(/^‹\s*/,'');
 el('app-back').textContent='‹ '+(label|| (nested?'Messages':'Home'));
}
function appBack(){const nested=nestedBack();if(nested)nested.click();else goHome();updateBack()}
new MutationObserver(updateBack).observe(pane,{childList:true,subtree:true});
function openApp(name,keepBanner=false){if(mode==='pin'||mode==='lock')return;window.cleanupUtility?.();currentApp=name;screenMode('app');if(!keepBanner)el('toast').hidden=true;pane.replaceChildren();if(['Pesan','Memo','Berita','DOWNWEB'].includes(name))storyApp(name);else utility(name)}
function notify(title,body,onOpen,{kind='message'}={}){
 const banner=el('toast');
 clearTimeout(timer);
 const avatar=document.createElement('span');
 avatar.className='toast-avatar';
 avatar.setAttribute('aria-hidden','true');
 if(title==='Inspectors Lounge'){
  avatar.classList.add('toast-team');
 }else{
  const initials=title.split(/\s+/).slice(0,2).map(word=>word[0]).join('');
  avatar.textContent=kind==='message'||kind==='downweb'?initials:({news:'▤',calendar:'▦'}[kind]||initials);
 }
 const badge=document.createElement('span');
 badge.className='toast-badge toast-'+kind;
 if(kind==='message')avatar.insertAdjacentHTML('beforeend',phoneAssets.portrait(title));
 avatar.append(badge);
 const content=document.createElement('span');
 content.className='toast-content';
 const heading=document.createElement('strong');
 heading.textContent=title;
 const now=document.createElement('small');
 now.className='toast-now';
 now.textContent='now';
 const preview=document.createElement('span');
 preview.className='toast-preview';
 preview.textContent=body;
 content.append(heading,now,preview);
 banner.replaceChildren(avatar,content);
 banner.hidden=false;
 playPhoneEffect('notification');
 banner.onclick=()=>{
  clearTimeout(timer);
  banner.hidden=true;
  onOpen?.();
 };
 timer=setTimeout(()=>banner.hidden=true,8500);
}
function dots(){el('dots').textContent='●'.repeat(pass.length)+'○'.repeat(4-pass.length)}
function key(k){if(k==='⌫')pass=pass.slice(0,-1);else if(/^\d$/.test(k))pass+=k;dots();if(pass.length===4){if(pass==='0209'){screenMode('home');refreshHome();startStory()}else{pass='';dots();el('err').textContent='Incorrect passcode.'}}}
for(const k of ['1','2','3','4','5','6','7','8','9','','0','⌫']){let b=document.createElement(k?'button':'span');b.setAttribute('aria-label',k||'');b.textContent=k;
const letters=['ABC','DEF','GHI','JKL','MNO','PQRS','TUV','WXYZ'][Number(k)-2];
if(letters){const label=document.createElement('small');label.textContent=letters;b.append(label)}
b.onclick=()=>key(k);el('digits').append(b)}
document.addEventListener('keydown',e=>{if(mode==='pin'){if(e.key==='Backspace')key('⌫');else if(/^\d$/.test(e.key))key(e.key)}if(e.key==='Escape'&&mode==='app'&&!el('story-overlay').open)appBack()});el('bar').onclick=goHome;el('unlock').onclick=()=>screenMode('pin');let touchY;el('lock').ontouchstart=e=>touchY=e.touches[0].clientY;el('lock').ontouchend=e=>{if(touchY-e.changedTouches[0].clientY>45)screenMode('pin')};refreshHome();window.refreshConnectionStatus();setInterval(tick,1000);
