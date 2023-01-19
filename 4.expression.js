// 복습: 모든 표현식은 문(Statement)인데, 문 중에서도 값으로 평가될 수 있는 것이 표현식(Expression)이다.
// 결론: 함수는 값으로 표현될 수 있는 표현식이다.

// 1. 함수 선언문: function name() { }

/**
 * 2. 함수 표현식: const name = function () { }
 * - 이것이 가능한 이유는 함수도 객체이기 때문
 * · 객체는 다른 변수에 할당하거나 재할당하는 것이 가능
 * - 함수에 이름이 없기 때문에 무명함수 라고도 함
 */
let add = function (a, b) {
  return a + b;
};
console.log(add(1, 2));

/**
 * 3. 화살표 함수: const name = () => { }
 * - function 이라는 키워드를 생략할 수 있는 함수
 * - 기술적인 차이점도 존재 -> 호이스팅
 * - 만약 값만 반환되는 함수라면 코드블럭({})과 return 키워드를 생략 가능
 * · ex) add2 = (a, b) => a + b;
 */
add2 = (a, b) => {
  return a + b;
};
console.log(add2(1, 2));

/**
 * 4. 생성자 함수: const object = new Function();
 * - 객체(object)를 만들 때 조금더 간편하게 만들 수 있음
 */

/**
 * 5. IIFE(Immediately-Invoked Function Expressions) 즉각적으로 호출할 수 있는 함수 표현식
 * - 함수는 정의만 해놓고 호출을 하지 않으면 실행이 되지 않음
 * - 그런데, 함수를 괄호로 묶으면 함수가 값으로 변환이 됨
 * - 함수를 정의하고 바로 호출하고 싶을 때 사용
 * - 웹페이지를 로딩되면서 함수를 호출할 때 사용 그 외엔 잘 사용하지 않음
 */
(function run() {
  console.log('😃');
})();
