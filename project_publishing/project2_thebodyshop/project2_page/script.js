$(function(){
    let tabBtn = $(".tab_btn > ul > li");
    let tabCont = $(".tab_menu > .tab_cont");

    tabCont.hide().eq(0).show();

    tabBtn.click(function(){
        const index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        tabCont.eq(index).show().siblings().hide();
    });
});


$("a").click(function() {
    if ($(this).attr("href") == "#") {
        return false;
    }
});


