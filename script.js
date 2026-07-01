const loading = document.querySelector(".loading");
const cover = document.getElementById("cover");
const card = document.getElementById("card");
const button = document.getElementById("openInvitation");

window.addEventListener("load",()=>{

setTimeout(()=>{

loading.classList.add("hidden");

},1000);

});

let startX=0;
let currentX=0;
let dragging=false;

cover.addEventListener("touchstart",(e)=>{

dragging=true;

startX=e.touches[0].clientX;

cover.style.transition="none";

});

cover.addEventListener("touchmove",(e)=>{

if(!dragging)return;

currentX=e.touches[0].clientX;

let diff=startX-currentX;

if(diff<0)diff=0;

if(diff>240)diff=240;

cover.style.transform=`translateX(${-diff}px)`;

});

cover.addEventListener("touchend",()=>{

dragging=false;

let matrix=new DOMMatrix(getComputedStyle(cover).transform);

let moved=Math.abs(matrix.m41);
  if(moved>120){

cover.style.transition=".5s";

cover.style.transform="translateX(-120%)";

setTimeout(()=>{

card.classList.add("show");

},300);

}else{

cover.style.transition=".35s";

cover.style.transform="translateX(0)";

}

});

button.addEventListener("click",()=>{

cover.style.transition=".5s";

cover.style.transform="translateX(-120%)";

setTimeout(()=>{

card.classList.add("show");

},300);

});

document.addEventListener("contextmenu",(e)=>{

e.preventDefault();

});

document.addEventListener("selectstart",(e)=>{

e.preventDefault();

});
window.addEventListener("resize",()=>{

cover.style.transition="none";
cover.style.transform="translateX(0)";

});

setTimeout(()=>{

const swipe=document.querySelector(".swipe-circle");

if(swipe){

swipe.animate([

{transform:"translateY(-50%) translateX(0px)"},

{transform:"translateY(-50%) translateX(145px)"},

{transform:"translateY(-50%) translateX(0px)"}

],{

duration:1600,
iterations:Infinity

});

}

},500);

console.log("Wedding Invitation Ready ❤️");
