/* 서브메뉴 버튼 클릭 이동 */

$('#About').click(function () {
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 1000);
  return false;
});


/* 한 페이지 스크롤 */

window.addEventListener("wheel", function(e){
	e.preventDefault();
},{passive : false});

var $html = $("html");
var page = 1;
var lastPage = $(".page").length;

var timeScrollAnimation = 750;

$html.animate({scrollTop:0},10);
$(window).on("wheel", function(e){
 
	if($html.is(":animated")) return;
	if(e.originalEvent.deltaY > 0){
		if(page== lastPage) return;
		page++;
	}else if(e.originalEvent.deltaY < 0){
		if(page == 1) return;
		page--;
	}
	var posTop = (page-1) * ($(window).height());
	$html.animate({scrollTop : posTop}, timeScrollAnimation);
});

/* 새로고침 히스토리 기억 */ 
history.scrollRestoration = "auto";


