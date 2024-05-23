var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}
var myIndex = 0;
carousel2();
function carousel2() {
    var i;
  var z=document.getElementsByClassName("mySlides3");
  for (i = 0; i < z.length; i++) {
    z[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > z.length) {myIndex = 1}    
  z[myIndex-1].style.display = "block";  
  setTimeout(carousel2, 7000); // Change image every 5 seconds
}
  function showDivs(n) {
    var i;
    var z = document.getElementsByClassName("mySlides3");
    if (n > z.length) {slideIndex = 1}
    if (n < 1) {slideIndex = z.length}
    for (i = 0; i < z.length; i++) {
     z[i].style.display = "none";  
    }
    z[slideIndex-1].style.display = "block";  
  }
  website.listen(5500,() =>{
    console.log("server created successfully")
  })
  