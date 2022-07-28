const overlay = document.querySelector(".overlay");
const navBtnOpen = document.querySelector(".header__menu");
const navBtnClose = document.querySelector(".header__close");
const navigation = document.querySelector(".navigation");

const cartBtn = document.querySelector(".header__cart");
const cartBox = document.querySelector(".shopping-box");

const counterPlus = document.querySelector(".main__plus");
const counterMinus = document.querySelector(".main__minus");
const counterNum = document.querySelector(".main__counter");

const shoppingBox = document.querySelector(".shopping__box-content");

const thumbnailsImgsBox = document.querySelectorAll(".main__img-small-box");
const thumbnailsImgs = document.querySelectorAll(".main__img-small");

const bigImgs = document.querySelectorAll(".main__img-big");
const bigImgsBox = document.querySelector(".main__imgs-big");

const mainBtn = document.querySelector(".main__btn");

const errorMessage = document.querySelector(".error__message");

const btnNext = document.querySelector(".main__img-next");
const btnPrevious = document.querySelector(".main__img-previous");

const modal = document.querySelector(".modal");

const modalThumbnailsImgsBoxs = document.querySelectorAll(
  ".modal__img-small-box"
);
const modalThumbnailsImgs = document.querySelectorAll(".modal__img-small");
const modalImgsBig = document.querySelectorAll(".modal__img-big");

const modalBtnNext = document.querySelector(".modal__img-next");

const modalBtnPrevious = document.querySelector(".modal__img-previous");

const modalClose = document.querySelector(".modal__close-btn");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

let count = 0;
// INITIALIZATION
const init = function () {
  bigImgs.forEach((img) => img.classList.add("hide-img"));
  modalImgsBig.forEach((img) => img.classList.add("hide-img"));
  bigImgs[0].classList.remove("hide-img");
  thumbnailsImgs[0].classList.add("active");
  thumbnailsImgsBox[0].classList.add("border-active");
  modalImgsBig[0].classList.remove("hide-img");
  modalThumbnailsImgsBoxs[0].classList.add("active");
  modalThumbnailsImgs[0].classList.add("active");
  counterNum.textContent = count;
};
init();

// MOBILA NAVIGATION OPEN AND CLOSE
navBtnOpen.addEventListener("click", function () {
  overlay.classList.add("active");
  navigation.classList.add("active");
  window.document.querySelector("html").classList.add("no-scroll");
});
navBtnClose.addEventListener("click", function () {
  overlay.classList.remove("active");
  navigation.classList.remove("active");
  window.document.querySelector("html").classList.remove("no-scroll");
});

// SHOW CART BOX
cartBtn.addEventListener("click", function (e) {
  const btn = e.target.closest(".header__cart");
  if (!btn) return;

  cartBox.classList.toggle("active");
});

// QUANTITY OF PRODUCTION ADDING AND SUBTRACTING FUNCTIONALITY

counterPlus.addEventListener("click", function (e) {
  const btn = e.target.closest(".main__plus");
  if (!btn) return;

  count++;
  counterNum.textContent = count;
});
counterMinus.addEventListener("click", function (e) {
  const btn = e.target.closest(".main__minus");
  if (!btn) return;
  count--;
  if (count <= 0) count = 0;
  counterNum.textContent = count;
});

// HANDLING THE CLICKS ON IMAGES AND CHANGING BIG IMAGES

thumbnailsImgsBox.forEach((img) =>
  img.addEventListener("click", function (e) {
    // REMOVE OR ADD CLASS FROM ALL ELEMENTS
    thumbnailsImgsBox.forEach((img) => img.classList.remove("border-active"));
    thumbnailsImgs.forEach((img) => img.classList.remove("active"));
    bigImgs.forEach((img) => img.classList.add("hide-img"));

    // ADD CLASS TO CLICKED ELEMENT
    img.classList.add("border-active");
    e.target.classList.add("active");

    // TO GET THE CLICKED ELEMENT
    const imgAtt = +e.target.getAttribute("data-att");

    // SHOW THE BIG IMAGES CORRESPONDING TO THE CLICKED THUMBNAIL
    bigImgs[imgAtt - 1].classList.remove("hide-img");
  })
);

