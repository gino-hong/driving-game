var $f1 = document.querySelector('.f1');

var isTheCarMoving = false;

var movement;

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowUp') {
    $f1.className = 'f1 north';
  } else if (e.key === 'ArrowDown') {
    $f1.className = 'f1 south';
  } else if (e.key === 'ArrowRight') {
    $f1.className = 'f1 east';
  } else if (e.key === 'ArrowLeft') {
    $f1.className = 'f1 west';
  } else if (e.key === ' ') {
    if (isTheCarMoving === false) {
      movement = setInterval(start, 16);
      isTheCarMoving = true;
    } else if (isTheCarMoving === true) {
      clearInterval(movement);
      isTheCarMoving = false;
    }
  } else if (e.key === 'q') {
    if (speed > 5) {
      speed -= 5;
    }
  } else if (e.key === 'w') {
    speed += 5;
  }
});

var x = 0;
var y = 0;
speed = 15;

function start() {
  if ($f1.className === 'f1 east') {
    x = x + speed;
    $f1.style.left = x + 'px';
  } else if ($f1.className === 'f1 south') {
    y = y + speed;
    $f1.style.top = y + 'px';
  } else if ($f1.className === 'f1 west') {
    x = x - speed;
    $f1.style.left = x + 'px';
  } else if ($f1.className === 'f1 north') {
    y = y - speed;
    $f1.style.top = y + 'px';
  }
}
