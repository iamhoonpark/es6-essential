/**
 * 1. 일급객체(first-class object)
 * - 일반 객체처럼 모든 연산이 가능한 것
 *  · 함수의 매개변수로 전달
 *  · 함수의 반환값
 *  · 할당 명령문
 *  · 동일 비교 대상
 * - 즉, 일반 데이터처럼 함수에 인자로 전달 가능하며,
 *   리턴 값으로 사용 가능하며,
 *   변수에 할당이 가능하며,
 *   값으로 평가가 되는 것
 *
 * 2. 일급함수(first-class function)
 * - 함수가 일반 객체처럼 모든 연산이 가능한 것
 *  · 1번 내용과 동일
 * - 일급함수를 지원하는 언어: Java(v8), swift, kotlin, python
 *
 * 3. 고차함수(Higher-order function)
 * - 함수에서 함수를 인자로 받거나(=콜백)
 * - 함수를 반환(return)하는 함수를 고차함수라 함
 * - 콜백함수를 인자로 받았다면, 함수 안에서 필요한 순간에 인자로 전달받은 콜백함수를 호출할 수 있는 권함이 있음
 *   그래서 조금 더 높은 순서에 있다고 해서 고차함수라고 함
 *
 * 3-1. (고차함수) 함수형 프로그래밍
 * ※ 배열을 배우다가 뜬금없이 고차함수?
 * - 배열에서도 사용할 수 있는 유용한 고차함수들이 많기 때문
 * - 이렇게 함수 단위로 엮어나는 것을 함수형 프로그래밍이라 함
 * - for, if문을 통해서 순서대로 절차지향적으로 프로그래밍을 하는 것이 아니라,
 *   특정한 일을하는 함수들끼리 서로 연결하고 엮어놓는 것이다.
 * - 함수형 프로그래밍을 하기 위해서는 순수함수를 해나가는 것이 중요함
 *
 * 3-2. (함수형 프로그래밍) 순수함수
 * - 함수 안에서 불변성을 유지하는 것
 * - 전달받은 인자(매개변수)나 또는 함수 밖에 있는 특정한 상태를 함수 내부에서 수정하지 않고
 *   전달받은 인자를 통해서 함수에서 특정한 연산이나 일을 수행한 다음에 새로운 값을 리턴하는 것
 * - 이걸 함수 내부에서 사이드 이펙트(side effect, 부작용)이 없게 만든다 라고도 함
 * - 이렇게 순수함수를 만듬으로써 에러를 줄이고 가독성은 높일 수 있음
 *
 * 즉, 이런 순수함수들을 서로 묶어서 연결해놓은 것을 함수형 프로그램밍이라고 함
 * - 그래서 함수형 프로그래밍을 사용하면 데이터를 변경하지도 않고, 변수를 사용하지 않고
 *   조건문, 반복문도 사용하지 않음(데이터를 변경X, 변수사용X, 조건문X, 반복문X)
 * - 배열에서도 함수형 프로그래밍 스타일로 코딩을 해나갈 수 있음
 */

/**
 * 1. forEach
 *  - 배열의 요소(아이템)를 하나씩 전부 실행
 *  - 기존 for문을 활용해서 배열에 있는 아이템을 개별적으로 실행하기 위해서 for문을 사용
 *    → 그러나, 지저분하고 가독성을 낮추며 작성하기도 귀찮은 단점이 있음
 *  - 이를 간편하게 할 수 있는 고차함수
 */
