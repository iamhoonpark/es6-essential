/**
 * Map
 * - 키, 값
 * - 키가 가르키고 있는 대상으로 자료 구조 찾기 때문에 순서가 중요하지 않음
 * - 그래서 키는 유일성
 * - Object와 유사
 * - 따라서 Map을 Object처럼 Object를 Map처럼 쓸 수 있음
 */
const map = new Map([
  ['key1', '🍕'],
  ['key2', '🍔'],
  ['key3', '🍟'],
]);
console.log(map);

// 사이즈 확인
console.log(map.size);

// 존재하는지 확인
console.log(map.has('key1'));

// 순회
map.forEach((value, key) => console.log(key, value));
console.log(map.keys());
console.log(map.values());
console.log(map.entries());

// 찾기
console.log(map.get('key3'));
console.log(map.get('key6'));

// 추가
map.set('key4', '🥨');
console.log(map);

// 삭제
map.delete('key4');
console.log(map);

// 전부삭제
map.clear();
console.log(map);

// 오브젝트와의 큰 차이점?
const key = { name: 'milk', price: 10 };
const milk = { name: 'milk', price: 10, description: '맛있는우유' };
const obj = {
  [key]: milk,
};
console.log(obj);

const map2 = new Map([[key, milk]]);
console.log(map2);

// 1. map과 object 에서 쓸 수 있는 함수(인터페이스)가 다름
// 2. obj[key] key로 접근이 가능하지만, map은 get으로 접근이 가능함
console.log(obj[key]);
console.log(map2.get(key));
