/* 바로가기 버튼 변경

$(document).ready(function(){
    $("#menu_btn1").show();
    $("#menu_btn2").hide();

    $("#menu_btn1").click(function(){
        $("#menu_btn1").hide();
        $("#menu_btn2").show();
    });

    $("#menu_btn2").click(function(){
        $("#menu_btn1").show();
        $("#menu_btn2").hide();
    });
});
*/

$('#menu_btn').on('click', (e) => {
    $('#sub_menu').animate({
      bottom: $('#sub_menu').css('bottom') === '0px' ? '100vh' : '0px'
    }, 300);
    $(e.target).toggleClass('opened');
  });

  // 이게 뭐냐?

// 서브메뉴 버튼 클릭 이동

  $('#About').click(function () {
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
    return false;
  });

