// boolean 타입
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Boolean

// 활용예: 변수명은 be동사 + 형용사
let isFree = true;
let isActivated = false;
let isEntrolled = true;
console.log(isFree);
console.clear();

// Falshy 거짓인 값 (!! 연산자는 값을 t/f 변환)
console.log(!!0);
console.log(!!-0);
console.log(!!'');
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);
console.log('─────────────────────');

// Truthy 참인 값
console.log(!!1);
console.log(!!-1);
console.log(!!'text');
console.log(!!{});
console.log(!![]);
console.log(!!Infinity);
console.log(!!-Infinity);