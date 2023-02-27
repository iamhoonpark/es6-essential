'use strict';
/**
 * 엄격모드(Strict Mode)
 * - 기존 조용히 무시되던 에러들을 throwing
 * - JavaScript 엔진의 최적화 작업을 어렵게 만드는 실수를 바로 잡음
 * - React와 같은 프레임워크 사용시 기본적으로 엄격 모드임
 * - 순수 JS를 사용할 경우에는 느슨한 모드(Sloppy Mode)이므로 엄격모드가 적용되지 않음
 * - 해당 키워드는 'use strict';
 */

// 1. var
var x = 1;

// 2. delete
delete x;

// 3. 존재하지 않는 변수 b
function add(x) {
  var a = 2;
  b = a + x;
  // 4. 함수 내부에서 this는 undefined
  console.log(this);
}
add(1);

// 5.const 변수를 생략하면 기본적으로 var으로 감지하기 때문에 에러
// 엄격모드에서는 let이나 const를 반드시 선언
const array = [1, 2, 3];
for (num of array) {
  console.log(num);
}
