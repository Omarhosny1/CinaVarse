let img = document.getElementById("img");
let imgOne = document.getElementById("one");
let imgTwo = document.getElementById("two");
let imgThree = document.getElementById("three");
let srcOne = "/assets/about/about2.webp";
let srcTwo = "/assets/about/about1.webp";
let srcThree = "/assets/blog/blog1.webp";

imgOne.addEventListener("click", ()=>{
    img.src = srcOne;
    imgOne.classList.add("active");
    imgTwo.classList.remove("active");
    imgThree.classList.remove("active");
})
imgTwo.addEventListener("click", ()=>{
    img.src = srcTwo;
    imgTwo.classList.add("active");
    imgOne.classList.remove("active");
    imgThree.classList.remove("active");
})
imgThree.addEventListener("click", ()=>{
    img.src = srcThree;
    imgThree.classList.add("active")
    imgOne.classList.remove("active");
    imgTwo.classList.remove("active");
})

