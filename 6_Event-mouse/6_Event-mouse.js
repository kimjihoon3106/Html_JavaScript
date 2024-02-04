let rectangle = document.querySelector('#rectangle');

rectangle.addEventListener('mousedown', function (event) {
  console.log('mousedown');
});

rectangle.addEventListener('mouseup', function (event) {
  console.log('mouseup');
});

rectangle.addEventListener('mouseenter', function (event) {
  console.log('mouseenter');
});

rectangle.addEventListener('mouseleave', function (event) {
  console.log('mouseleave');
});

rectangle.addEventListener('mousemove', function (event) {
  console.log('mousemove');
});
