/**
 * 자바스크릅티의 함수는 만능
 * 함수처럼 사용, 생성자 함수로 사용(클래스 대체)
 * 하지만, 이걸 위해서 불필요한 무거운 프로토타입(많은 데이터를 담고 있는 객체)이 생성됨
 */
const dog = {
  name: 'Dog',
  /**
   * 💩 dog 객체에서 함수표현식으로 선언하게 되면
   * - 생성자 함수처럼 만들어지기 때문에 무거운 프로토타입이 생성됨
   * - this 바인딩이 동적으로 결정됨
   * - 이를 개선하기 위해 화살표 함수 play: () => {...}
   */
  play: function () {
    console.log('논다 멍!');
  },
};
// 객체 내부에 있는 함수(function)는 호출이 가능해서 일반 함수처럼 사용할 수도 있지만,
dog.play();

/**
 * 💩 일반 생성자 함수처럼 사용도 가능하다.
 * - 이렇게 함수(function 키워드)를 사용하면 일반 생성자함수로도 사용할 수 있기 때문에
 *   함수 내부에 자체적으로 더 무거운 프로토타입을 가지고 있다.
 * - 그래서 함수 표현식으로 선언하는 것은 좋지 않음
 */
const obj = new dog.play();
console.log(obj);

/**
 * ✨ 이를 개선하기 위해 나온 ES6의 메서드(Method)
 * - 함수 표현식이나, 에로우 펑션이 아니라 바로 함수를 선언하는 것
 * - 생성자 함수로 사용하지 않음
 */
const cat = {
  name: 'Cat',
  play() {
    // 객체의 메서드 (오브젝트에 속한 함수)
    console.log('냐옹~');
  },
};
// 생성자 함수로 사용❌
// const obj1 = new cat.play(); // ↪ TypeError: cat.play is not a constructor

/**
 * 화살표 함수의 특징
 * 1) 문법이 깔끔함
 * 2) 생성자 함수로 사용이 불가능(무거운 프로토타입을 만들지 않음)
 * 3) 인자에 대해서 모든 정보를 가지고 있는 무거운 arguments 객체를 가지고 있지 않음
 * 4) this에 대한 바인딩이 정적으로 결정됨
 *    - 함수에서 제일 근접한 상위 스코프 this에 정적으로 바인딩됨
 */
function sum(a, b) {
  // 전달된 인자에 대한 정보
  console.log('───────────────────1──────────────────────');
  console.log(arguments);
}
sum(1, 2);

const add = (a, b) => {
  // arrow 함수 외부의 정보(arguments)를 참조만 함 = 현 상태에서는 전역변수 등 정보
  console.log('───────────────────2──────────────────────');
  console.log(arguments);
};
add(1, 2);

const printArrow = () => {
  // 화살표함수가 정의된 곳의 상위 스코프의 this 정보 = 현 상태에서는 전역 globalThis인 모듈에 대한 정보
  console.log('───────────────────3──────────────────────');
  console.log(this);
};
printArrow();
cat.printArrow = printArrow;
console.log('───────────────────4──────────────────────');
cat.printArrow();
