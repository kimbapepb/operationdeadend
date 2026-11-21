(() => {
const notes = [["27 November 2026", ["Sudah satu tahun sejak kepergianmu, sayang. Bagaimana kabarmu di sana? Maafkan saya karena tidak berdaya mengatasi ini. Pembunuhmu sudah dibebaskan. Dia dibantu oleh Kang Seung-hyun. Putranya ditangkap oleh polisi karena memperdagangkan alkohol di Gangbuk. Dia menginginkan EPB untuk dibubarkan. Beberapa hari ke depan, akan ada demonstrasi besar-besaran di balai kota untuk menuntut pembubaran tersebut. Saya yakin, Seung-hyun ada di belakangnya.", "Sementara, kami sedang mengusut tentang Gyu-cheol. Kami menemukan bahwa beberapa siswa memiliki hasil tes positif kandungan Love Pills. Kamu sudah menyelidiki banyak tentang pil itu sebelum Gyu-cheol menusukmu, sayang. Saya tidak akan membiarkan penyelidikanmu sia-sia. Tolong tunggu sedikit lagi, saya, Inspectors, dan Rookies akan menangkapnya untukmu.", "Sekali lagi, maafkan saya."]], ["22 November 2026", ["Bapak mengaktifkan protokol Narcotest dan menyasar banyak sekolah untuk tes urine secara kolektif. Saya rasa, ini ada hubungannya dengan kecurigaannya terhadap Gyu-cheol. Ah, saya berharap kejadian beberapa tahun yang lalu tidak terulang kembali. Gyu-cheol, jika dia melakukan hal tersebut kembali, artinya hukuman yang ada tidak mempan untuknya. Sayang, tolong doakan saya dari atas sana. Semoga saya bisa membawa keadilan untukmu."]], ["21 November 2026", ["Sayang, Gyu-cheol dibebaskan beberapa tahun sebelum vonisnya berakhir. Saya masih belum menerima ketika hakim hanya memvonis Gyu-cheol 6 tahun karena membunuhmu. Mereka merasa, Gyu-cheol masih belia ketika dia melakukan aksi keji tersebut. Saya tidak mengerti. Bukankah hukum harus menghukum semua orang sama rata, bahkan yang di bawah umur sekalipun? Namun, Bapak memerintahkan kami untuk memantaunya. Saya rasa, Bapak merasakan sesuatu yang tidak beres dari pergerakan Gyu-cheol."]], ["15 November 2026", ["Sayang, kami berhasil menangkap Kang Min-jae di Gangbuk. Dia adalah putra dari anggota Majelis Nasional, Kang Seung-hyun, orang yang sering menentang Bapak. Saya rasa, partai sebelah sudah sangat murka karena hal ini. Namun, mereka tidak memecat Seung-hyun karena dia adalah kandidat terkuat pemilihan presiden untuk menghadapi Bapak. Mereka tampak merencanakan sesuatu. Saya harap itu bukan hal yang buruk."]], ["14 November 2026", ["Terkadang saya tidak memahami otak manusia. Ada yang berkata pendidikan harus direformasi karena terlalu banyak cela di dalamnya. Ada pula yang menentang kami. Jadi, di titik mana saya harus berdiri? Sebab, ketika saya melangkah terlalu jauh ke dalam sistem ini, saya merasa tersesat. Saya tidak tahu sampai kapan saya harus melakukan ini. Saya juga tidak tahu ancaman apa yang menerjang saya ke depannya. Namun, satu yang pasti, saya mengetahui kalau kebenaran harus ditegakkan. Demi kamu juga, Cece, tunanganku sayang."]], ["04 November 2026", ["Bahan Membuat Tteokbokki", "200 gram tepung beras putih", "50 gram tepung tapioka (kanji)", "1 sendok teh garam", "100-120 ml air panas (dituang perlahan)", "1 sendok makan minyak wijen atau minyak goreng (untuk olesan agar tidak lengket)", "2-3 sendok makan saus gochujang", "1 sendok makan saus gochugaru", "2 siung bawang putih (dicincang halus)", "1 sendok makan kecap asin", "1 sendok makan gula pasir / gula aren", "1 sendok teh minyak wijen", "300-400 ml air atau kaldu (ikan teri/ayam)", "Catatan: Kijang suka yang pedas. Koko jangan diberi terlalu banyak saus."]], ["28 Oktober 2026", ["Minggu lalu, adikmu, Koko Pedia, bermain bola di kantor. Saya telah melarangnya, tetapi dia terlalu senang karena mendapatkan hadiah bola baru dari Bapak. Sayangnya, bola tersebut mengenai keyboard Kimpul yang sedang membuat program baru. Sebagai saksi mata dan agar murka Kimpul tidak sampai padanya, adikmu memberikan saya 50 kupon chicken yang akan expired dalam waktu 1 minggu. Saya melihat Kimpul pusing membenarkan keyboard tersebut, sementara saya terlalu banyak memakan ayam. Kijang tidak mampu membantu saya dan Koko hanya tersenyum jahil sepanjang hari. Jika teguran saya kembali tidak mempan, tolong tegur dia dari atas sana, sayang."]]];
const palette=document.createElement('style');
palette.textContent=`
.u{--f:#eef1f6;--soft:#9da6b3;--card:#202328;color:var(--f);background:#111316;box-sizing:border-box;min-height:100%;padding:12px 17px 30px;font:16px/1.45 system-ui,sans-serif;text-align:left}
.u *{box-sizing:border-box}.u h2,.u h3,.u p{margin:0 0 12px}.u h2{font-size:29px;letter-spacing:-1px}.u h3{font-size:19px}.u .sub,.u small{color:var(--soft);font-size:13px}.u button,.u input,.u select,.u a{font:inherit;color:inherit}.u button{border:0;background:var(--card);padding:10px 13px;cursor:pointer;border-radius:12px;text-align:left}.u .list{background:var(--card);border-radius:15px;overflow:hidden;margin:12px 0}.u .row{display:block;width:100%;padding:13px 14px;border-radius:0;background:transparent;border-bottom:1px solid #ffffff10;text-align:left;white-space:normal}.u .row:last-child{border:0}.u .row small{display:block;line-height:1.4;margin-top:4px}.u .el{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.u .back{color:#7bb4ff;padding:6px 0 14px;background:none}.u .paper{white-space:pre-line;line-height:1.68;color:#dadee4}.u .topline{display:flex;align-items:center;justify-content:space-between;gap:4px}.u .grid7{display:grid;grid-template-columns:repeat(7,1fr);text-align:center;gap:3px}.u .grid7>*{text-align:center;padding:7px 0}.u .sel{background:#ec765e;color:#161310}.u .clock{font-size:clamp(40px,9vw,61px);font-weight:300;font-variant-numeric:tabular-nums;letter-spacing:-3px}.u .gallery{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:3px;margin-top:12px}.u .gallery button{padding:0;border-radius:3px;aspect-ratio:1;overflow:hidden}.u .gallery img{width:100%;height:100%;object-fit:cover}.u .bigphoto,.u video{width:100%;max-height:55vh;object-fit:contain}.u .calc{text-align:right;font-size:48px;overflow-wrap:anywhere;padding:30px 5px 12px}.u .keys{display:grid;grid-template-columns:repeat(4,1fr);gap:7px}.u .keys button{text-align:center;border-radius:20px;height:50px;font-size:22px}.u .op{background:#b65d10}.u .extra{background:#40464e}.u iframe{border:0;width:100%;height:360px;border-radius:16px}.u .link{color:#87baff}.u .ava{background:#344752;width:68px;height:68px;border-radius:24px;display:grid;place-items:center;font-size:25px;margin:12px 0}.u input[type=search]{background:#25282c;border:0;width:100%;padding:11px;border-radius:12px}.u .switch{float:right;accent-color:#6fb6a6}.u .shutter{display:block;background:white;border:5px double #222;border-radius:50%;width:60px;height:60px;margin:12px auto}.u .fav{display:flex;gap:8px;flex-wrap:wrap}.u .fav a{background:var(--card);padding:9px;border-radius:10px;text-decoration:none}`;
document.head.append(palette);
let el,interval,stream,cameraSession=0;
const safe=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]);
const read=(k,d)=>{try{return JSON.parse(localStorage.getItem('phi.utility.'+k))??d}catch{return d}};
const write=(k,v)=>{try{localStorage.setItem('phi.utility.'+k,JSON.stringify(v));return true}catch{return false}};
function box(title,body){el.innerHTML='<h2>'+safe(title)+'</h2>'+body}
function back(label,fn){const b=document.createElement('button');b.className='back';b.textContent='‹ '+label;b.onclick=fn;el.prepend(b)}
function rows(items,run){const list=document.createElement('div');list.className='list';items.forEach(([name,desc],i)=>{const b=document.createElement('button');b.className='row';b.innerHTML='<strong>'+safe(name)+'</strong><small class="el">'+safe(desc||'')+'</small>';b.onclick=()=>run(i);list.append(b)});el.append(list)}
const date=()=>typeof window.storyDate==='function'?window.storyDate():new Date(2026,10,28,8);
const fmt=(d,opt)=>d.toLocaleDateString('en-GB',opt);
function calendar(month=date().getMonth(),selected=date().getDate()){
 const year=date().getFullYear(), first=new Date(year,month,1),last=new Date(year,month+1,0);
 box('Calendar','<div class="topline"><button id="prev" aria-label="Previous month">‹</button><b>'+fmt(first,{month:'long',year:'numeric'})+'</b><button id="next" aria-label="Next month">›</button></div><div class="grid7" id="days"></div><p id="agenda" class="sub"></p>');
 const grid=el.querySelector('#days');for(const s of ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'])grid.insertAdjacentHTML('beforeend','<small>'+s+'</small>'); for(let i=0;i<(first.getDay()+6)%7;i++)grid.append(document.createElement('span'));
 for(let i=1;i<=last.getDate();i++){const b=document.createElement('button');b.textContent=i;b.className=i===selected?'sel':'';b.onclick=()=>calendar(month,i);grid.append(b)}
 el.querySelector('#prev').onclick=()=>calendar(month-1,1);el.querySelector('#next').onclick=()=>calendar(month+1,1);
 el.querySelector('#agenda').textContent=fmt(new Date(year,month,selected),{day:'numeric',month:'long'})+' - No events';
}
const contacts=[
 ['Abeoji','4927-3186'],['Kijang','7816-5093'],['Kimpul','3268-7541'],
 ['Koko','6452-0869'],['My Love ❤️','9148-2375'],
 ['Inspektur Han','5738-6204'],['Inspektur Lim','8361-4907'],['Inspektur Seo','2819-5634'],
 ['Inspektur Yoon','4057-8123'],['Inspektur Jeong','9623-1758'],
 ['Petugas Park','7105-3492'],['Petugas Choi','3598-2741'],['Petugas Kang','6284-9037'],
 ['Petugas Moon','8936-5270'],['Petugas Shin','2459-6817'],['Petugas Oh','5672-4180'],
 ['Petugas Baek','7419-3628'],['Petugas Hwang','4186-7593']
];
const mails=[
 {id:'gangbuk',day:27,sender:'SMA Gangbuk',subject:'Berkas pendampingan siswa',body:'Terima kasih, Inspector Ko Phi. Tim konseling sudah menerima berkas pendampingan. Pertemuan dengan orang tua telah selesai.',unread:true},
 {id:'nakwon',day:26,sender:'Elite Protection Bureau',subject:'Laporan akhir kunjungan Nakwon',body:'Inspector Ko Phi, laporan kunjungan sudah masuk ke arsip EPB. Seluruh keterangan guru dan siswa telah kami terima.'},
 {id:'seungyeon',day:23,sender:'SMA Seungyeon',subject:'Konfirmasi penyelesaian laporan',body:'Pak Ko Phi, pihak sekolah telah menyelesaikan tindak lanjut sesuai hasil pertemuan. Terima kasih atas pendampingan Bapak.'}
];
const histories=['Jadwal konseling sekolah Seoul','Pusat layanan pengaduan siswa Seoul','Lokasi SMA Nakwon','Rute ke Gangbuk-gu'];
const photos=()=>[phonePhotos.school,...read('photos',[]).map(([src,title])=>[src,title.replaceAll(' '+String.fromCharCode(183)+' ',' - ')])];
async function gallery(){
 const root=el;
 box('Library','<div class="gallery" aria-label="Photo library"></div>');
 const grid=root.querySelector('.gallery');
 const pictures=photos();
 function append(entries){
  const start=grid.children.length;
  entries.forEach(([src,title],index)=>{
   const button=document.createElement('button'), image=document.createElement('img');
   button.type='button';
   button.setAttribute('aria-label',title);
   image.src=src;
   image.alt='';
   image.loading='lazy';
   button.append(image);
   button.onclick=()=>window.openPhonePhotoViewer(pictures,start+index);
   grid.append(button);
  });
 }
 append(pictures);
 const imported=await phonePhotos.library();
 if(currentApp!=='Foto'||el!==root||!grid.isConnected)return;
 pictures.push(...imported);
 append(imported);
}
function calculator(){
 let a=null,op=null,fresh=true,value='0';box('Calculator','<div class="calc" aria-live="polite">0</div><div class="keys"></div>');
 function compute(x,y){return ({'+':()=>x+y,'−':()=>x-y,'×':()=>x*y,'÷':()=>x/y}[op])()}
 const keys=['AC','±','%','÷','7','8','9','×','4','5','6','−','1','2','3','+','0',',','='];
 for(const k of keys){const b=document.createElement('button');b.textContent=k;b.className='÷×−+='.includes(k)?'op':keys.indexOf(k)<3?'extra':'';if(k==='0')b.style.gridColumn='span 2';b.onclick=()=>{if(k==='AC'){value='0';fresh=true;a=op=null}else if(k==='±'){value=String(-Number(value))}else if(k==='%'){value=String(Number(value)/100)}else if('÷×−+='.includes(k)){if(op!==null&&a!==null&&!fresh){let v=compute(a,Number(value));value=Number.isFinite(v)?String(+v.toPrecision(12)):'Error'}a=Number(value);op=k==='='?null:k;fresh=true}else if(k===','){if(fresh)value='0';if(!value.includes('.'))value+='.';fresh=false}else{value=fresh||value==='0'?k:value.length<14?value+k:value;fresh=false}el.querySelector('.calc').textContent=value.replace('.',',')};el.querySelector('.keys').append(b)}
}
function stop(){cameraSession++;if(stream){stream.getTracks().forEach(t=>t.stop());stream=null}clearInterval(interval)}
window.cleanupUtility=stop;
function camera(){
 const session=++cameraSession;
 el.classList.add('camera-app');
 el.innerHTML=`
 <div class="camera-top">
  <button type="button" id="flash" aria-label="Flash" aria-pressed="false">ϟ</button>
  <button type="button" id="enable">Use device camera</button>
  <button type="button" id="grid-toggle" aria-label="Grid" aria-pressed="false">▦</button>
 </div>
 <div class="viewfinder">
  <img class="camera-scene" src="Jinwon HS.jpeg" alt="Jinwon High School">
  <video autoplay muted playsinline hidden></video>
  <div class="camera-grid" hidden></div>
  <div class="camera-zoom" aria-label="Zoom">
   <button type="button" data-zoom="0.5" aria-pressed="false">.5</button>
   <button type="button" data-zoom="1" aria-pressed="true">1×</button>
   <button type="button" data-zoom="3" aria-pressed="false">3</button>
  </div>
  <div class="camera-feedback" role="status"></div>
 </div>
 <div class="camera-controls">
  <span class="camera-mode">PHOTO</span>
  <div class="camera-buttons">
   <button type="button" id="last-photo" aria-label="Photos"></button>
   <button type="button" id="snap" aria-label="Take photo"></button>
   <button type="button" id="flip" aria-label="Switch camera" disabled>⟳</button>
  </div>
 </div>`;
 const root=el, find=id=>root.querySelector(id);
 const video=find('video'), scene=find('.camera-scene'), view=find('.viewfinder');
 const feedback=find('.camera-feedback'), flip=find('#flip'), enable=find('#enable');
 let zoom=1, facing='environment', request=0, flash=false;
 function thumbnail(){
  const last=read('photos',[])[0]||photos()[0];
  find('#last-photo').style.backgroundImage='url("'+last[0]+'")';
 }
 thumbnail();
 find('#last-photo').onclick=()=>openApp('Foto');
 find('#flash').onclick=e=>e.currentTarget.setAttribute('aria-pressed',String(flash=!flash));
 find('#grid-toggle').onclick=e=>{
  const grid=find('.camera-grid');
  grid.hidden=!grid.hidden;
  e.currentTarget.setAttribute('aria-pressed',String(!grid.hidden));
 };
 root.querySelectorAll('[data-zoom]').forEach(button=>button.onclick=()=>{
  zoom=Number(button.dataset.zoom);
  view.style.setProperty('--zoom',Math.max(1,zoom));
  view.classList.toggle('wide',zoom===.5);
  root.querySelectorAll('[data-zoom]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
 });
 async function connect(){
  const attempt=++request;
  enable.disabled=true;
  flip.disabled=true;
  feedback.textContent='';
  stream?.getTracks().forEach(track=>track.stop());
  stream=null;
  video.hidden=true;
  scene.hidden=false;
  try{
   const media=await navigator.mediaDevices.getUserMedia({video:{facingMode:facing},audio:false});
   if(session!==cameraSession||attempt!==request){media.getTracks().forEach(track=>track.stop());return}
   stream=media;
   video.srcObject=media;
   await video.play();
   if(session!==cameraSession||attempt!==request)return;
   scene.hidden=true;
   video.hidden=false;
   enable.hidden=true;
   flip.disabled=false;
  }catch{
   if(session!==cameraSession||attempt!==request)return;
   stream?.getTracks().forEach(track=>track.stop());
   stream=null;
   enable.hidden=false;
   enable.disabled=false;
   feedback.textContent='Device camera unavailable.';
  }
 }
 enable.onclick=connect;
 flip.onclick=()=>{facing=facing==='environment'?'user':'environment';connect()};
 find('#snap').onclick=()=>{
  const source=video.hidden?scene:video;
  const w=source.videoWidth||source.naturalWidth,h=source.videoHeight||source.naturalHeight;
  if(!w||!h)return;
  const ratio=zoom===.5?w/h:view.clientWidth/view.clientHeight;
  const scale=Math.max(zoom,1);
  const cropW=Math.min(w,h*ratio)/scale,cropH=cropW/ratio;
  const canvas=document.createElement('canvas');
  canvas.width=Math.min(780,Math.round(cropW));
  canvas.height=Math.round(canvas.width/ratio);
  canvas.getContext('2d').drawImage(source,(w-cropW)/2,(h-cropH)/2,cropW,cropH,0,0,canvas.width,canvas.height);
  const records=read('photos',[]);
  records.unshift([canvas.toDataURL('image/jpeg',.76),'Photo - '+fmt(date(),{day:'numeric',month:'long'})]);
  const saved=write('photos',records);
  feedback.textContent=saved?'Saved to Photos':'Photo storage is full.';
  if(saved)thumbnail();
  view.animate([{opacity:flash?.15:.65},{opacity:1}],{duration:180});
 };
}
const cellularCarrier='SK Telecom';
const wifiNetwork='EPB WiFi';
const connections={airplane:false,wifi:false,bluetooth:true,mobile:true,...read('connections',{})};
window.connectionStatus=()=>({
 airplane:connections.airplane,
 wifi:connections.wifi,
 network:connections.wifi?wifiNetwork:null,
 mobile:connections.mobile&&!connections.airplane,
 carrier:connections.mobile&&!connections.airplane?cellularCarrier:null
});
function settings(){
 const status=window.connectionStatus();
 const networks={wifi:status.network,mobile:status.carrier};
 const toggles=[
  ['airplane','Airplane Mode','✈'],
  ['wifi','Wi-Fi',''],
  ['bluetooth','Bluetooth',''],
  ['mobile','Cellular Data','']
 ];
 const switches=toggles.map(([key,label,glyph])=>{
  const details=networks[key]?'<small>'+networks[key]+'</small>':'';
  const active=key==='mobile'?status.mobile:connections[key];
  return '<button type="button" class="setting-switch-row" role="switch" aria-label="'+label+'" aria-checked="'+active+'" data-setting="'+key+'"'+(key==='mobile'&&connections.airplane?' disabled':'')+'><i class="setting-symbol symbol-'+key+'" aria-hidden="true">'+glyph+'</i><span class="setting-label">'+label+details+'</span><span class="setting-toggle" aria-hidden="true"></span></button>';
 }).join('');
 box('Settings','<button type="button" class="setting-profile"><span class="setting-avatar" aria-hidden="true">KP'+phoneAssets.portrait('Ko Phi')+'</span><span><strong>Ko Phi</strong><small>kophi@moedu.com</small></span></button><div class="setting-network">'+switches+'</div><button class="setting-lock" type="button">Lock Now</button>');
 el.querySelector('.setting-profile').onclick=()=>{
  box('Profile','<div class="list row"><span class="ava">KP</span><strong>Ko Phi</strong><small>Elite Protection Bureau</small><small>kophi@moedu.com</small></div>');
  rows([['About','Ko Phi’s phone']],()=>{
   box('About','<div class="list row">Device name<br><strong>Ko Phi’s phone</strong></div>');
   back('Settings',settings);
  });
  back('Settings',settings);
 };
 el.querySelectorAll('[data-setting]').forEach(button=>button.onclick=()=>{
  const key=button.dataset.setting;
  connections[key]=!connections[key];
  if(key==='airplane'&&connections.airplane)connections.wifi=false;
  write('connections',connections);
  window.refreshConnectionStatus?.();
  settings();
  el.querySelector('[data-setting="'+key+'"]')?.focus({preventScroll:true});
 });
 el.querySelector('.setting-lock').onclick=()=>window.lockPhone();
}
function clock(){box('Clock','<small>SEOUL</small><div class="clock"></div><div class="sub" id="clockDate"></div><h3 style="margin-top:36px">Alarm</h3><p class="sub">No alarms.</p>');const tick=()=>{el.querySelector('.clock').textContent=date().toLocaleTimeString('en-GB',{hour12:false}).replaceAll('.',':');el.querySelector('#clockDate').textContent=fmt(date(),{weekday:'long',day:'numeric',month:'long',year:'numeric'})};tick();interval=setInterval(tick,1000)}
function safari(view='start'){
 const favorites=[
  ['Google','G','https://www.google.com'],['YouTube','▶','https://www.youtube.com'],
  ['Naver','N','https://www.naver.com'],['Instagram','◎','https://www.instagram.com'],
  ['Wikipedia','W','https://en.wikipedia.org'],['X','𝕏','https://x.com'],
  ['Netflix','N','https://www.netflix.com'],['Weverse','W','https://weverse.io']
 ];
 el.classList.add('browser-app');
 el.innerHTML=`<form class="browser-address"><input type="search" aria-label="Search or enter website name" placeholder="Search or enter website name"></form>
 <nav class="browser-tools" aria-label="Browser navigation">
  <button type="button" data-view="start" aria-label="Favorites">⌂</button>
  <button type="button" data-view="history" aria-label="History">◷</button>
  <button type="button" data-view="reading" aria-label="Reading List">▤</button>
 </nav><main class="browser-main"></main>`;
 const main=el.querySelector('.browser-main');
 function visit(query){
  if(!query.trim())return;
  let url;
  try{
   if(/^[a-z][a-z0-9+.-]*:/i.test(query)||/^[\w-]+\.[\w.-]+(?:\/\S*)?$/.test(query)){
    const target=new URL(query.includes('://')?query:'https://'+query);
    if(!['http:','https:'].includes(target.protocol))return;
    url=target.href;
   }
  }catch{return}
  write('history',[query,...read('history',histories).filter(x=>x!==query)].slice(0,30));
  window.open(url||'https://www.google.com/search?q='+encodeURIComponent(query),'_blank','noopener');
 }
 if(view==='start'){
  main.innerHTML='<h2>Favorites</h2><div class="browser-favorites">'+favorites.map(([label,mark,url],i)=>
   '<a href="'+url+'" target="_blank" rel="noopener" data-favorite="'+i+'"><b>'+mark+'</b><span>'+label+'</span></a>').join('')
   +'</div><h3>Privacy</h3><div class="browser-card">External pages open in your browser.</div><h3>Reading List</h3><div class="browser-card">No saved pages</div>';
 }else if(view==='history'){
  main.innerHTML='<h2>History</h2><div class="list"></div>';
  read('history',histories).forEach(item=>{
   const row=document.createElement('button');
   row.className='row';
   row.textContent=item;
   row.onclick=()=>visit(item);
   main.querySelector('.list').append(row);
  });
 }else main.innerHTML='<h2>Reading List</h2><div class="browser-card">No saved pages</div>';
 el.querySelectorAll('[data-view]').forEach(button=>{
  button.setAttribute('aria-pressed',String(button.dataset.view===view));
  button.onclick=()=>safari(button.dataset.view);
 });
 el.querySelector('form').onsubmit=event=>{event.preventDefault();visit(el.querySelector('input').value.trim())};
}
function contactsApp(){
 box('Contacts','');
 rows(contacts.map(([name])=>[name,'']),i=>{
  const [name,number]=contacts[i];
  const initials=name.split(' ').slice(0,2).map(part=>Array.from(part)[0]).join('');
  box(name,'<div class="ava">'+safe(initials)+phoneAssets.portrait(name)+'</div><div class="list row"><small>mobile</small>+82 10-'+safe(number)+'</div>');
  back('Contacts',contactsApp);
 });
}
function phoneApp(){
 box('Phone','<h3>Recents</h3><div class="phone-recents"></div>');
 const list=el.querySelector('.phone-recents');
 const [call]=window.recentPhoneCalls();
 if(!call){
  list.textContent='No calls yet';
  list.classList.add('phone-empty');
  return;
 }
 const when=new Date(call.at);
 const prefix=fmt(when,{day:'numeric',month:'short'});
 const time=when.toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'});
 const row=document.createElement('button');
 row.type='button';
 row.className='phone-recent';
 row.innerHTML='<span class="phone-avatar" aria-hidden="true">?</span><span class="phone-meta"><strong>'+safe(call.name)+'</strong><small>'+safe(call.number)+'</small><small>Incoming call - Replay available</small></span><time>'+prefix+'<br>'+time+'</time>';
 row.onclick=()=>window.replayClosingCall();
 list.append(row);
}
function notesApp(){
 const scene=window.getSceneNote?.();
 const entries=scene?[scene,...notes]:notes;
 box('Notes','<p class="sub">On My Phone - '+entries.length+' notes</p>');
 rows(entries.map(([title,paragraphs])=>[title,paragraphs[0]]),index=>{
  const [title,paragraphs]=entries[index];
  box(title,'<div class="paper">'+paragraphs.map(paragraph=>'<p>'+safe(paragraph)+'</p>').join('')+'</div>');
  back('Notes',notesApp);
 });
}
function mailDate(day){
 const now=date();
 const difference=(Date.UTC(now.getFullYear(),now.getMonth(),now.getDate())-Date.UTC(2026,10,day))/86400000;
 if(difference===1)return 'Yesterday';
 return fmt(new Date(2026,10,day),difference>1&&difference<7?{weekday:'long'}:{day:'numeric',month:'short'});
}
function mail(){
 el.classList.add('mail-app');
 box('Inbox','<div class="inbox-list" aria-label="Inbox messages"></div>');
 const opened=read('openedMail',[]);
 const list=el.querySelector('.inbox-list');
 for(const message of mails){
  const unread=message.unread&&!opened.includes(message.id);
  const row=document.createElement('button');
  row.type='button';
  row.className='inbox-message'+(unread?' is-unread':'');
  const stamp=mailDate(message.day);
  row.setAttribute('aria-label',[unread?'Unread':'',message.sender,message.subject,stamp].filter(Boolean).join(', '));
  row.innerHTML='<span class="inbox-sender">'+safe(message.sender)+'</span><time datetime="2026-11-'+message.day+'">'+safe(stamp)+'</time><strong class="inbox-subject">'+safe(message.subject)+'</strong><span class="inbox-preview">'+safe(message.body)+'</span>';
  row.onclick=()=>{
   if(unread)write('openedMail',[...opened,message.id]);
   box(message.subject,'<div class="mail-envelope"><strong>'+safe(message.sender)+'</strong><small>To Ko Phi &lt;kophi@moedu.com&gt;</small><small>'+fmt(new Date(2026,10,message.day),{day:'numeric',month:'long',year:'numeric'})+'</small></div><div class="paper">'+safe(message.body)+'</div>');
   back('Inbox',mail);
   document.getElementById('pane').scrollTop=0;
  };
  list.append(row);
 }
}
function music(){phoneMusic.mount(el)}
window.utility=name=>{stop();const parent=window.pane||document.getElementById('pane');parent.innerHTML='<section class="u"></section>';el=parent.firstElementChild;({Phone:phoneApp,Kalender:calendar,Jam:clock,Catatan:notesApp,Foto:gallery,Mail:mail,Kalkulator:calculator,Kamera:camera,Setelan:settings,Kontak:contactsApp,Musik:music,Safari:safari}[name])()};
})();
