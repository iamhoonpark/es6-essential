// 논리연산자 Logical Operator
// && 그리고
// || 또는
// ! 부정(단항연산자에서 온것)
// !! boolean 값으로 변환 (단항연산자 응용버전)

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log('──────────────────────────────');
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log('──────────────────────────────');
console.log(!'text');
console.log(!!'text'); // 문자열을 boolean 으로 변환
