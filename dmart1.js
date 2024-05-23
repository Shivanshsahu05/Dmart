var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}
var myIndex = 0;

function carousel1() {
    var i;
  var y=document.getElementsByClassName("mySlides2");
  for (i = 0; i < y.length; i++) {
    y[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > y.length) {myIndex = 1}    
  y[myIndex-1].style.display = "block";  
  setTimeout(carousel1, 5000); // Change image every 5 seconds
}
  function showDivs(n) {
    var i;
    var y = document.getElementsByClassName("mySlides2");
    if (n > y.length) {slideIndex = 1}
    if (n < 1) {slideIndex = y.length}
    for (i = 0; i < y.length; i++) {
     y[i].style.display = "none";  
    }
    y[slideIndex-1].style.display = "block";  
  }
  carousel1();
  website.listen(5500,() =>{
    console.log("server created successfully")
  })
  