/**
 * 배열의 함수들
 * ✅ Point!
 * 1) 배열 자체를 변경하는지
 * 2) 아니면, 새로운 배열을 반환하는지
 */

const fruits = ['🍎', '🍌', '🍑', '🍇'];

// 특정한 오브젝트가 배열인지 아닌지 체크
console.log(Array.isArray(fruits));
console.log(Array.isArray([]));
console.log(Array.isArray({}));

// 특정한 아이템의 위치를 찾을때
console.log(fruits.indexOf('🍇'));

// 배열안에 특정한 아이템이 있는지 확인
console.log(fruits.includes('✅'));

/**
 * 1. 배열 자체를 수정(업데이트)하는 함수들
 */

// 추가 - 제일 뒤
// 배열 자체를 추가(업데이트)하고 배열의 길이도 같이 반환 > let length으로 선언과 할당
console.log(fruits);
let length = fruits.push('🥝');
console.log(length);

// 추가 - 제일 앞
length = fruits.unshift('🍈');
console.log(fruits);
console.log(length);

// 제거 - 제일 뒤
// 배열 자체를 삭제(업데이트)하고 해당 배열을 같이 반환
let lastItem = fruits.pop();
console.log(fruits);
console.log(lastItem); // 마지막 배열에 있는 아이템 반환

// 제거 - 제일 앞
lastItem = fruits.shift();
console.log(fruits);
console.log(lastItem); // 처음 배열에 있는 아이템 반환

// 중간에 추가 또는 삭제
// 1) 사직하는 인덱스, 몇개를 삭제할지 해당 배열을 반환
const deleted = fruits.splice(1, 1);
console.log(fruits);
console.log(deleted);

// 2) 시작하는 인덱스, 몇개를 삭제할지, 삭제하고 나서 다시 추가할 아이템
const deleted2 = fruits.splice(0, 1, '🥂', '🥦'); // 두번쨰 인자를 0으로 할 경우 삭제 없이 와인, 브로콜리 순으로 첫번째 인자 index에 추가
console.log(fruits);
console.log(deleted2);

/**
 * 2. 잘라진 새로운 배열을 만드는 함수들
 */

let newArr = fruits.slice(0, 2); // 0~1 까지 잘라져서 새로운 배열으로 반환
console.log(newArr);
console.log(fruits);

// slice(start?: number, end?: number): T[]; 여기에서 ?(물음표)는 TS에서 Optional
newArr = fruits.slice(); // 따라서 인자에 아무것도 넘기지 않을 경우 새로운 배열자체를 반환
console.log(newArr);

newArr = fruits.slice(1); // 인자 한개만 선언할 경우 시작 index부터 끝까지 새로운 배열 반환
console.log(newArr);

newArr = fruits.slice(-1); // 음수로 선언할 경우 시작 뒷index부터 처음까지 새로운 배열 반환
console.log(newArr);

// 여러개의 배열을 붙여줌
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3);

// 배열의 순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4);

// 중첩된 배열을 하나의 배열로 쫙 펴기
let arr = [
  [1, 2, 3],
  [4, [5, 6, [7, 8]]],
];
console.log(arr);
console.log(arr.flat()); // 그러나 배열 1단계 까지만 flat 해줌
console.log(arr.flat(2)); // 인자로 단계를 지정할 수 있음
console.log(arr.flat(3));
// 기존 배열을 수정하지 않기 때문에 flat한 값으로 업데이트
arr = arr.flat(3);

//────────────────────────────────────────────────────────────────────────────────────
// 특정한 값으로 배열을 채우기
// fill(value: T, start?: number, end?: number): this;
// fill 은 배열 자체를 수정
arr.fill(0);
console.log(arr);

arr.fill('s', 1, 3); // 1~2까지 채워짐
console.log(arr);

arr.fill('1', 1); // 1~2까지 채워짐
console.log(arr);

// 배열을 문자열로 합하기
let txt = arr.join();
console.log(txt);
txt = arr.join(' | ');
console.log(txt);
