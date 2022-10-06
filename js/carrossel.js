//script opções das imagens

//carrossel 1
let slideIndex = [1,1];
let slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
  instance.next();
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}

//carrossel 2
let slideIndex2 = [1,1];
let slideId2 = ["mySlides2"]
showSlides2(1, 0);
showSlides2(1, 1);

function plusSlides2(n, no) {
  showSlides2(slideIndex2[no] += n, no);
  instance.next();
}

function showSlides2(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId2[no]);
  if (n > x.length) {slideIndex2[no] = 1}    
  if (n < 1) {slideIndex2[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex2[no]-1].style.display = "block";  
}