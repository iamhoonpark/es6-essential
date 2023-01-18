let integer = 123; // 정수
let negative = -123; // 음수
let double = 1.23; // 실수
console.log(integer);
console.log(negative);
console.log(double);

let binary = 0b1111011; // 2진수
let octal = 0o173; // 8진수
let hex = 0x7b; // 16진수
console.log(binary);
console.log(octal);
console.log(hex);

/**
 * ✅ 숫자를 다룰 때 유의할 점 * 
 * Infinity: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Infinity
 *           https://www.youtube.com/watch?t=32&v=NKmGVE85GUU&feature=youtu.be
 * BigInt: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/BigInt
 * Number: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number
 */
console.log(0 / 123);       
// ↪ 0
console.log(123 / 0);
// ↪ Infinity
console.log(123 / -0);
// ↪ -Infinity
console.log(123 / 'text');
// ↪ NaN(Not a Number)

let bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt);