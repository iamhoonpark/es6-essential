/**
 * 클로저 Closures
 * - JS에서 클로저란 함수와 그 외부를 둘러싸고 있는 렉시컬 환경 두가지의 조합(콤비네이션)
 * - 다른말로, 클로저란 내부함수에서 외부함수에 있는 스코프(상태)에 접근할 수 있는 것
 * - ❗ 내부에서 외부를 다 가르킬 수 있다고 해서 '클로저' 는 아님 → 2.clsoure.js
 */

// 실행 컨텍스트 스택 예제1
// function outer() {
//   const x = 0;
//   function inner() {
//     x;
//   }
//   inner();
// }
// outer();

/**
 * 클로져 - 실행 컨텍스트 스택 예제2
 * - inner라는 함수의 참조 값을 return할 경우
 * 1) 어플리케이션이 실행되면 전역스코프
 * 2) outer함수 선언이 되어있어서 렉시컬환경이 전역을 참조
 * 3) inner렉시컬환경은 outer를 렉시컬을 참조하지만 호출되는 것이 아니라 반환되기 때문에 스택에 쌓이지 않음
 */
function outer() {
  const x = 0;
  function inner() {
    x;
  }
  return inner;
}
// inner라는 변수는 return inner; 이므로 inner() 함수를 가르킴
const inner = outer();
inner();