// CREATE PREVIEW BOX IN THE CART BOX ON CLICK ADD TO CART BTN
mainBtn.addEventListener("click", function () {
  const markup1 = `
  <div class="shopping-preview">
    <img
      src="./images/image-product-1-thumbnail.jpg"
      alt=""
      class="shopping-preview_img"
    />

    <div class="shooping-preview-details">
      <p class="shooping-preview-title">
        Fall lumited edition sneakers
      </p>

      <p class="shopping-preview_price">
        $125.0 * ${count}
        <span class="shopping-preview_amount">$${125 * count}.00</span>
      </p>
    </div>

    <button class="shopping__delete btn-g">
      <ion-icon
        name="trash-outline"
        class="shopping__delete-icon"
      ></ion-icon>
    </button>
  </div>
  <button class="shopping__checkout btn btn-g">
    Checkout
  </button>
  `;

  // NUMBER OF PRODUCTS CHOOSEN ON TOP OF CART ELEMENT
  const markup2 = `
  <span class="header__cart-num">${count}</span>
  `;

  // ADD ERROR MESSAGE IF THE NUMBER OF PRODUCT IS 0
  errorMessage.classList.add("error");
  if (count === 0) return;
  errorMessage.classList.remove("error");

  shoppingBox.innerHTML = "";
  shoppingBox.insertAdjacentHTML("afterbegin", markup1);

  cartBtn.insertAdjacentHTML("beforeend", markup2);

  // REINITIALIZATION OF QUANTITY COUNTER
  count = 0;
  counterNum.textContent = count;

  // ADD THE DELETE FUNCTIONALITY
  const deleteBtn = document.querySelector(".shopping__delete");
  deleteBtn.addEventListener("click", function () {
    const markup = `<p class="shopping__box_empty">Your cart is empty!</p>`;

    shoppingBox.innerHTML = "";

    shoppingBox.insertAdjacentHTML("beforeend", markup);
  });
});

const sliderImagesStyling = function () {
  modalThumbnailsImgsBoxs.forEach((modalImg) =>
    modalImg.classList.remove("active")
  );
  modalThumbnailsImgs.forEach((modalImg) =>
    modalImg.classList.remove("active")
  );
  modalImgsBig.forEach((modalImg) => modalImg.classList.add("hide-img"));
  modalThumbnailsImgsBoxs[modalCounter].classList.add("active");
  modalThumbnailsImgs[modalCounter].classList.add("active");
  modalImgsBig[modalCounter].classList.remove("hide-img");
};

// SLIDER OF PRODUCT IMAGES ON MOBILE
let click = 0;
btnNext.addEventListener("click", function (e) {
  const btn = e.target.closest(".main__img-next");
  if (!btn) return;

  click++;

  if (click > 3) click = 0;
  bigImgs.forEach((img) => img.classList.add("hide-img"));
  bigImgs[click].classList.remove("hide-img");
});
btnPrevious.addEventListener("click", function (e) {
  const btn = e.target.closest(".main__img-previous");
  if (!btn) return;

  click--;

  if (click < 0) click = bigImgs.length - 1;
  bigImgs.forEach((img) => img.classList.add("hide-img"));
  bigImgs[click].classList.remove("hide-img");
});

// SLIDER OF IMAGES ON THE MODAL WINDOW
let modalCounter = 0;
modalBtnNext.addEventListener("click", function (e) {
  const btn = e.target.closest(".modal__img-next");

  if (!btn) return;
  modalCounter++;

  if (modalCounter === 4) modalCounter = 0;
  sliderImagesStyling();
});
modalBtnPrevious.addEventListener("click", function (e) {
  const btn = e.target.closest(".modal__img-previous");

  if (!btn) return;
  if (modalCounter === 0) modalCounter = 4;
  modalCounter--;
  sliderImagesStyling();
});

// OPEN MODAL WINDOW ON CLICK ON BIG IMAGE
bigImgsBox.addEventListener("click", function (e) {
  const btn = e.target.closest(".main__imgs-big");

  if (!btn) return;

  modal.classList.add("open");
});

// CLOSE MODAL WINDOW ON CLICK ON CLOSE BUTTON
modalClose.addEventListener("click", function (e) {
  const btn = e.target.closest(".modal__close-btn");

  if (!btn) return;

  modal.classList.remove("open");
});
