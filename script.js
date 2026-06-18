
/* ================= 300+ DATA ENGINE ================= */

/* LOCATIONS (300+) */
const basePlaces = [
"Galata Kulesi","Galata Köprüsü","Karaköy","Kadıköy","Üsküdar","Ortaköy",
"Bebek","Arnavutköy","Emirgan","Yıldız Parkı","Maçka","Taksim","İstiklal",
"Cihangir","Beşiktaş","Dolmabahçe","Rumeli Hisarı","Anadolu Hisarı","Beykoz",
"Riva","Şile","Ağva","Belgrad Ormanı","Aydos Ormanı","Sarıyer","Tarabya",
"İstinye","Florya","Bakırköy","Balat","Fener","Samatya","Eminönü","Sultanahmet",
"Topkapı","Gülhane","Pierre Loti","Kız Kulesi","Kuzguncuk","Çengelköy",
"Çamlıca","Büyük Çamlıca","Küçük Çamlıca","Kozyatağı","Ataşehir","Ümraniye",
"Pendik","Kartal","Maltepe","Dragos","Bostancı","Caddebostan","Suadiye",
"Fenerbahçe","Büyükada","Heybeliada","Burgazada","Kınalıada","Adalar"
];

let places = [];
while(places.length < 300){
places.push(basePlaces[Math.floor(Math.random()*basePlaces.length)]);
}

/* ================= ROMANTIC MESSAGES (300) ================= */
const baseMsgs = [
"💖 Kalbim sende","🌹 Sen = huzur","✨ Birlikte her şey güzel",
"💫 Aşk seninle başlar","🌙 Gözlerin evim","💌 Sana aitim",
"🔥 Sen yanımdayken dünya durur","💖 Sonsuzluk biziz","🌹 Kalbim seçti seni"
];

let msgs = [];
while(msgs.length < 300){
msgs.push(baseMsgs[Math.floor(Math.random()*baseMsgs.length)]);
}

/* ================= ACTIVITIES (300) ================= */
const baseActs = [
"gün batımı yürüyüşü","kahve date","film gecesi","sahil yürüyüşü",
"bisiklet turu","piknik","vapur turu","fotoğraf çekimi",
"müzik dinleme","şehir keşfi","yıldız izleme","çatı manzarası"
];

let acts = [];
while(acts.length < 300){
acts.push(baseActs[Math.floor(Math.random()*baseActs.length)]);
}

/* ================= MEMORY ================= */
let data = [];

/* ================= INIT MESSAGE ================= */
function init(){
document.getElementById("msg").innerHTML =
msgs[Math.floor(Math.random()*msgs.length)];
}
window.onload = init;

/* ================= SURPRISE BUTTON ================= */
function surprise(){

let date = document.getElementById("date").value;
if(!date) return;

let a1 = acts[Math.floor(Math.random()*acts.length)];
let a2 = acts[Math.floor(Math.random()*acts.length)];

data.push({date,a1,a2});

document.getElementById("out").innerHTML =
`💖 <b>${date}</b><br>${a1}<br>${a2}`;

renderLog();
}

/* ================= MAP MODE ================= */
function mapMode(){

let a = places[Math.floor(Math.random()*places.length)];
let b = places[Math.floor(Math.random()*places.length)];
let c = places[Math.floor(Math.random()*places.length)];
let d = places[Math.floor(Math.random()*places.length)];

document.getElementById("mapBox").innerHTML =
`📍 ROMANTİK ROTA:<br>${a} → ${b} → ${c} → ${d}`;
}

/* ================= AI MODE ================= */
function aiMode(){

let r = Math.random();
let a = acts[Math.floor(Math.random()*acts.length)];

if(r < 0.33){
out("💖 ROMANTİK MODE:<br>"+a);
}
else if(r < 0.66){
out("🔥 EĞLENCELİ MODE:<br>"+a+" + kahkaha + enerji");
}
else{
out("🌿 SAKİN MODE:<br>ev + film + huzur + sarılma");
}
}

function out(t){
document.getElementById("out").innerHTML = t;
}

/* ================= LOG SYSTEM ================= */
function renderLog(){
let log = document.getElementById("log");
log.innerHTML = "";

data.slice().reverse().forEach(i=>{
log.innerHTML += `
<div class="card">
📅 ${i.date}<br>
💌 ${i.a1}<br>
💌 ${i.a2}
</div>`;
});
}

/* ================= PHOTO UPLOAD ================= */
function loadPhoto(e){
let reader = new FileReader();

reader.onload = function(){
let img = document.getElementById("photo");
img.src = reader.result;
img.style.display = "block";
};

reader.readAsDataURL(e.target.files[0]);
}

/* ================= HEART ANIMATION ================= */
setInterval(()=>{
let h = document.createElement("div");
h.className = "heart";
h.innerHTML = "💖";
h.style.left = Math.random()*100 + "vw";
document.body.appendChild(h);

setTimeout(()=>h.remove(),6000);
},200);
