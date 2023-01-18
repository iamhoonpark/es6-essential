// 연산자 중에서도 어떤 것이 우위를 가지는 지
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
let a = 2;
let b = 3;
let result = a + b * 4;
console.log(result); // 12

result = a++ + b * 4;
console.log(result); // 13
console.log(a); // 3

// 우선 순위를 조정하고 싶을 때는 괄호()
result = (a + b) * 4;
console.log(result);

result = ((a + b) * 4) / 5;
console.log(result);
