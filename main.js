var $image = document.querySelector('img');

var isTheCarMoving = false;
var crash = false;

var movement;

document.addEventListener('keydown', function (e) {
  if (crash === false) {
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
  if ($image.getBoundingClientRect().x > 450 && $image.getBoundingClientRect().x < 925 && $image.getBoundingClientRect().y > 150 && $image.getBoundingClientRect().y < 550) {
    clearInterval(movement);
    isTheCarMoving = false;
    crash = true;
    $image.src = 'https://assets.stickpng.com/images/580b585b2edbce24c47b264f.png';
    $image.alt = 'explosion';
  }
}
