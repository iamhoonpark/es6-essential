// 1. 주어진 배열에서 중복을 제거하기
const fruits = ['🥝', '🍈', '🍓', '🍑', '🍉', '🍎', '🍇', '🍇'];
const set = new Set(fruits);
// 1) 중복제거
console.log(set);
// 2) 다시 배열
console.log([...set]);
// 3) 1,2 번을 합친 심플한 버전
console.log([...new Set(fruits)]);

// 2. 주어진 두 세트의 공통된 아이템만 담고 있는 세트를 만들기
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);

function findIntersection(set1, set2) {
  return new Set([...set1].filter((item) => set2.has(item)));
}
console.log(findIntersection(set1, set2));
