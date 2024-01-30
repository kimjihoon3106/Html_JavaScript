console.log('hello!!!');
console.log('hello@@@', 'javascript');
console.log('안녕');

//alert('hellow javascript!');
// >> 경고창 띄우기

/*console.log('hello!!!');
console.log('hello@@@', 'javascript');*/
// >> 주석처리방법

let age = 17;
function 김지훈() {
  console.log('1학년');
  console.log(age);
}
김지훈();

function sayHello() {
  console.log('hello1');
  console.log('hello2');
  console.log('hello3');
}
sayHello();
console.log('-----');
sayHello();

let obj = {
  number: 30, //프로퍼티(속성)
  sayHello: function () {
    console.log('obj>hello1');
    console.log('obj>hello2');
    console.log('obj>hello3');
  },
};
console.log(obj.number);
obj.sayHello();
