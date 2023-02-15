/**
 * Spread 연산자(전개구문)
 * - 모든 Iterable은 Spread 될 수 있다
 * - 순회가 가능한 모든 것들을 펼칠 수 있다
 * - func(...iterable)
 * - [...iterable]
 * - {..obj}
 * - EcmaScript 2018에 도입
 */
function add(a, b, c) {
  return a + b + c;
}
const nums = [1, 2, 3];
console.log(add(...nums));

// Rest Parameters
function sum(first, second, ...etc) {
  console.log(first);
  console.log(second);
  console.log(etc);
}
sum(1, 2, 3, 4, 5, 6, 7, 8, 9);

// Array Concat
const emoji1 = ['💖', '🧡'];
const emoji2 = ['💚', '💙'];
let arr = emoji1.concat(emoji2);
let arr2 = [...emoji1, '❣', ...emoji2];
console.log(arr);
console.log(arr2);

// Object
// Shallow Copy
const jake = { name: 'Jake', age: 20, home: { address: 'Seoul' } };
const updated = { ...jake, job: 's/w enginner❤' };
console.log(jake);
console.log(updated); // 새로운 obj를 반환하기 때문에 원본에는 영향X
