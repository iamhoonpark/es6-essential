// 1. return을 명시적으로 하지 않으면 자바스크립트 엔진이 undefined를 자동으로 반환 처리함
function add(a, b) {
  // return a + b;
}
const result = add(1, 2);
console.log(result);

// 그래서 함수에서 값을 반환해야 하는 함수가 아니라면 return을 사용할 필요없음
function print(text) {
  console.log(text);
}
print('hi');
// ↪ hi

// 그러나 굳이 개발자가 함수를 호출한 뒤 어떤 값이 반환되는지 궁금해할 때
const outcome = print('hello~');
// ↪ hello

console.log(outcome);
// ↪ undefined
// 즉, 굳이 return 값을 받는 형태의 변수(outcome)에 함수 표현식을 할당하는 것은 바람직하지 않음

// 2. return; 을 함수 중간에 선언하게 되면 해당 문에서 함수를 즉시 종료
// 사용예: 조건이 맞지 않는 경우 함수 도입부분에서 함수를 일찍이 종료함
// 사용법: return; 또는 return undefined; 으로 축약어일 뿐 동일한 의미
