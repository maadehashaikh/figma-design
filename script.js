let hamburger = document.getElementById("hamburger");
let cross = document.getElementById("cross");
window.addEventListener('resize', function(){
  var screenWidth = this.window.innerWidth;
  if(screenWidth <= 768){
    hamburger.style.display = 'block'
    // console.log(screenWidth);
  }
  else{
    hamburger.style.display = 'none';
    // console.log(screenWidth);
  }
})

hamburger.addEventListener("click",function(){
  hamburger.style.display = 'none';
  cross.style.display = "block";
})
cross.addEventListener("click",()=>{
  hamburger.style.display = 'block';
  cross.style.display = "none";
})

