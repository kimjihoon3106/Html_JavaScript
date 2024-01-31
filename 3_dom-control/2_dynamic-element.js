let addBtn = document.getElementById('button');
let addBeforeBtn = document.getElementById('before');
let inputBox = document.querySelector('input');
let removetargetbtn = document.querySelector('#target-remove');

let removebtn = document.querySelector('.remove-btn');

addBtn.addEventListener('click', function () {
  let li = document.createElement('li');
  let ul = document.querySelector('ul');
  li.textContent = inputBox.value;

  let button = document.createElement('button');
  button.textContent = 'X';
  button.setAttribute('clsas', 'remove-btn');
  button.addEventListener('click', removeParentNode);
  li.appendChild(button);
  ul.appendChild(li);
  inputBox.value = '';
});

addBeforeBtn.addEventListener('click', function () {
  let li = document.createElement('li');
  let ul = document.querySelector('ul');
  let targetli = document.querySelector('li#target');
  li.textContent = inputBox.value;
  console.log(targetli);
  //ul.appendChild(li);
  ul.insertBefore(li, targetli);
});

removetargetbtn.addEventListener('click', function () {
  let targetli = document.querySelector('li#target');
  targetli.remove();
});

removebtn.addEventListener('click', removeParentNode);
function removeParentNode(event) {
  event.target.parentNode.remove();
  inputBox.value = '';
  inputBox.focus();
}
