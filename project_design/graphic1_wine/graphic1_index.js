
$(function(){
    $(".btn_black").click(function(){
      $(".package_img").fadeOut(500, function(){
        $(".package_img").attr("src", "./images/back_1.png");
        $(".package_img").fadeIn(500);
      });
      $(".container2 img").fadeOut(510, function(){
        $(".container2 img").attr("src", "./images/design2.png");
        $(".container2 img").fadeIn(510);
      });
    });
  });
  
  $(function(){
    $(".btn_red").click(function(){
      $(".package_img").fadeOut(500, function(){
        $(".package_img").attr("src", "./images/back_2.png");
        $(".package_img").fadeIn(500);
      });
      $(".container2 img").fadeOut(510, function(){
        $(".container2 img").attr("src", "./images/design1.png");
        $(".container2 img").fadeIn(510);
      });
    });
  });
  
  $(function(){
    $(".btn_gold").click(function(){
      $(".package_img").fadeOut(500, function(){
        $(".package_img").attr("src", "./images/back_3.png");
        $(".package_img").fadeIn(500);
      });
      $(".container2 img").fadeOut(510, function(){
        $(".container2 img").attr("src", "./images/design3.png");
        $(".container2 img").fadeIn(510);
      });
    });
  });