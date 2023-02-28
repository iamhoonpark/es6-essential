/**
 * 프로토타입
 * - 각각의 인스턴스에서 공통적으로 가질 수 있는 것
 *
 * 객체를 만드는 방법
 * - 비슷한 유형의 객체들이라면 조금 더 편하게 만들 수 있는 방법으로 생성자함수, 클래스가 존재
 * - 클래스는 프로토타입을 한단계 감싸는 Syntax Sugar으로
 * - 클래스가 있는 것 처럼 클래스 문법을 이용해서 만들지만 자바스크립트 내부적으로는 프로토타입으로 동작
 *
 * 프로토타입을 이용해서 객체를 만드는 원시적인 방법
 * - 최신 JS와 TS에서는 프로토타입을 직접적으로 다루지 않음
 */

// 1. 인스턴스 레벨의 생성자 함수
function Dog(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  /**
   * 인스턴스 레벨의 함수: 만들어지는 인스턴스마다 똑같은 함수를 가지고 있음
   * 따라서, 메모리 낭비로 이어짐 이를 방지하기 위한 '프로토타입 레벨의 함수'
   */
  // this.printName = () => { console.log(`${this.name} ${this.emoji}`); };
}
const dog = new Dog('멍멍', '🐩');
console.log(dog);
console.log('───────────────────────────────');

// 2. 프로토타입 레벨의 함수
Dog.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};

const dog1 = new Dog('뭉치', '🐶');
const dog2 = new Dog('코코', '🐕');

console.log(dog1, dog2);
dog1.printName();
dog2.printName();
console.log('───────────────────────────────');

/**
 * 오버라이딩
 * 인스턴스 레벨에서(자식) 동일한 이름으로 함수를 재정의하면
 * 프로토타입 레벨의(부모) 함수의 프로퍼티는 가려진다(=섀도잉)
 */
dog1.printName = function () {
  console.log('오버라이딩');
};
dog1.printName();
console.log('───────────────────────────────');

// 3. 정적 레벨의 함수 및 변수
Dog.hello = () => {
  console.log('Hello!');
};
Dog.hello();
Dog.MAX_AGE = 20;
console.log(Dog.MAX_AGE);
