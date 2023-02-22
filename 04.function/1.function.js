/**
 * 함수(function)
 *
 * - 특정한 일을 수행하는 코드의 집합
 * 1) 유지보수성
 * 2) 재사용 가능
 * 3) 높은 가독성
 *
 * - 함수(function) 정의
 * 1) 함수 정의 키워드 function
 * 2) 함수 이름
 * 3) 매개변수, 인자(parameter)
 * 4) 결과값 반환 return
 *
 * - 함수의 타입은 Object
 * · 따라서 heap 이라는 메모리에 할당이 되어지고
 * · 함수명에는 함수 오브젝트가 담겨있는 그 메모리 주소를 가르킴
 */

// add(0x001) = 0x00A → 0x00A = function add()
function add(a, b) {
  return a + b;
}

// 함수의 이름을 변수에 할당한다는 것은 함수를 가르키고 있는 그 메모리 주소를 복사해서 할당하는 것
// 함수의 이름은 heap 메모리 함수의 객체의 주소를 가지고 있다
// sum(0x002) = 0x00A → 0x00A = function add()
const sum = add; // type function
console.log(sum(1, 1));
console.log(add(1, 1));

const result = add(1, 1);
console.log(' result = ', result);
