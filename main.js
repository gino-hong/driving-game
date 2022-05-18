var $f1 = document.querySelector('.f1');

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowUp') {
    $f1.className = 'f1 north';
  } else if (e.key === 'ArrowDown') {
    $f1.className = 'f1 south';
  } else if (e.key === 'ArrowRight') {
    $f1.className = 'f1 east';
  } else if (e.key === 'ArrowLeft') {
    $f1.className = 'f1 west';
  }
});
