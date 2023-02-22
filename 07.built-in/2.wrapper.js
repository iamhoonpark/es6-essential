/**
 * 래퍼 객체(Wrapper Object)
 * - 원시값을 필요에 따라서 원시값을 관련된 빌트인 객체로 변환한다.
 * - 필요하지 않는다면 다시 원시값으로 되돌린다.
 * - 자바도, 자바스크립트도 유용한 래퍼객체를 바로 쓰지 않는 이유?
 *   객체는 값뿐만 아니라 다양한 정보(함수 등) 가지고 있기 때문에 훨씬 더 무겁고 메모리를 많이 차지하기 때문
 */
const number = 123; // number 원시타입 변수  = Primitive
console.log(number.toString()); // 원시타입을 감싸고 있는 Number 타입 객체로 감싸짐 = Object
console.log(number); // Primitive

const text = 'text';
console.log(text); // string 원시타입 변수 text = primitive
console.log(text.length); // 원시타입을 감싸고 있는 String 객체
console.log(text.trim());

/**
 * 자바에서는 int number = 1; 으로 선언할 경우 기본자료형
 * Integer number = 1; 으로 선언할 경우 객체자료형
 *
 * 자바스크립트에서는 const number = 1; 으로 선언할 경우 원시타입(primitive)
 * number. 으로 접근할 경우 객체타입
 */
