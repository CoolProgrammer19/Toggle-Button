const btn = document.querySelector(".btn");
const circle = document.querySelector(".circle");

circle.addEventListener('click',function(){
    circle.classList.toggle("circle-active");
    btn.classList.toggle("btn-active");
})