/**
 * Mixin
 * - 오브젝트는 단 하나의 prototype을 가리킬 수 있음
 * - 상속은 단 하나의 부모만
 * - 하지만 여러 개의 함수들을 상속하고 싶을 때 사용
 * - 믹싱을 통해서 여러 개의 객체를 재사용할 때 사용
 */
const play = {
  play: function () {
    console.log(`${this.name} 놀아요!`);
  },
};

const sleep = {
  sleep: function () {
    console.log(`${this.name} 자요!`);
  },
};

function Dog(name) {
  this.name = name;
}

// Mxin: Dog 프로토타입에 play와, sleep을 할당
Object.assign(Dog.prototype, play, sleep);
const dog = new Dog('멍멍');
// 함수가 잘 호출되는 것을 확인 가능
dog.play();
dog.sleep();
console.log(dog);
console.log('─────────────────────────────────────────────────');

/**
 * 클래스에도 활용이 가능
 * JS의 class는 클래스처럼 보이지만, 내부적으로는 프로토타입을 베이스하고 있음
 * JS는 본질상 프로토타입을 베이스로한 프로그래밍 언어이기 때문
 *
 */
class Animal {}
class Tiger extends Animal {
  constructor(name) {
    super();
    this.name = name;
  }
}
Object.assign(Tiger.prototype, play, sleep);
const tiger = new Tiger('어흥!');
tiger.play();
tiger.sleep();
console.log(tiger);
