// Nullish Coalescing Operator
// ES11 (ECMAScript 2020)
// null 체크를 깔끔하게 할 수 있음
// ?? : null과 undefined인 경우만 해당

// Default Parameter는 null과 undefined인 경우
// ||는 모든 falshy한 경우(0, -0, '', null, undefined)

let num; // = 0;
console.log(num || '-1'); // 초기값이 설정
console.log(num ?? '-1'); // 값이 없을(null, undefined) 경우
