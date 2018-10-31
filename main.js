// create variables to select to traverse DOM with
const left = document.querySelector(".left");
const right =  document.querySelector(".right");
const container =  document.querySelector(".container");

// event listeners for hovering asides
left.addEventListener("mouseenter", ()=>{
    container.classList.add("hover-left");
});

left.addEventListener("mouseleave", ()=>{
    container.classList.remove("hover-left");
});

right.addEventListener("mouseenter", ()=>{
    container.classList.add("hover-right");
});

right.addEventListener("mouseleave", ()=> {
    container.classList.remove("hover-right");
});
