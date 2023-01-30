const fruits = ['🍎', '🍌', '🍑', '🍇'];

// 배열 아이템을 참조하는 방법
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length);

/**
 * ❌ 배열에 item을 추가, 삭제하는 방법 - 좋지 않은 방법
 * index에 직접적으로 접근(하드코딩) 방식
 */
fruits[4] = '🍓';
console.log(fruits);
// 대체 방법 그러나, 이것도 지양 why? index 에 직접 접근하기 때문
fruits[fruits.length];
console.log(fruits);

delete fruits[1];
console.log(fruits); // ↪ 해당 index에 item은 삭제되지만, 공간은 그대로 남아있음
