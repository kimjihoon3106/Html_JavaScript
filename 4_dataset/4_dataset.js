let lilist = document.querySelectorAll('li');
let img = document.querySelector('img');

let h2 = document.querySelector('h2');
h2.dataset.test = 'hello javascirpt';
let selectedItem = document.querySelector('.selected-item');

lilist[0].addEventListener('click', selectItem);

lilist[1].addEventListener('click', selectItem);

lilist[2].addEventListener('click', selectItem);

function selectItem(event) {
  selectedItem.textContent = event.target.textContent;
  img.setAttribute('src', event.target.dataset.img);
}
