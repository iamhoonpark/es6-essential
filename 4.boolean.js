// Boolean Object
true.valueOf(); // 불리언 원시타입도 해당하는 객체가 있다

/**
 * 선언 방법 두 가지
 * - 그러나 객체를 사용하면 메모리를 더 소모하기 때문에 굳이 객체를 사용하지 않고 바로 true로 선언
 */
const isTrue = true;
const isTure2 = new Boolean();

console.log(isTrue.valueOf());

/**
 * Falsh
 * 0
 * -0
 * null
 * NaN
 * undefined
 * ''
 */

/**
 * Truthy
 * 1
 * -1
 * '0'
 * 'false'
 * []
 * {}
 */
