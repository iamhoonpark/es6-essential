// 프로토타입을 베이스로한 객체지향 프로그래밍
// 최신 JS, TS 등 객체지향 프로그래밍 언어에서는 프로토타입을 베이스로 하지 않음
// 클래스를 이용해서 간편하게 함

// 1. 동물
function Animal(name, emoji) {
  this.name = name;
  this.emoji = emoji;
}

Animal.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};

// 2. 강아지
function Dog(name, emoji, owner) {
  /**
   * Animal.call(this, name, emoji)
   * - super(name, emoji)와 비슷
   * - 생성자 함수를 호출하는데
   * - 인자로는 나의 객체를 뜻하는 this와 나머지 인자의 name, emoji
   */
  Animal.call(this, name, emoji);
  this.owner = owner;
}

// 3. 호랑이
function Tiger(name, emoji) {
  Animal.call(this, name, emoji);
}

/**
 * 상속
 * - Dog의 프로토타입을 오브젝트가 아니라 Animal로 변경
 * - Object.prototype 기본값 → Animal.prototype
 */
Dog.prototype = Object.create(Animal.prototype);
Tiger.prototype = Object.create(Animal.prototype);

Dog.prototype.play = () => {
  console.log('같이 놀자옹! 왈왈!');
};

Tiger.prototype.hunt = () => {
  console.log('사냥하자!...🐰');
};

const dog1 = new Dog('멍멍', '🐶', '제이크');
dog1.play();
dog1.printName();
console.log(dog1);

const tiger1 = new Tiger('어흥', '🐯');
tiger1.printName();
tiger1.hunt();

/**
 * 상속도 확인
 * - instanceof
 */
console.log(dog1 instanceof Dog);
console.log(dog1 instanceof Animal);
console.log(dog1 instanceof Tiger);
