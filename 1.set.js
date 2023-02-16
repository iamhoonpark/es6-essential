/**
 * Set
 * - 집합체
 * - Array와 다르게 Index와 순서가 없음
 * - Array와 다르게 중복불가
 */
const set = new Set([1, 2, 3]);
console.log(set);

// 사이즈 확인
console.log(set.size);

// 존재하는지 확인
console.log(set.has(2));
console.log(set.has(6));

// 순회
set.forEach((item) => console.log(item));
for (const value of set.values()) {
  console.log(value);
}

// 추가
set.add(6);
console.log(set);
set.add(6);
console.log(set); // 무시됨=중복불가

// 삭제
set.delete(6);
console.log(set);

// 전부삭제
set.clear();
console.log(set);

// 오브젝트 세트
const obj1 = { name: '🍕', price: 20 };
const obj2 = { name: '🍔', price: 4 };
const objs = new Set([obj1, obj2]);
console.log(objs);

// Shallow Copy
// Set은 Obj의 메모리 주소값을 복사해서 넣음
obj1.price = 10;
objs.add(obj1);
console.log(objs);

// 동일한 오브젝트를 넣으면 어떻게 될까?
// 메모리의 참조 주소가 다르기 때문에 중복으로 인식되지 않음
const obj3 = { name: '🍔', price: 4 };
objs.add(obj3);
console.log(objs);