const fruits = ['🍌', '🍓', '🍇', '🍓'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

fruits.forEach(function (value, index, array) {
  console.log(value);
  //   console.log(index);
  //   console.log(array);
});

// 축약: 1) return 키워드 삭제 2) 보통 arrow function을 많이 사용
fruits.forEach((value) => console.log(value));

/**
 * 2. find
 *  - 조건에 맞는(콜백함수) 요소(아이템)를 찾을 때 사용
 *  - 제일 먼저 조건에 맞는 아이템을 반환
 */
const item1 = { name: '🍟', price: 2 };
const item2 = { name: '🍔', price: 3 };
const item3 = { name: '🥤', price: 1 };
const products = [item1, item2, item3, item2];

const found = products.find((value, index, object) => {
  return value.name === '🍔';
});
console.log(found);

// 코드 블럭에서 값을 바로 반환할 경우 return 키워드 생략가능
let found2 = products.find((value) => value.name === '🍔');
console.log(found2);

/**
 * 3. findIndex
 *  - 제일 먼저 조건(callback)에 맞는 아이템의 인덱스를 반환
 */
found2 = products.findIndex((value) => value.name === '🍔');
console.log(found2);

/**
 * 4. some
 *  - 배열의 아이템들이 부분적으로 조건(callback)에 맞는지 확인
 */
let result = products.some((item) => item.name === '🍔'); // 배열 중 name이 하나라도 🍔면 true를 반환
console.log(result);

/**
 * 5. every
 *  - 배열의 아이템들이 전부 조건(callback)에 맞는지 확인
 */
result = products.every((item) => item.name === '🍔');
console.log(result);

/**
 * 6. filter
 *  - 조건에 맞는 모든 아이템들을 새로운 배열로 반환
 *  - 2.find를 활용해서 첫번째 아이템을 반환했다면, filter는 특정 상태에 해당하는 모든 아이템들을 반활할 때 사용
 */
result = products.filter((item) => item.name === '🍔');
console.log(result);

console.clear();

/**
 * 7. Map
 *  - 배열의 아이템들을 각각 다른 아이템으로 매핑할 수 있는, 변환해서 새로운 배열으로 생성
 *  - 하나당 하나를 연결(https://reactivex.io/documentation/operators/map.html)
 */
const nums = [1, 2, 3, 4, 5];
result = nums.map((item) => item * 2);
console.log('1) 기존배열: ', nums, ' 2) 새로운배열: ', result);

result = nums.map((item) => {
  if (item % 2 === 0) {
    return item * 2;
  } else {
    return item;
  }
});
console.log('1) 기존배열: ', nums, ' 2) 새로운배열: ', result);

/**
 * 8. Flatmap
 *  - 중첩된 배열을 flat하게 펴줌, 변환해서 새로운 배열으로 생성
 *  - https://reactivex.io/documentation/operators/flatmap.html
 */
result = nums.map((item) => [1, 2]);

let result2 = nums.flatMap((item) => [1, 2]);
console.log('1) map : ', result, '\n2) flatMap : ', result2);

result = ['dream', 'coding'].map((text) => text.split(''));
result2 = ['dream', 'coding'].flatMap((text) => text.split(''));
console.log('1) map : ', result, '\n2) flatMap : ', result2);

/**
 * 9. sort
 *  - (문자열형태의)배열의 아이템을 정렬 오름차순으로 요소를 정렬
 *  - 숫자는 문자열로 변환 후 오름차순으로 정렬
 *  - 기존의 배열을 변경
 */
const texts = ['hi', 'abc'];
texts.sort();
console.log(texts);

const numbers = [0, 5, 4, 2, 1, 10];
numbers.sort();
console.log(numbers);

/**
 * 9-1. callback과 sort를 활용해서 number 타입별 정렬
 *  - 첫번째 인자가 두번째 인자보다 작으면 음수, 같으면 0, 크면 양수로 평가
 *  - callback에는 인자를 순서대로 두개씩 전달 후 a와 b를 뺐을 때 값이 -라면 a가 b보다 작다는 것으로 해당 기준으로 sorting함
 *   · < 0 일 경우 a가 앞으로 정렬, 오름차순
 *   · > 0 일 경우 b가 앞으로 정렬, 내림차순
 */
result = numbers.sort((a, b) => {
  console.log('a = ', a, 'b = ', b, 'return a - b = ', a - b);
  return a - b;
});
console.log(result);

/**
 * 10. reduce
 *  - 배열의 요소들을 하나씩 접어서 값을 하나로
 *  - https://reactivex.io/documentation/operators/reduce.html
 *  - 0으로 정의할 경우, sum이라는 인자가 0으로 초기화 된 후 value에는 배열의 요소들이 전달됨
 *  - 즉 콜백의 첫번째 인자(sum)는 계속해서 값을 저장할 공간으로 초기값은 두번째 인자를 통해 설정
 *  - 콜백의 두번째 인자(value)는 배열의 각각의 요소들이 순차적으로 할당
 *  - 최종적으로 마지막 값이 result에 할당
 */
result = [1, 2, 3, 4, 5].reduce((sum, value) => {
  console.log('1)sum: ', sum, ', 2)value: ', value);
  sum += value;
  return sum;
}, 0);
// => 축약가능 [1, 2, 3, 4, 5].reduce((sum, value) => (sum += value), 0);
console.log(result);
