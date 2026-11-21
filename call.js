let callAudioContext;
const closingCaller={name:'Unknown Number',number:'+82 10-0000-6735'};
let closingCallActive=false;
function primeClosingCallAudio(){
 try{
  callAudioContext??=new AudioContext();
  if(callAudioContext.state==='suspended')callAudioContext.resume().catch(()=>{});
 }catch{}
}
function ringClosingCall(){
 const ctx=callAudioContext;
 if(ctx?.state!=='running')return ()=>{};
 const master=ctx.createGain();
 master.gain.value=.26;
 master.connect(ctx.destination);
 function chime(){
  const now=ctx.currentTime;
  for(const offset of [0,.32]){
   for(const frequency of [440,554]){
    const note=ctx.createOscillator(), envelope=ctx.createGain();
    const start=now+offset;
    note.frequency.value=frequency;
    envelope.gain.setValueAtTime(.001,start);
    envelope.gain.linearRampToValueAtTime(.10,start+.025);
    envelope.gain.exponentialRampToValueAtTime(.001,start+.27);
    note.connect(envelope).connect(master);
    note.start(start);
    note.stop(start+.29);
   }
  }
 }
 chime();
 const repeat=setInterval(chime,2600);
 return ()=>{clearInterval(repeat);master.disconnect()};
}
function showClosingCall(show,onFinish,{replay=false}={}){
  phoneMusic.pause();
 if(closingCallActive)return;
 closingCallActive=true;
 const overlay=document.getElementById('story-overlay');
 const {name,number}=closingCaller;
 let stopRing=()=>{}, resetTimer, talkTimer, audio, connectedAt, active=true;
 function header(label){
  return '<div class="call-id"><div class="call-avatar" aria-hidden="true">?</div><h2>'+name+'</h2><p>'+number+'</p><div class="call-state">'+label+'</div></div>';
 }
 function incoming(){
  show('<section class="call-screen">'+header('Incoming Call')+'<div class="call-actions"><button type="button" class="call-decline">Decline</button><button type="button" class="call-accept">Accept</button></div></section>');
  stopRing=ringClosingCall();
  overlay.querySelector('.call-accept').onclick=accept;
  overlay.querySelector('.call-decline').onclick=()=>{
   stopRing();
   show('<section class="call-screen">'+header('Call declined')+'</section>');
   resetTimer=setTimeout(incoming,2400);
  };
 }
 function finish(){
  if(!active)return;
  active=false;
  closingCallActive=false;
  stopRing();
  clearTimeout(resetTimer);
  clearInterval(talkTimer);
  audio?.pause();
  onFinish();
 }
 function accept(){
  stopRing();
  show('<section class="call-screen">'+header(replay?'Recording - 00:00':'00:00')+'<div class="call-transcript" aria-live="polite"></div><div class="call-actions"><button type="button" class="call-decline">'+(replay?'Back':'End Call')+'</button></div></section>');
  overlay.querySelector('.call-decline').onclick=finish;
  const timer=overlay.querySelector('.call-state'), transcript=overlay.querySelector('.call-transcript');
  audio=new Audio('closing-call.mp3');
  connectedAt=performance.now();
  let shown=0,failed=false;
  function update(){
   if(!active)return;
   const seconds=Math.floor((performance.now()-connectedAt)/1000);
   timer.textContent=(replay?'Recording - ':'')+String(Math.floor(seconds/60)).padStart(2,'0')+':'+String(seconds%60).padStart(2,'0');
   const elapsed=failed?(performance.now()-connectedAt)/1000:audio.currentTime;
   while(shown<CALL_CUES.length&&elapsed>=CALL_CUES[shown][0]){
    const [,speaker,korean,indonesian]=CALL_CUES[shown++];
    const line=document.createElement('div');
    line.className='call-line'+(speaker==='Ko Phi'?' call-self':'');
    const name=document.createElement('small'),ko=document.createElement('p'),id=document.createElement('p');
    name.textContent=speaker;
    ko.lang='ko';
    ko.textContent=korean;
    id.lang='id';
    id.textContent=indonesian;
    line.append(name,ko,id);
    transcript.append(line);
    transcript.scrollTop=transcript.scrollHeight;
   }
   if(failed&&elapsed>CALL_CUES.at(-1)[0]+5)finish();
  }
  function silentFallback(){
   if(!active||failed)return;
   failed=true;
   const notice=document.createElement('p');
   notice.className='call-playback-status';
   notice.textContent='Audio unavailable';
   notice.setAttribute('role','status');
   transcript.before(notice);
  }
  audio.addEventListener('ended',finish,{once:true});
  audio.addEventListener('error',silentFallback,{once:true});
  audio.play().catch(silentFallback);
  talkTimer=setInterval(update,100);
  update();
 }
 if(replay)accept();else incoming();
}

window.recentPhoneCalls=()=>window.closingCallAvailable()?
 [{...closingCaller,at:+window.closingCallDate()}]:[];

let lastTypingSound=-Infinity;
function playPhoneEffect(type){
 const ctx=callAudioContext;
 if(document.hidden||ctx?.state!=='running')return;
 const now=ctx.currentTime;
 if(type==='typing'){
  if(now-lastTypingSound<.072)return;
  lastTypingSound=now;
 }
 const notification=type==='notification';
 const tones=notification?[[0,660],[.095,880]]:[[0,245]];
 for(const [offset,pitch] of tones){
  const note=ctx.createOscillator(), gain=ctx.createGain();
  const start=now+offset;
  const end=start+(notification?.13:.032);
  note.type=notification?'sine':'triangle';
  note.frequency.setValueAtTime(pitch,start);
  if(!notification)note.frequency.exponentialRampToValueAtTime(115,end);
  gain.gain.setValueAtTime(.001,start);
  gain.gain.linearRampToValueAtTime(notification?.07:.045,start+.006);
  gain.gain.exponentialRampToValueAtTime(.001,end);
  note.connect(gain).connect(ctx.destination);
  note.start(start);
  note.stop(end);
 }
}
