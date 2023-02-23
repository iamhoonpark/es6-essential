/**
 * 콜스택(자바스크립트 실행 순서)
 * 1. JavaScript Runtime Environment: 자바스크립트가 동작할 수 있는 환경(웹, 노드 등)
 * 2. JavaScript Engine: 소스코드를 자바스크립트 엔진이 하나하나씩 이해하고 번역 후 실행
 *  1) Memory Heap: 소스코드에서 동적으로 객체를 생성할 경우 생성되는 장소
 *  2) Call Stack: 함수의 실행 순서를 기억(한번에 한가지 일만)
 *   · 호출: c() ➡ b() ➡ a()
 *   · 실행: a() ➡ b() ➡ c()
 *  3) 자바스크립트 엔진은 하나의 싱글 컨텍스트 스택으로 볼 수 있음 = Context
 *   · 한번에 하나의 일만 처리할 수 있음 = Single Thread
 *  4) 그래서 자바스크립트는 기본적으로 하나에 한가지 일만 처리할 수 있기 때문에 동기적으로 진행·실행
 *  5) 그래서 자바스크립트는 동기적으로 실행되기 때문에 무거운, 오래걸리는 작업을 수행시키면 좋지 않음
 */
function a() {
  return 1;
}

function b() {
  return a() + 1;
}

function c() {
  return b() + 1;
}

const result = c();
console.log(result);
