function $(id){return document.getElementById(id)}
function saveJSON(key,value){localStorage.setItem(key,JSON.stringify(value))}
function loadJSON(key,fallback){try{return JSON.parse(localStorage.getItem(key))??fallback}catch{return fallback}}
function escapeHtml(s=''){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function fileToDataURL(file){return new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file)})}
function dataUrlToImage(src){return new Promise((resolve,reject)=>{const img=new Image();img.onload=()=>resolve(img);img.onerror=reject;img.src=src})}
function playBeep(type='ok'){try{const ctx=new(window.AudioContext||window.webkitAudioContext)();const osc=ctx.createOscillator();const gain=ctx.createGain();osc.connect(gain);gain.connect(ctx.destination);const map={ok:[880,.12],bad:[220,.18],win:[1046,.35],lose:[146,.45],hint:[660,.15]};const [freq,dur]=map[type]||map.ok;osc.frequency.value=freq;gain.gain.value=.05;osc.start();osc.stop(ctx.currentTime+dur)}catch{}}
