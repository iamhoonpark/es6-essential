/**
 * Nullish Coalescing Operator
 * ES11 (ECMAScript 2020)
 * - null 체크를 깔끔하게 할 수 있음
 * - 문법: ??
 * - null과 undefined인 경우만 해당
 *  ※ Default Parameter: null, undefined
 *     || 단축평가: 모든 falshy한 경우(0, -0, '', null, undefined)
 */

// 비슷해보이지만 다른
let num; // = 0;
console.log(num || '-1'); // falshy로 간주되어 num이 0이라도 -1으로 초기값이 설정됨
console.log(num ?? '-1'); // 값이 없을(null, undefined)에만 초기값이 설정됨
