const section = document.querySelector('section');
const open = document.querySelector('.open');
const menu = document.querySelector('.left');

open.addEventListener('click', e => {
    section.classList.add('on');
    section.classList.add('active');
})


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