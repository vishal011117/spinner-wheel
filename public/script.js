var angles = [ 0, 45, 90, 135, 180, 225, 270, 315 ]
var pointer = 3;
var isClick = false;

function startSpin() {
  if (isClick) return alert('You already spin, Please come on tomorrow');

  isClick = true;
  var y = (360 * 28);
  var deg = y + angles[pointer];
  document.getElementById('boxes').style.transform = `rotate(${deg}deg)`;

  var b = document.querySelectorAll('.boxes1 span b');
  var c = document.querySelectorAll('.boxes2 span b')
  
  b.forEach((x, i) => {
    b[i].style.transform = `translate(-50%, -50%) rotate(${-angles[pointer]}deg)`;
    c[i].style.transform = `translate(-50%, -50%) rotate(${-angles[pointer] + 135}deg)`;
  })

  var elem = document.getElementById('wrapper');
  elem.classList.remove('animate');
  
  setTimeout(() => {
    elem.classList.add('animate');
  }, 5000);
}