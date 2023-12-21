
// // console.log(rightbtn) 

// // ---------------------------slider-----------------------
// const imgNumber = document.querySelectorAll(".slide-content-left-top img")
// let index = 0
// // console.log(imgNumber.length)
// const rightbtn = document.querySelector('.fa-chevron-right')
// const leftbtn = document.querySelector('.fa-chevron-left')
// rightbtn.addEventListener("click", function(){
//     // console.log("ok")
//     index = index+1
//     if(index>imgNumber.length-1){
//         index=0
//     }
//     document.querySelector(".slide-content-left-top").style.right = index * 100+"%"
// })

// leftbtn.addEventListener("click", function(){
//     // console.log("ok")
//     index = index-1
//     if(index<=0){
//         index=imgNumber.length-1
//     }
//     document.querySelector(".slide-content-left-top").style.right = index * 100+"%"
// })

// // ------------------------header fixed------------------------
window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// // -------------------------------dot-------------------------
const dots = document.querySelectorAll('.dot');

const imgNumber = document.querySelectorAll(".slide-content-left-top img");
let index = 0;

const rightbtn = document.querySelector('.fa-chevron-right');
const leftbtn = document.querySelector('.fa-chevron-left');

rightbtn.addEventListener("click", function(){
    index = (index + 1) % imgNumber.length;
    updateSlider();
});

leftbtn.addEventListener("click", function(){
    index = (index - 1 + imgNumber.length) % imgNumber.length;
    updateSlider();
});

function updateSlider() {
    const slideContent = document.querySelector(".slide-content-left-top");
    slideContent.style.right = index * 100 + "%";
    setActiveDot(index);
}

window.onload = function() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => {
            index = idx;
            updateSlider();
        });
    });
};

function setActiveDot(index) {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}


// ----------------------------slider 2------------------
// function imgAuto () {
//     index = index + 1
//     if (index >imgNumber.length-1){
//         index = 0;
//     }
//     document.querySelector(".slide-content-left-top").style.right = index * 100+"%"

// }
// setInterval(imgAuto,5000)




// ---------------------------test---------------

// Hàm này cập nhật slider và dấu chấm khi chuyển đổi tự động
function imgAuto() {
    index = (index + 1) % imgNumber.length;
    updateSlider();
}

// Thiết lập một interval để tự động chuyển slide và cập nhật dấu chấm
const intervalId = setInterval(imgAuto, 1000);

// Xóa interval khi người dùng hover vào slider
const slider = document.querySelector('.slider');
slider.addEventListener('mouseover', () => {
    clearInterval(intervalId);
});

// Khôi phục interval khi người dùng rời đi khỏi slider
slider.addEventListener('mouseout', () => {
    intervalId = setInterval(imgAuto, 10000);
});