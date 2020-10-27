let openButton = document.querySelector(".feedback-button");
let overlay = document.querySelector(".modal-overlay");
let feedbackForm = document.querySelector(".modal");
let closeButton = feedbackForm.querySelector(".modal-close-button");
let checkForm = feedbackForm.querySelector(".modal-form")
let name = feedbackForm.querySelector(".modal-name");
let email = feedbackForm.querySelector(".modal-email");
let text = feedbackForm.querySelector(".modal-input-text");

openButton.addEventListener("click", function (evt){
  evt.preventDefault();
  feedbackForm.classList.add("modal-open");
  overlay.classList.add("overlay-open");
  name.focus()
});

checkForm.addEventListener("submit", function(evt){
  if(!name.value || !email.value || !text.value) {
    evt.preventDefault();
    feedbackForm.classList.add("error")
  }
  if(!name.value) {
    evt.preventDefault();
    name.classList.add("required");
    feedbackForm.classList.add("error")
  }
  if(!email.value) {
    evt.preventDefault();
    email.classList.add("required");
    feedbackForm.classList.add("error")
  }
  if(!text.value) {
    evt.preventDefault();
    text.classList.add("required");
    feedbackForm.classList.add("error")
  }
});

closeButton.addEventListener("click", function(evt){
  evt.preventDefault();
  feedbackForm.classList.remove("modal-open");
  overlay.classList.remove("overlay-open");
  feedbackForm.classList.remove("error")
  name.classList.remove("required");
  email.classList.remove("required");
  text.classList.remove("required");
});


let buttonSlideFirst = document.querySelector(".button-1");
let buttonSlideSecond = document.querySelector(".button-2");
let buttonSlideThird = document.querySelector(".button-3");
let backgroundColor = document.querySelector(".page");
let backgroundPicture = document.querySelector(".page-body");
let firstText = document.querySelector(".big-promo-text:nth-of-type(1)");
let secondText = document.querySelector(".big-promo-text:nth-of-type(2)");
let thirdText = document.querySelector(".big-promo-text:nth-of-type(3)");

buttonSlideFirst.addEventListener("click", function(evt){
  evt.preventDefault();
  backgroundColor.classList.remove("page-grey")
  backgroundColor.classList.remove("page-brown")
  backgroundPicture.classList.remove("page-body-slid-2");
  backgroundPicture.classList.remove("page-body-slid-3");
  buttonSlideFirst.classList.add("current-slider-button");
  buttonSlideSecond.classList.remove("current-slider-button");
  buttonSlideThird.classList.remove("current-slider-button");
  firstText.classList.remove("visually-hidden");
  secondText.classList.add("visually-hidden");
  thirdText.classList.add("visually-hidden");
})

buttonSlideSecond.addEventListener("click", function(evt){
  evt.preventDefault();
  backgroundColor.classList.add("page-grey")
  backgroundColor.classList.remove("page-brown")
  backgroundPicture.classList.add("page-body-slid-2");
  backgroundPicture.classList.remove("page-body-slid-3");
  buttonSlideFirst.classList.remove("current-slider-button");
  buttonSlideSecond.classList.add("current-slider-button");
  buttonSlideThird.classList.remove("current-slider-button");
  firstText.classList.add("visually-hidden");
  secondText.classList.remove("visually-hidden");
  thirdText.classList.add("visually-hidden");
})

buttonSlideThird.addEventListener("click", function(evt){
  evt.preventDefault();
  backgroundColor.classList.remove("page-grey")
  backgroundColor.classList.add("page-brown")
  backgroundPicture.classList.remove("page-body-slid-2");
  backgroundPicture.classList.add("page-body-slid-3");
  buttonSlideFirst.classList.remove("current-slider-button");
  buttonSlideSecond.classList.remove("current-slider-button");
  buttonSlideThird.classList.add("current-slider-button");
  firstText.classList.add("visually-hidden");
  secondText.classList.add("visually-hidden");
  thirdText.classList.remove("visually-hidden");
})
