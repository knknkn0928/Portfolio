$(".popup_btn").click(function(){
	$(".sub_menu").addClass("active");
});

$(".popup_close").click(function(){
	$(".sub_menu").removeClass("active");
});

$(".sub_menu_title > .nav_title").click(function(){
	$(".sub_menu").removeClass("active");
});

$("a").click(function() {
    if ($(this).attr("href") == "#") {
        return false;
    }
});