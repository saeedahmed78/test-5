document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });

  function displayss(){
      document.querySelector(".c1").style.display = "none";
  }
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems);
  });

//   M.toast({html: 'Press The Get Started Button and Copy The Link'})\

function tost(){
setInterval(function(){
  document.querySelector(".alertt").style.display = "none";
},3000);

}   

tost();