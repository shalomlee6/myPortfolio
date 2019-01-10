var androidSlideIndex = 1;
showAndroidSlides(androidSlideIndex);

function androidPlusSlides(n) {
    showAndroidSlides(androidSlideIndex += n);
}

function androidCurrentSlide(n) {
    showAndroidSlides(androidSlideIndex = n);
}

function showAndroidSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides android-Slides fade");
  var dots = document.getElementsByClassName("dot android-dot");

  if (n > slides.length) {androidSlideIndex = 1}    
  if (n < 1) {androidSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[androidSlideIndex-1].style.display = "block";  
  dots[androidSlideIndex-1].className += " active";
}