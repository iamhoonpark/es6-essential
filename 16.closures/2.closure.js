/**
 * 1. 스코프
 * 내부 블럭에서 외부 블럭에 접근 가능
 * (내부에서 선언된 변수는 외부에서 접근불가)
 */
const text = 'Hello';
function func() {
  console.log(text);
}
// func();

/**
 * 2. 클로저
 * 중첩된 함수에서 내부에 있는 함수와 외부에 있는 함수 상태(렉시컬환경)가 저장되어 있기 때문에
 * 내부함수에서 외부에 있는 렉시컬환경 즉, 데이터에 접근할 수 있는 것을 클로저라고 함
 * 즉, 내부함수와 외부함수의 상태(데이터)가 함께 묶여있는 상태, 닫혀있는 느낌
 * */
function outer() {
  const x = 0;
  function inner() {
    console.log(`Inside inner: ${x}`);
  }
  // inner(); // 함수호출
  return inner; // 참조값만 리턴
}
// outer();

// func1 이라는 이름으로 outer를 호출하면 outer에서 반환된 inner라는 함수의 참조값이 func1에 할당
const func1 = outer();

// 여기서 호출하면 여전히 'Inside inner'가 호출됨
// 왜냐하면 클로저로 인해서 함수가 리턴될 때, 함수 회부에 있는 렉시컬환경도 함께 묶여서 클로저로 반환되기 때문
func1();
