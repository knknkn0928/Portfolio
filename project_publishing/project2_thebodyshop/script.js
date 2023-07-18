setInterval(function(){
    $("ul.slide-img").animate({"margin-left":"-100%"}, function(){
        $("ul.slide-img > li:first-child").appendTo("ul.slide-img");
        $("ul.slide-img").css({"margin-left":"0"});
    });
},3800);