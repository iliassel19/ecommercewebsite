const headerIcon = document.querySelector(".header__icon");
const headerCartIndex = document.querySelector(".header__cart-index");
const headerBuys = document.querySelector(".header__buys");
const headerBuysContent = document.querySelector(".header__buys-content");
const headerBuysText = document.querySelector(".header__buys-text");
const headeEmpty = document.querySelector(".header__empty");

const hamburger = document.querySelector(".hamburger");
const hamburgerLine = [...document.querySelectorAll(".hamburger-line")];

const navigation = document.querySelector(".navigation");
const navigationList = document.querySelector(".navigation__list");
const navigationItem = document.querySelector(".navigation__item");

const carouselImgs = [...document.querySelectorAll(".carousel__img")];
const carouselThumbnails = [...document.querySelectorAll(".carousel__sub-img")];

const heroMinus = document.querySelector(".hero__minus");
const heroPlus = document.querySelector(".hero__plus");
const heroNumber = document.querySelector(".hero__number");
const heroAdd = document.querySelector(".hero__add");
const heroDelete = document.querySelector(".header__buys-delete");

const btnBlock = document.querySelector(".btn-n");
const btnNext = document.querySelector(".carousel__btn-next");
const btnPrevious = document.querySelector(".carousel__btn-previous");

const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup__close");
const popupBtnNext = document.querySelector(".popup__btn-next");
const popupBtnPrevious = document.querySelector(".popup__btn-previous");
const popupImgs = [...document.querySelectorAll(".popup__img")];
const popupThumbnails = [...document.querySelectorAll(".popup__sub-img")];

function initCart() {
  const html = `<p class="header__empty">You cart is empty</p>`;
  headerBuysText.innerHTML = html;
  btnBlock.style.display = "none";
  heroDelete.style.display = "none";
  headerCartIndex.style.opacity = 0;
}

// Show cart when clicking on cart icon
headerIcon.addEventListener("click", function () {
  headerBuys.classList.toggle("active");
});

// Mobile navigation functionality
hamburger.addEventListener("click", function () {
  hamburgerLine.forEach((ele) => ele.classList.toggle("active"));
  navigation.classList.toggle("active");
  navigationList.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Remove Cart when click outside
document.querySelector("main").addEventListener("click", function () {
  headerBuys.classList.remove("active");
});

// Numbers of Product functionality

let i = 0;
heroMinus.addEventListener("click", function () {
  i--;
  if (i < 0) {
    i = 0;
  }
  heroNumber.textContent = i;
});
heroPlus.addEventListener("click", function () {
  i++;
  heroNumber.textContent = i;
});

// Add to Cart and display the number of products
heroAdd.addEventListener("click", function () {
  const totalPrice = 125 * Number(heroNumber.textContent);
  if (i > 0) {
    const html = `
   
      <img
        src="/images/image-product-1.jpg"
        alt="Image of product"
        class="header__buys-img"
      />
      <div class="header__buys-desc">
        <p class="header__buys-name">Fall Limited Edition Sneakers</p>
      
        <p class="header__buys-price">
        $125.00 * ${Number(
          heroNumber.textContent
        )} <span> $${totalPrice}.00 </span>
      </p>
      </div>
     
  `;
    headerCartIndex.style.opacity = 1;
    headerCartIndex.textContent = heroNumber.textContent;
    btnBlock.style.display = "flex";
    heroDelete.style.display = "block";
    headerBuysText.innerHTML = html;
  }
  i = 0;
  heroNumber.textContent = i;
});

// Delete the product from cart

heroDelete.addEventListener("click", function () {
  initCart();
});

// Add the filter to thumbnails of product
carouselThumbnails.forEach(function (ele, i) {
  ele.addEventListener("click", function () {
    // Remove selected class from every subImg
    carouselThumbnails.forEach((ele) => ele.classList.remove("selected"));

    // Add the selected class to the current element replaced by this
    this.classList.add("selected");
    carouselImgs.forEach((ele) => {
      ele.style.transform = `translateX(${i * -100}%)`;
    });
  });
});

// Carousel in mobile version
let ind = 0;
btnNext.addEventListener("click", function () {
  ind++;
  if (ind > carouselImgs.length - 1) {
    ind = 0;
  }
  carouselImgs.forEach((ele) => {
    ele.style.transform = `translateX(${ind * -100}%)`;
  });
});

btnPrevious.addEventListener("click", function () {
  ind--;
  if (ind < 0) {
    ind = carouselImgs.length - 1;
  }
  carouselImgs.forEach((ele) => {
    ele.style.transform = `translateX(${ind * -100}%)`;
  });
});

// Popup functionality show
carouselImgs.forEach((ele) => {
  ele.addEventListener("click", function () {
    popup.classList.add("show");
  });
});

// Popup functionality hide
popupClose.addEventListener("click", function () {
  popup.classList.remove("show");
});

// Popup carousel
popupThumbnails.forEach(function (ele, i) {
  ele.addEventListener("click", function () {
    // Remove selected class from every subImg
    popupThumbnails.forEach((ele) => ele.classList.remove("selected"));

    // Add the selected class to the current element replaced by this
    this.classList.add("selected");
    popupImgs.forEach((ele) => {
      ele.style.transform = `translateX(${i * -100}%)`;
    });
  });
});

popupBtnNext.addEventListener("click", function () {
  ind++;
  if (ind > popupImgs.length - 1) {
    ind = 0;
  }
  popupImgs.forEach((ele) => {
    ele.style.transform = `translateX(${ind * -100}%)`;
  });
});

popupBtnPrevious.addEventListener("click", function () {
  ind--;
  if (ind < 0) {
    ind = popupImgs.length - 1;
  }
  popupImgs.forEach((ele) => {
    ele.style.transform = `translateX(${ind * -100}%)`;
  });
});
