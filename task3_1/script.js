
 const threeCircles = document.getElementById('trafficLight');
 const circles = threeCircles.querySelectorAll('.circl');

 let circleColors = ['green', 'yellow', 'red'];
 let activeIndex = -1;

  threeCircles.addEventListener('click', () => {
    // как будто костыль:D
    if (activeIndex === 2) {
      circles[activeIndex].style.backgroundColor = 'black';
    }
    // выбор активного, остаток от деление (% circles.length) зациклен
    activeIndex = (activeIndex + 1) % circles.length;
  
    // отключаем предыдущий активный круг
    if (activeIndex > 0) {
      circles[activeIndex - 1].style.backgroundColor = 'black';
    }
 
    // activeIndex выбор активного круга и цвета 
    circles[activeIndex].style.backgroundColor = circleColors[activeIndex];
  });