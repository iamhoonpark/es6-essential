/**
 * 1. Generator
 * - Iteration Protocol을 준수
 * - 값을 생성할 수 있는 제너레이터
 *
 * 2. Generator를 통해 이터레이블한 함수를 만드는 방법
 * - funtion* 를 붙이면 Generator 가 만들어지고
 * - yield 를 통해서 사용자가 next를 호출할 때까지 기다림
 * - 사용하는 사람에게 제어권을 양도
 *  · yield: return과 비슷하나, yield는 사용자가 원할 때까지 기다렸다가 리턴해줌
 */

function* multipleGenerator() {
  try {
    for (let i = 0; i < 10; i++) {
      yield i ** 2;
    }
  } catch (error) {
    console.log(error);
  }
}
const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done);

// return을 하는 순간 제너레이터가 끝남
// multiple.return();

// multiple 안으로 error를 던짐(어플리케이션을 에러 야기시킴)
// multiple.throw('Error 발생!!!!!!!!!!!!!!!!!!!!!!!');

// 사용하는 사람에게 제어권을 양도
next = multiple.next();
console.log(next.value, next.done);
