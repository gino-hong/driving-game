var $image = document.querySelector('img');

var isTheCarMoving = false;

var movement;

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowUp') {
    $image.className = 'north';
  } else if (e.key === 'ArrowDown') {
    $image.className = 'south';
  } else if (e.key === 'ArrowRight') {
    $image.className = 'east';
  } else if (e.key === 'ArrowLeft') {
    $image.className = 'west';
  } else if (e.key === ' ') {
    if (isTheCarMoving === false) {
      movement = setInterval(start, 16);
      isTheCarMoving = true;
    } else if (isTheCarMoving === true) {
      clearInterval(movement);
      isTheCarMoving = false;
    }
  } else if (e.key === 's') {
    if (speed > 5) {
      speed -= 5;
    }
  } else if (e.key === 'w') {
    if (speed < 49)
    speed += 5;
  }
});

var x = 0;
var y = 0;
speed = 15;

function start() {
  if ($image.className === 'east') {
    x = x + speed;
    $image.style.left = x + 'px';
  } else if ($image.className === 'south') {
    y = y + speed;
    $image.style.top = y + 'px';
  } else if ($image.className === 'west') {
    x = x - speed;
    $image.style.left = x + 'px';
  } else if ($image.className === 'north') {
    y = y - speed;
    $image.style.top = y + 'px';
  }
}

document.addEventListener('keydown', function (e) {
  if (e.key === '1') {
    $image.src = 'images/f1.svg';
    $image.alt = 'f1';
  } else if (e.key === '2') {
    $image.src = 'https://freesvg.org/img/1450414843.png';
    $image.alt = 'dragon';
  } else if (e.key === '3') {
    $image.src = 'https://freesvg.org/img/travel-car-top_view_monsterbrain_remix.png';
    $image.alt = 'yellow';
  } else if (e.key === '4') {
    $image.src = 'https://freesvg.org/img/wolf.png';
    $image.alt = 'wolf';
  } else if (e.key === '5') {
    $image.src = 'https://freesvg.org/img/SimplePinkCarTopView.png';
    $image.alt = 'pink';
  }
});
