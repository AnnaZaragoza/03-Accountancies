'use strict'

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail table controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByTagName("table");
  var selectYear = document.getElementsByClassName("select-year");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < selectYear.length; i++) {
      selectYear[i].className = selectYear[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  selectYear[slideIndex-1].className += " active";
}
