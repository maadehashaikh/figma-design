let hamburger = document.getElementById("hamburger");
window.addEventListener('resize', function(){
  var screenWidth = screen.availWidth;
  if(screenWidth <= 768){
    hamburger.style.display = 'block'
    console.log(screenWidth);
  }
  else{
    hamburger.style.display = 'none';
    console.log(screenWidth);
  }
})
hamburger.addEventListener("click",function(){
  
})


