let rectangle = document.querySelector('#rectangle');
let body = document.querySelector('body');

rectangle.addEventListener('mousedown', function (event) {
  //console.log('mousedown');
  //console.log(event.target);
  //console.log(event.target.getBoundingClientRect());
  //console.log('clientx:', event.clientX, 'clienty:', event.clientY);
  //console.log('pagex:', event.pageX, 'pagey:', event.pageY);
});

//body.addEventListener('click', function (event) {
//  console.log('page x:', event.pageX, 'page y:', event.pageY);
//  let div = document.createElement('div');
//  div.classList.add('circle');
//  div.style.left = event.pageX - 25 + 'px';
//  div.style.top = event.pageY - 25 + 'px';
//  body.appendChild(div);
//});

//rectangle.addEventListener('mouseup', function (event) {
//  console.log('mouseup');
//});

//rectangle.addEventListener('mouseenter', function (event) {////
//  console.log('mouseenter');
//});

//rectangle.addEventListener('mouseleave', function (event) {////
//  console.log('mouseleave');
//});

//rectangle.addEventListener('mousemove', function (event) {
//  console.log('mousemove');
//});
