/**
 * 배열 생성하는 방법
 * - 보통 Array라는 클래스를 이용하는 것 보다는 어레이 리터럴([])을 주로 사용함
 */

// 1. (클래스를 이용) 사이즈를 지정해서 생성
let array = new Array(3);
console.log(array); // ↪ [ <3 empty items> ]

// 2. (클래스를 이용) item 을 직접 전달하여 생성
array = new Array(1, 2, 3);
console.log(array); // ↪ [ 1, 2, 3 ]

// 3. Array 에서 제공하는 static 함수
array = Array.of(1, 2, 3);
console.log(array); // ↪ [ 1, 2, 3 ]

// 4. 배열 리터럴
const anotherArray = [1, 2, 3, 4];
console.log(anotherArray);

// 5. 기존 배열로부터 새로운 배열을 반환하는 static 함수
// 단, iterable한 즉 순회가 가능한 것만 인자로 받을 수 있음
array = Array.from(anotherArray);
console.log(array);

array = Array.from('text');
console.log(array);

/**
 * 일반적으로 배열은 동일한 메모리 크기를 가지며, 메모리에 연속적으로 이어져 있어야 함
 * 하지만 자바스크립트에서의 배열은 메모리에 연속적으로 이어져 있지 않고(메모리 주소에 순서대로 할당되지 않음)
 * 오브젝트와 유사함(오브젝트랑 똑같다고 생각해도 됨)
 * 자바스크립트의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체다!
 * 이걸 보완하기 위해서 타입이 정해져 있는 타입 배열이 있음 (Typed Collection)
 * - https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_%EA%B0%9D%EC%B2%B4
 */

/**
 * 자바스크립트에서는 배열이 객체(object) 유사함을 증명할 수 있는 예제
 * 객체로 부터 배열이 만들어짐
 * - index(key)들과 length라는 key에 몇개의 item이 있는지만 정의하면 배열로 만들 수 있음
 */
array = Array.from({
  0: '안',
  1: '녕',
  length: 2,
});
console.log(array);
