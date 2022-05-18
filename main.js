var $f1 = document.querySelector('.f1');

document.addEventListener('keydown', function (e) {
  // console.log(e.key);
  if (e.key === 'ArrowUp') {
    $f1.className = 'f1 north';
  } else if (e.key === 'ArrowDown') {
    $f1.className = 'f1 south';
  } else if (e.key === 'ArrowRight') {
    $f1.className = 'f1 east';
  } else if (e.key === 'ArrowLeft') {
    $f1.className = 'f1 west';
  } else if (e.key === ' ') {
    setInterval(start, 16);
  }
});

var x = 0;

function start() {
  if ($f1.className === 'f1 east') {
    x = x + 7;
    $f1.style.left = x + 'px';
  }
}
