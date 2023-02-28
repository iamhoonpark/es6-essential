/**
 * 프로토타입(Prototype)
 * - 자바스크립트가 프로토타입을 베이스로해서 만들어진 언어
 * - 상속을 위해서 프로토타입을 사용
 * - 클래스(Class)를 사용하고 있는 것도 프로토타입을 감싸고 있는 문법적설탕(Syntax Sugar)임
 *
 * 1. Object
 * - 자바스크립트의 모든 객체는 내부에 숨겨진 Object [[Prototype]]을 가지고 있음
 * - 객체에서 공통적으로 사용하는 함수를 Object라는 프로토타입에 만들어둠으로써 손쉽게 상속을 할 수 있음
 * - 외부에서 직접 접근 불가
 *
 * 2. Array
 * - 자바스크립트의 배열은 내부에 숨겨진 Array라는 [[Prototype]]을 가지고 있음
 * - 또 Array는 Object [[Prototype]] 도 상속받고 있음
 * - 따라서 Array, Object에서 공통적으로 사용하는 함수를 모두 사용 가능
 *
 * 즉, Array는 객체이기 때문에 Object 프로토타입을 상속하고 있음
 *
 * 접근방법
 * 1) __proto__
 * 2) Object.getPrototypeOf()
 * 3) Object.setPrototypeOf()
 * 4) 생성자함수에서는: prototype 으로 접근
 *
 * ex) 웹브라우저 Console에서 확인 가능
    const obj1 = {};
    const obj2 = {};
    obj1.__proto__ === obj2.__proto__
 */
