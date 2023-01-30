// Number 객체의 숫자 함수들
const num1 = 123;
const num2 = new Number(123); // 굳이 필요한 경우 아니라면 메모리 낭비일 수 있음
console.log(num1, typeof num1);
console.log(num2, typeof num2);

// Static Properties
console.log(Number.MAX_VALUE); // 정수에서 쓸 수 있는 최고값

console.log(Number.NaN);
if (num1 !== Number.NaN) {
  console.log('숫자라면 출력');
}

if (!Number.isNaN(num1)) {
  console.log('숫자라면 출력');
}

// 지수표기법(매우 크거나 작은 숫자를 표기할때 사용, 10의 n승으로 표기)
const num3 = 10;
console.log(num3.toExponential()); // = 1e+1 = 1 * 10¹

const num4 = 102;
console.log(num4.toExponential()); // = 1.02e+2 = 1.02 * 10²

// 실수를 반올림해서 문자열로 변환
const num5 = 1234.12;
console.log(num5.toFixed());

// 숫자를 그냥 문자열로 변환
console.log(num5.toString());
console.log(num5.toLocaleString('ar-EG')); // (아랍)해당 나라의 숫자를 문자열로 반환

// 원하는 자릿수까지 유효하도록 반올림
console.log(num5.toPrecision(5));
console.log(num5.toPrecision(4));
console.log(num5.toPrecision(3)); // 전체 자릿수 표기가 안될때는 지수표기법으로 반환

// EPSILON
// - 자바스크립트에서 실수끼리 계산할 때, 우리가 예상하지 못한 정말 작은 미묘한 차이가 발생할 수 있다.
// - 이것을 감지하기 위해 Number 타입에 static 프로퍼티 EPSILON 을 사용
console.log(Number.EPSILON); // 0과 1사이에서 나타낼 수 있는 가장 작은 숫자
if (Number.EPSILON > 0 && Number.EPSILON < 1) {
  console.log('EPSILON은 0보다 작고 1보다 크다 = true', Number.EPSILON);
}

const num6 = 0.1 + 0.2 - 0.2; // 0.1 이 아닌
console.log(num6); // 0.10000000000000003 으로 출력

/**
 * 우리는 10진법으로 계산을 하지만, 자바스크립트에서는 내부적으로 2진수로 변환해서
 * +, - 한 다음 2진수(0과 1로 나타내는 bit)로 계산해서 다시 10진수로 반환
 * 이런 과정에서 정확하게 부동 소수점까지 계산이 되지 않음 따라서 작은 오차가 위 num6 처럼 발생할 수 있음
 * 이런 작은 오차를 바로 EPSILON 이라고 볼 수 있음
 */

// 똑같은지 아닌지 검사하는 함수를 통해 검증
function isEqual(original, expected) {
  //   return original === expected;
  // return original - expected < Number.EPSILON; // 예시
  return Math.abs(original - expected) < Number.EPSILON; // 대개 절대값 함수를 이용해서 사용함
}
console.log(isEqual(1, 1));
console.log(isEqual(0.1, 0.1));
console.log(isEqual(num6, 0.1));
// 이런 작은 미세한 차이를 간주하고 싶지 않다면 === 이 아니라
// 함수의 return을 아래와 같이 변경해야 함
// return original - expected < Number.EPSILON
// 이렇게 두개의 값의 차이를 EPSILON 보다 작은지 검증하면 됨
