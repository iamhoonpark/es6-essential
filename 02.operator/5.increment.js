// 증가 & 감소 연산자 Increment & Decrement Operators
let a = 0;
console.log(a);
a++; //== a = a + 1;
console.log(a);
a--;
console.log(a);

console.clear();
// 주의✅
// a++; 필요한 연산을 하고, 그 뒤 값을 증가시킴
// ++a; 값을 먼저 증가하고 필요한 연산을 함
a = 0;
let b = a++;
console.log(b); // ++가 a의 후위에 있기 때문에 필요한 연산(할당연산) 먼저 진행 후 값을 증가
console.log(a);

console.clear();
// 필요한 연산
let c = 0;
console.log(c++); // 필요한 연산(함수)를 먼저 실행 후
console.log(c); // 값을 증가
console.log(++c); // 값을 증가 후 연산(함수)
