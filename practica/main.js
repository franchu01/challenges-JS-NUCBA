const btn = document.querySelector(".ctn__btn");
const element = document.querySelectorAll(".option")
console.log(btn);
console.log(element);
btn.addEventListener("click",()=>{
    element.forEach((i)=> i.classList.toggle("show"));
});