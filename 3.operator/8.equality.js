// 동등 비교 관계 연산자 (Equality Operators)
// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘다 같음
// !== 값과 타입이 다름
console.log(2 == 2);
console.log(2 == '2');
console.log(2 === 2);
console.log(2 === '2');

console.log('───────────────────────────────');
console.log(true == 1);
console.log(true === 1);

console.log('───────────────────────────────');
const obj1 = {
  name: 'js',
}; // 0x111 해당 변수에는 값이 아닌 메모리 주소가 할당
const obj2 = {
  name: 'js',
}; // 0x112

console.log(obj1 == obj2); // false 값 자체가 다름
console.log(obj1 === obj2); // false 타입은 같으나 값 자체가 다름

console.log(obj1.name == obj2.name); // true
console.log(obj1.name === obj2.name); // true
console.log('✨ ', typeof obj1.name);

const obj3 = obj1;
console.log(obj3 == obj1); // true
console.log(obj3 === obj1); // true
