/**
 * 호이스팅(Hoisting, 끌어올리다)
 *
 * - 자바스크립트 엔진(번역기, Interpreter)이 코드를 실행하기 전
 * - 변수, 함수, 클래스의 '선언문' 을 끌어 올리는 것을 말함
 *
 * - 파일 제일 아래에 선언해도 제일 위에 있는 것처럼 끌어올림
 * - 자바스크립트 엔진이 어플리케이션을 실행 전, 코드를 스캐닝 후 각각의 렉시컬 환경을 만들고
 * - 그 환경에 어떤 데이터들이 있는지 미리 선언만 해두는 역할
 * - 할당하는 값은 신경쓰지 않음
 *
 * - 변수의 선언과 초기화를 분리한 뒤에 선언한 코드만 최상단으로 옮김
 * - ex) let a = {}; let a만 최상단으로 올려둠
 *
 *  - 가능한 const를 사용하되, 재할당이 필수로 필요한 경우만 let을 사용
 */

/**
 * 1. 함수
 * - 함수의 호이스팅은 함수의 선언문 전에 호출이 가능하게 해줌
 */
print();

function print() {
  console.log('Hello');
}

/**
 * 2. 변수(let·const) 및 클래스
 * - 선언만 호이스팅
 * - 초기화는 불가능
 * - (에러메세지) ReferenceError: Cannot access 'hi' before initialization
 */
// console.log(hi);
let hi = 'hi';

// 함수표현식 console.log(func1);
let func1 = function () {};

// const cat = new Cat();
class Cat {}

/**
 * 3. 스코프
 * - 글로벌, 블록의 호이스팅
 */
let x = 1;
{
  console.log(x);
  let x = 2;
}
/**
 * - ReferenceError: Cannot access 'x' before initialization
 * - 블록 안에서 변수를 선언했기 때문에 선언된 부분만 호이스팅되어 블록 내부 최상단으로 끌어올라감
 * - 따라서 x라는 변수는 블록 내부에 존재하는데 아직 초기화가 49번 라인에서는 이루어지지 않은 상태
 * - 즉 2번의 let변수 hi와 똑같은 상태
 * - 글로벌이든 블록이든 변수는 선언까지만 되고 호이스팅되고 초기화는 해당 코드 라인에 와야 초기화가 이루어짐
 */
