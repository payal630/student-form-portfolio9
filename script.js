// Dark Mode

const btn=document.getElementById("darkMode");

btn.onclick=()=>{

document.body.classList.toggle("dark");

}

// Typing Effect

const text=[
"Frontend Developer",
"Web Designer",
"JavaScript Developer"
];

let i=0;
let j=0;
let current="";
let isDeleting=false;

function typing(){

current=text[i];

document.querySelector(".typing").textContent=current.substring(0,j);

if(!isDeleting){

j++;

if(j>current.length){

isDeleting=true;

setTimeout(typing,1000);

return;

}

}

else{

j--;

if(j==0){

isDeleting=false;

i++;

if(i==text.length)i=0;

}

}

setTimeout(typing,isDeleting?50:120);

}

typing();

// Scroll Reveal

const reveals=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

reveals.forEach(sec=>{

const top=sec.getBoundingClientRect().top;

if(top<window.innerHeight-100){

sec.style.opacity=1;

sec.style.transform="translateY(0)";

}

})

});

reveals.forEach(sec=>{

sec.style.opacity=0;

sec.style.transform="translateY(80px)";

sec.style.transition=".8s";

});
