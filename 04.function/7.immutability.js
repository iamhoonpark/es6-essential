/**
 * 불변성(Immutability=unchangable:변경할 수 없는)
 * - Object 라는 특정한 상태를 만들 때, 어딘가 주고 받아야 한다면 이 상태를 변경하는 것은 지양
 * - 즉, 상태가 변경되지 않도록 불변성을 유지하게 코딩해 나가는게 중요
 * - 함수 내부에서 외부로부터 주어진 인자의 값을 변경하는 것은❌
 * - 상태 변경이 필요한 경우에는 새로운 상태를(오브젝트, 값) 만들어서 반환해야 함✅
 * - 원시값 - 값에의한 복사 / 객체값 - 참조에 의한 복사(메모리 주소)
 */
function display(num) {
  /**
   * 함수 안에서 인자란 함수 내부에서 사용하고 있는 (지역)변수와 비슷(= let num = 4;)
   * 함수 내부에서 전달받은 인자의 값을 변경할 경우 함수블럭에서는 지역변수 num이 5, 외부에서 원시 value 값은 그대로 4
   * 당연해 보이지만 이렇게 작성하는 것은 바람직하지 않음 => displayObj 함수 확인
   */
  num = 5; // ❌
  console.log(num);
}
const value = 4;
display(value); // 5
console.log(value); // 4

function displayObj(obj) {
  obj.name = 'JENNA'; // ❌
  console.log(obj);
}
const jake = { name: 'JAKE' };
displayObj(jake); // JENNA
console.log(jake); // JENNA 즉, 값의 원본이 바뀌어 버림

// ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
function changeName(obj) {
  // 새로운 오브젝트를 만들어서 반환
  return { ...obj, name: 'Jake Sanghoon Park' };
}
console.log(changeName(jake));
