
// $(document).ready(function(){
//   var mouseX, mouseY;
//   var ww = $( window ).width();
//   var wh = $( window ).height();
//   var traX, traY;
//   $(document).mousemove(function(e){
//     mouseX = e.pageX;
//     mouseY = e.pageY;
//     traX = ((4 * mouseX) / 570) + 40;
//     traY = ((4 * mouseY) / 570) + 50;
//     console.log(traX);
//     $(".title").css({"background-position": traX + "%" + traY + "%"});
//   });
// });


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

// $('#menu_btn').on('click', (e) => {
//     $('#sub_menu').animate({
//       bottom: $('#sub_menu').css('bottom') === '0px' ? '100vh' : '0px'
//     }, 300);
//     $(e.target).toggleClass('opened');
//   });

//   // 이게 뭐냐?


function submenu() {
  let menu = document.querySelector("#sub_menu")
  menu.classList.toggle("active");
}


/* 서브메뉴 버튼 클릭 이동 */

  $('#About').click(function () {
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
    return false;
  });


/* 가로 스크롤 */

const horizontalContainer = document.querySelector('.horizontal_container');
const stickyBox = document.querySelector('.sticky_box');
const innerBox = document.querySelector('.horizontal_inner_box');

const calcHt = (ht) => {
  return ht.scrollWidth - document.documentElement.clientWidth + document.documentElement.clientHeight;
}

horizontalContainer.style.height = `${calcHt(innerBox)}px`;
const scrolled = () => {
  innerBox.style.transform = `translateX(-${stickyBox.offsetTop}px)`;
}
addEventListener('scroll', scrolled);


/* 한 페이지 스크롤 */

// window.addEventListener("wheel", function(e){
// 	e.preventDefault();
// },{passive : true});

// var $html = $("html");
// var page = 1;
// var lastPage = $(".page").length;
// $html.animate({scrollTop:0},10);

// $(window).on("wheel", function(e){
// 	if($html.is(":animated")) return;
// 	if(e.originalEvent.deltaY > 0){
// 		if(page== lastPage) return;
// 		page++;
// 	}else if(e.originalEvent.deltaY < 0){
// 		if(page == 1) return;
// 		page--;
// 	}
// 	var posTop = (page-1) * $(window).height();
// 	$html.animate({scrollTop : posTop});

// });

/* about 스크롤시 페이드인아웃 */

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  let about = $('.skill_list').offset().top;
  if (scroll >= about) {
    $('.about h1').addClass('active');
  } else {
    $('.about h1').removeClass('active');
  }
});

/* 스킬 작성 이벤트 */

consoleText(['퍼블리싱 웹페이지 구축 카페24 웹사이트 관리 UX / Ui 디자인 책자 브로셔 지류 편집 및 카드뉴스 배너 상세페이지 등 그래픽 디자인 외 영상편집'], 'text',['#000']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 700)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 3500)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 100)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}