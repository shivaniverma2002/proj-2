const btn=document.querySelector(".btn");
btn.addEventListener("click",()=>{
    btn.style.backgroundColor="skyBlue";
    btn.style.boxShadow="0 0 40px skyBlue";
    
    btn.style.transitionDuration="0.5s ease-in" ;
      
});
const box=document.querySelector(".box");
let timevent=new Date().getHours();

console.log(timevent);
let greeting=timevent>=5 && timevent<12 ? "Good Morning🌞" :timevent>=12 && timevent<18 ?"Good Afternoon 🌞":timevent>=18 && timevent<21 ?"Good Evening🌛":"Good Night🌚";
console.log(greeting)
box.innerHTML=`<h2>${greeting}</h2>`;
