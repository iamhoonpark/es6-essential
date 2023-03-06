/**
 * 1. 글로벌 컨텍스트의 this
 * - 브라우저: this, globalThis와 같은 윈도우객체
 * - 노드: 모듈
 */
const x = 0;
module.exports.x = x;
console.log(this);
console.log(globalThis);
// globalThis.setTimeout();
// setTimeout()
console.clear();

/**
 * 2. 함수 내부에서의 this
 * - 엄격모드(use strict)에서는 undefined(스코프 내부에 this라는 정보가 없음)
 * - 느슨한 모드에서는 글로벌객체 globalThis
 */
function fun() {
  console.log(this);
}
fun();

/**
 * 3. 생성자 함수 또는 클래스 내부
 * - 앞으로 생성될 인스턴스 그 자체
 */
function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(this.name);
  };
}
const cat1 = new Cat('냐옹');
const cat2 = new Cat('미야옹');
cat1.printName();
cat2.printName();
