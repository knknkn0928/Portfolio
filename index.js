
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


// 서브메뉴 버튼 클릭 이동

  $('#About').click(function () {
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
    return false;
  });

// 가로 스크롤

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


// 스킬 이벤트 효과

consoleText(['퍼블리싱 웹페이지 구축 및 UX / Ui 디자인 책자 브로셔 편집 및 그래픽 디자인 카페24 웹사이트 관리 카드뉴스 배너 상세페이지 디자인 영상편집'], 'text',['#000']);

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