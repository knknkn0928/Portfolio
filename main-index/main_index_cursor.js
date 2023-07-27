/* 마우스커서 */ 
const circle = document.querySelector('.circle');
  let mouseX = 0;
  let mouseY = 0;
  let circleX = 0;
  let circleY = 0;

  const mouseMove = (e) => {
    mouseX = e.clientX - 50;
    mouseY = e.clientY - 50;
  }
  document.addEventListener('mousemove', mouseMove);

  const anicircle = () => {
    circleX += (mouseX - circleX) ;
    circleY += (mouseY - circleY) ;
    circle.style.transform = `translate(${circleX}px, ${circleY}px)`;
    requestAnimationFrame(anicircle);
  }
  anicircle();


/* 커서 호버 */ 
$(".find").hover(function(){
	$(".circle").addClass("active");
}, function(){
	$(".circle").removeClass("active");
});