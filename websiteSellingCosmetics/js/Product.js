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




// --------------------------------------chuyeenr nooij dung--------/

function chuyenNoiDung(muc) {
    var noiDungMuc1 = `
    <div class="top" id="content">

    <div class="shop-page-title category-page-title page-title ">
        <div class="page-title-inner flex-row  medium-flex-wrap container">
            <h1 class="woocommerce-products-header__title page-title">Sản phẩm</h1>
            
            <div class="woocommerce-ordering">
                <p>Sắp xếp</p>
                <div class="select-wrapper">
                    <select name="orderby" class="orderby" aria-label="Đơn hàng của cửa hàng">
                        <option value="menu_order"  selected='selected'>Thứ tự mặc định</option>
                        <option value="popularity" >Thứ tự theo mức độ phổ biến</option>
                        <option value="rating" >Thứ tự theo điểm đánh giá</option>
                        <option value="date" >Mới nhất</option>
                        <option value="price" >Thứ tự theo giá: thấp đến cao</option>
                        <option value="price-desc" >Thứ tự theo giá: cao xuống thấp</option>
                    </select>
                </div>
                <input type="hidden" name="paged" value="1" />
            </div>

        </div><!-- flex-row -->
    </div>

    <div class="top-product">
        <div class="top-left">
            <div class="top-img">
                <a href="#"><img src="../img/product-11.png" alt=""></a>
                <span class="discount-circle">-20%</span>
                <span class="add-product"><i class="fa-solid fa-cart-plus fa-beat-fade fa-xl" style="color: #094410;"></i></span>
            </div>
            <div class="top-box-text">
                <a href="#">
                    <p>Kem chống nắng thông minh Caryophy Smart Moist Sunscreen</p>
                </a>
                <ins> <span>360.000đ </span></ins>
                <del> <span>650.000đ</span></del> <br>
                <div class="dathang">
                    <a href="#" class="chitiet">Mua hàng</a>
                </div>
            </div>
            
        </div>

        <div class="top-center">
            <div class="top-img">
                <a href="#"><img src="../img/product-12.png" alt=""></a>
                <span class="discount-circle">-23%</span>
                <span class="add-product"><i class="fa-solid fa-cart-plus fa-beat-fade fa-xl" style="color: #094410;"></i></span>
            </div>
            <div class="top-box-text">
                <a href="#">
                    <p>Kem chống nắng thông minh Caryophy Smart Sunscreen Tone</p>
                </a>
                <ins> <span>279.000đ </span></ins>
                <del> <span>360.000đ</span></del> <br>
                <div class="dathang">
                    <a href="#" class="chitiet">Mua hàng</a>
                </div>
            </div>
            
        </div>
        <div class="top-right">
            <div class="top-img">
                <a href="#"><img src="../img/product-13.png" alt=""></a>
                <span class="discount-circle">-39%</span>
                <span class="add-product"><i class="fa-solid fa-cart-plus fa-beat-fade fa-xl" style="color: #094410;"></i></span>
            </div>
            <div class="top-box-text">
                <a href="#">
                    <p>Kem dưỡng trắng da Body Caryophy Glass Skin 300g</p>
                </a>
                <ins> <span>339.000đ </span></ins>
                <del> <span>650.000đ</span></del> <br>
                <div class="dathang">
                    <a href="#" class="chitiet">Mua hàng</a>
                </div>
            </div>
            
        </div>    
    </div>

    <div class="top-product">
        <div class="top-left">
            <div class="top-img">
                <a href="#"><img src="../img/product-21.png" alt=""></a>
                <span class="discount-circle">-58%</span>
                <span class="add-product"><i class="fa-solid fa-cart-plus fa-beat-fade fa-xl" style="color: #094410;"></i></span>
            </div>
            <div class="top-box-text">
                <a href="#">
                    <p>Kem dưỡng trắng da Body Caryophy Glass Skin 5gram</p>
                </a>
                <ins> <span>17.000đ </span></ins>
                <del> <span>40.000đ</span></del> <br>
                <div class="dathang">
                    <a href="#" class="chitiet">Mua hàng</a>
                </div>
            </div>
            
        </div>

        <div class="top-center">
            <div class="top-img">
                <a href="#"><img src="../img/product-22.png" alt=""></a>
                <span class="discount-circle">-33%</span>
                <span class="add-product"><i class="fa-solid fa-cart-plus fa-beat-fade fa-xl" style="color: #094410;"></i></span>
            </div>
            <div class="top-box-text">
                <a href="#">
                    <p>Mặt nạ Caryophy Portulaca Mask Sheet trị mụn, trị thâm (hộp 10 miếng)</p>
                </a>
                <ins> <span>329.000đ </span></ins>
                <del> <span>490.000đ</span></del> <br>
                <div class="dathang">
                    <a href="#" class="chitiet">Mua hàng</a>                            
                </div>
            </div>
            
        </div>
        <div class="top-right">
            <div class="top-img">
                <a href="#"><img src="../img/product-23.png" alt=""></a>
                <span class="discount-circle">-33%</span>
                <span class="add-product"><i class="fa-solid fa-cart-plus fa-beat-fade fa-xl" style="color: #094410;"></i></span>
            </div>
            <div class="top-box-text">
                <a href="#">
                    <p>Nước tẩy trang thông minh Caryophy Smart Cleansing Water 300ml</p>
                </a>
                <ins> <span>270.000đ </span></ins>
                <del> <span>400.000đ</span></del> <br>
                <div class="dathang">
                    <a href="#" class="chitiet">Mua hàng</a>
                </div>
            </div>
            
        </div>
    </div>


    <div class="top-product">
        <div class="top-left">
            <div class="top-img">
                <a href="#"><img src="../img/product-31.png" alt=""></a>
                <span class="discount-circle">-28%</span>
                <span class="add-product"><i class="fa-solid fa-cart-plus fa-beat-fade fa-xl" style="color: #094410;"></i></span>
            </div>
            <div class="top-box-text">
                <a href="#">
                    <p>Nước tẩy trang thông minh Caryophy Smart Cleansing Water 500ml</p>
                </a>
                <ins> <span>360.000đ </span></ins>
                <del> <span>500.000đ</span></del> <br>
                <div class="dathang">
                    <a href="#" class="chitiet">Mua hàng</a>
                </div>
            </div>
            
        </div>

        <div class="top-center">
            <div class="top-img">
                <a href="#"><img src="../img/product-32.png" alt=""></a>
                <span class="discount-circle">-33%</span>
                <span class="add-product"><i class="fa-solid fa-cart-plus fa-beat-fade fa-xl" style="color: #094410;"></i></span>
            </div>
            <div class="top-box-text">
                <a href="#">
                    <p>Nước tẩy trang thông minh Caryophy Smart Cleansing Water 60ml</p>
                </a>
                <ins> <span>270.000đ </span></ins>
                <del> <span>400.000đ</span></del> <br>
                <div class="dathang">
                    <a href="#" class="chitiet">Mua hàng</a>
                </div>
            </div>
            
        </div>
        <div class="top-right">
            <div class="top-img">
                <a href="#"><img src="../img/product-33.png" alt=""></a>
                <span class="discount-circle">-20%</span>
                <span class="add-product"><i class="fa-solid fa-cart-plus fa-beat-fade fa-xl" style="color: #094410;"></i></span>
            </div>
            <div class="top-box-text">
                <a href="#">
                    <p>Serum mụn Caryophy 10ml</p>
                </a>
                <ins> <span>279.000đ </span></ins>
                <del> <span>350.000đ</span></del> <br>
                <div class="dathang">
                    <a href="#" class="chitiet">Mua hàng</a>
                </div>
            </div>
            
        </div>


        
    </div>


</div>


    `;

    var noiDungMuc2 = `
    <div class="top" id="content">

    <div class="shop-page-title category-page-title page-title ">
        <div class="page-title-inner flex-row  medium-flex-wrap container">
            <h1 class="woocommerce-products-header__title page-title">Sản phẩm</h1>
            
            <div class="woocommerce-ordering">
                <p>Sắp xếp</p>
                <div class="select-wrapper">
                    <select name="orderby" class="orderby" aria-label="Đơn hàng của cửa hàng">
                        <option value="menu_order"  selected='selected'>Thứ tự mặc định</option>
                        <option value="popularity" >Thứ tự theo mức độ phổ biến</option>
                        <option value="rating" >Thứ tự theo điểm đánh giá</option>
                        <option value="date" >Mới nhất</option>
                        <option value="price" >Thứ tự theo giá: thấp đến cao</option>
                        <option value="price-desc" >Thứ tự theo giá: cao xuống thấp</option>
                    </select>
                </div>
                <input type="hidden" name="paged" value="1" />
            </div>

        </div><!-- flex-row -->
    </div>

    <div class="top-product">
        <div class="top-left">
            <div class="top-img">
                <a href="#"><img src="../img/page2-product-11.png" alt=""></a>
                <span class="discount-circle">-25%</span>
                <span class="add-product"><i class="fa-solid fa-cart-plus fa-beat-fade fa-xl" style="color: #094410;"></i></span>
            </div>
            <div class="top-box-text">
                <a href="#">
                    <p>Serum mụn Caryophy 30ml</p>
                </a>
                <ins> <span>490.000đ </span></ins>
                <del> <span>650.000đ</span></del> <br>
                <div class="dathang">
                    <a href="#" class="chitiet">Mua hàng</a>
                </div>
            </div>
            
        </div>

        <div class="top-center">
            <div class="top-img">
                <a href="#"><img src="../img/page2-product-12.png" alt=""></a>
                <span class="discount-circle">-37%</span>
                <span class="add-product"><i class="fa-solid fa-cart-plus fa-beat-fade fa-xl" style="color: #094410;"></i></span>
            </div>
            <div class="top-box-text">
                <a href="#">
                    <p>Xịt trị mụn toàn thân Caryophy Portulaca Body Mist 150ml</p>
                </a>
                <ins> <span>349.000đ </span></ins>
                <del> <span>550.000đ</span></del> <br>
                <div class="dathang">
                    <a href="#" class="chitiet">Mua hàng</a>
                </div>
            </div>
            
        </div>
        <div class="top-right">
            <div class="top-img">
                <a href="#"><img src="../img/page2-product-13.png" alt=""></a>
                <span class="discount-circle">-23%</span>
                <span class="add-product"><i class="fa-solid fa-cart-plus fa-beat-fade fa-xl" style="color: #094410;"></i></span>
            </div>
            <div class="top-box-text">
                <a href="#">
                    <p>Kem chống nắng thông minh Caryophy Smart Sunscreen Tone Up 50ml</p>
                </a>
                <ins> <span>279.000đ </span></ins>
                <del> <span>360.000đ</span></del> <br>
                <div class="dathang">
                    <a href="#" class="chitiet">Mua hàng</a>            
                </div>
            </div>
            
        </div>


            
    </div>

    <div class="top-product">
        <div class="top-left">
            <div class="top-img">
                <a href="#"><img src="../img/page2-product-21.png" alt=""></a>
                <span class="discount-circle">-25%</span>
                <span class="add-product"><i class="fa-solid fa-cart-plus fa-beat-fade fa-xl" style="color: #094410;"></i></span>
            </div>
            <div class="top-box-text">
                <a href="#">
                    <p>Serum mụn Caryophy 30ml</p>
                </a>
                <ins> <span>490.000đ </span></ins>
                <del> <span>650.000đ</span></del> <br>
                <div class="dathang">
                    <a href="#" class="chitiet">Mua hàng</a>                
                </div>
            </div>
            
        </div>

        <div class="top-center">
            <div class="top-img">
                <a href="#"><img src="../img/page2-product-22.png" alt=""></a>
                <span class="discount-circle">-37%</span>
                <span class="add-product"><i class="fa-solid fa-cart-plus fa-beat-fade fa-xl" style="color: #094410;"></i></span>
            </div>
            <div class="top-box-text">
                <a href="#">
                <p>Xịt trị mụn toàn thân Caryophy Portulaca Body Mist 150ml</p>
                </a>
                <ins> <span>349.000đ </span></ins>
                <del> <span>550.000đ</span></del> <br>
                <div class="dathang">
                    <a href="#" class="chitiet">Mua hàng</a>           
                </div>
            </div>
            
        </div>
        <div class="top-right">
            <div class="top-img">
                <a href="#"><img src="../img/page2-product-23.png" alt=""></a>
                <span class="discount-circle">-23%</span>
                <span class="add-product"><i class="fa-solid fa-cart-plus fa-beat-fade fa-xl" style="color: #094410;"></i></span>
            </div>
            <div class="top-box-text">
                <a href="#">
                <p>Kem chống nắng thông minh Caryophy Smart Sunscreen Tone Up 50ml</p>
                </a>
                <ins> <span>279.000đ </span></ins>
                <del> <span>360.000đ</span></del> <br>
                <div class="dathang">
                    <a href="#" class="chitiet">Mua hàng</a>            
                </div>
            </div>
            
        </div>
    </div>


    <div class="top-product">
        <div class="top-left">
            <div class="top-img">
                <a href="#"><img src="../img/page2-product-31.png" alt=""></a>
                <span class="discount-circle">-25%</span>
                <span class="add-product"><i class="fa-solid fa-cart-plus fa-beat-fade fa-xl" style="color: #094410;"></i></span>
            </div>
            <div class="top-box-text">
                <a href="#">
                    <p>Serum mụn Caryophy 30ml</p>
                </a>
                <ins> <span>490.000đ </span></ins>
                <del> <span>650.000đ</span></del> <br>
                <div class="dathang">
                    <a href="#" class="chitiet">Mua hàng</a>
                </div>
            </div>
            
        </div>

        <div class="top-center">
            <div class="top-img">
                <a href="#"><img src="../img/page2-product-32.png" alt=""></a>
                <span class="discount-circle">-37%</span>
                <span class="add-product"><i class="fa-solid fa-cart-plus fa-beat-fade fa-xl" style="color: #094410;"></i></span>
            </div>
            <div class="top-box-text">
                <a href="#">
                    <p>Xịt trị mụn toàn thân Caryophy Portulaca Body Mist 150ml</p>
                </a>
                <ins> <span>349.000đ </span></ins>
                <del> <span>550.000đ</span></del> <br>
                <div class="dathang">
                    <a href="#" class="chitiet">Mua hàng</a>               
                </div>
            </div>
            
        </div>
        <div class="top-right">
            <div class="top-img">
                <a href="#"><img src="../img/page2-product-33.png" alt=""></a>
                <span class="discount-circle">-23%</span>
                <span class="add-product"><i class="fa-solid fa-cart-plus fa-beat-fade fa-xl" style="color: #094410;"></i></span>
            </div>
            <div class="top-box-text">
            <a href="#"><p>Kem chống nắng thông minh Caryophy Smart Sunscreen Tone Up 50ml</p></a>
                <ins> <span>279.000đ </span></ins>
                <del> <span>360.000đ</span></del> <br>
                <div class="dathang">
                    <a href="#" class="chitiet">Mua hàng</a>
                </div>
            </div>
            
        </div>
    </div>


</div>
    `;

    var contentDiv = document.getElementById('content');
    var buttons = document.querySelectorAll('.button-container button');

    if (muc === 1) {
      contentDiv.innerHTML = noiDungMuc1;
    } else if (muc === 2) {
      contentDiv.innerHTML = noiDungMuc2;
    }

    // Loại bỏ lớp 'active' từ tất cả các button
    buttons.forEach(button => {
      button.classList.remove('active');
    });

    // Thêm lớp 'active' vào button được chọn
    buttons[muc - 1].classList.add('active');
  }



//   --------------------------------------kskks
var imgList = document.querySelectorAll(".buy-product-main-left>.orther-img>img");
        for (var i = 0; i < imgList.length;i++){
            imgList[i].onmouseover = function(){
                // alert(this.src);
                var mainImg = document.querySelector(".buy-product-main-left>.main-img");
                mainImg.src = this.src;
            };
        }