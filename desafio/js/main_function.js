function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
/*
$(window).resize(function(){
   console.log('resize called');
   var width = $(window).width();
   if(width >= 768){
       $('#nossosServicos').removeClass('justify-content-between').addClass('justify-content-start');
   }
   else{
       $('#nossosServicos').removeClass('justify-content-start').addClass('justify-content-between');
   }
})
.resize();
*/