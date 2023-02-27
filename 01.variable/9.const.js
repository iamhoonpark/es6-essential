// let 재할당이 가능
let a = 1;
a = 2;
console.log(a);

/** const 재할당이 불가능
 * 1. 상수
 * 2. 상수변수 또는 변수
 */
const text = 'hello';
// text = 'hi'; // ↪ TypeError: Assignment to constant variable.
console.log(text);

// 재할당이 불필요한 경우 = const
// 1. 상수
const MAX_COUNTS = 5;

// 2. 재할당 불가능한 상수변수 또는 변수
const apple = {
  name: 'apple',
  color: 'red',
  display: '🍎',
};
// apple = {};  // 불가능 ↪ TypeError: Assignment to constant variable.

apple.name = 'orange'; // 가능
apple.color = 'orange'; // 가능
apple.display = '🍊'; // 가능
console.log(apple);
// apple 이 가르키는 메모리셀에 다른 메모리 주소를 재할당이 불가능할 뿐, object 가르키는 곳에 레퍼런스 값의 변경은 가능하다

/**
 *  키워드  │  재할당(Reassignable) │ 변경(Mutable) - 변수가 가르키고 있는 오브젝트의 value
 *   let    │          YES         │     YES
 *  const   │          N O         │     YES
 *
 * - 가능한 const를 사용하되, 재할당이 필수로 필요한 경우만 let을 사용
 */
