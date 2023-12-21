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

// --------------------------------

function increaseQuantity() {
  const quantityInput = document.querySelector('.cartt .quantity');
  quantityInput.value = parseInt(quantityInput.value) + 1;
}

function decreaseQuantity() {
  const quantityInput = document.querySelector('.cartt .quantity');
  const newValue = parseInt(quantityInput.value) - 1;
  quantityInput.value = newValue >= 1 ? newValue : 1;
}

function addToCart() {
  const quantity = document.querySelector('.cartt .quantity').value;
  const cartDiv = document.getElementById('cartDiv');
  cartDiv.setAttribute('data-quantity', quantity);
}


function toggleContent() {
  var additionalContent = document.getElementById('additionalContent');
  var toggleButton = document.getElementById('toggleButton');

  if (additionalContent.style.display === 'none' || additionalContent.style.display === '') {
      additionalContent.style.display = 'block';
      toggleButton.innerText = 'Thu gọn';
  } else {
      additionalContent.style.display = 'none';
      toggleButton.innerText = 'Hiển thị thêm ...';
  }
}



// ---------------------------------------slider-product--------------------
const rightbtntwo = document.querySelector('.fa-chevron-right-two')
const leftbtntwo = document.querySelector('.fa-chevron-left-two')

// console.log(rightbtntwo)
// console.log(leftbtntwo)

const imgNumbertwo = document.querySelectorAll(".slider-product-one-content-items")
let index = 0
rightbtntwo.addEventListener("click", function(){
    // console.log("ok")
    index = index+1
    if(index>imgNumbertwo.length-1){
        index=0
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index * 100+"%"
})

leftbtntwo.addEventListener("click", function(){
    // console.log("ok")
    index = index-1
    if(index<0){
        index=imgNumbertwo.length-1
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index * 100+"%"
})

// ----------------------------chuyển ảnh product------------------
var imgList = document.querySelectorAll(".buy-product-main-left>.orther-img>img");
        for (var i = 0; i < imgList.length;i++){
            imgList[i].onmouseover = function(){
                var mainImg = document.querySelector(".buy-product-main-left>.main-img");
                mainImg.src = this.src;
            };
        }

