/** typeof: 데이터 타입을 확인
 * - 값을 타입 문자열로 반환 */

let variable;
console.log(typeof variable);
// ↪ undefined

variable = '';
console.log(typeof variable);
// ↪ string

variable = 123;
console.log(typeof variable);
// ↪ number

variable = {};
console.log(typeof variable);
// ↪ object

variable = [];
console.log(typeof variable);
// ↪ object

variable = function () {};
console.log(typeof variable);
// ↪ function

variable = Symbol();
console.log(typeof variable);
// ↪ symbol

/**
 * 자바스크립트는 동적으로 실행이 될 떄, 어떤 값이 할당 되었냐에 따라 타입이 결정된다.
 * - dynamic, weakly typed programming language
 * 
 * 자바스크립트의 특징 두가지
 * 1) 동적이라는 특징
 * 2) 약하게 타입이 결정되어 있다(=Weakly Type) != 자바는 Strongly Type
 */