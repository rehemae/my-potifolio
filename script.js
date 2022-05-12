$(document).ready(function(){
   $(window).scroll(function(){
      if(this.scrolly > 20){
          $(".navbar").addClass("sticky");
      }else{
        $(".navbar").removeclass("sticky");

      }

    });
    $(".menu-btn").click(function(){
        $(".navbar .menu").toggleClass("active");

    })
});