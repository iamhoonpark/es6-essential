// 접근자 프로퍼티 (Accessor Property) = getter, setter
// 클래스의 상태(변수)처럼 보이지만 실제로는 함수를 말하는 것
// 접근자 프로퍼티는 무언가를 처리하는 행동, 행위는 아니지만 프로퍼티의 일부분이고 무언가를 조합하거나 또는 get, set을 할 때, 특정한 일을 하고 싶을 때 유용하게 사용

class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    // this.fullName = lastName + firstName;
  }
  // 접근자 프로퍼티
  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }

  // 할당할 때, 호출됨
  set fullName(value) {
    console.log(value);
  }
}

console.clear();
/**
 * 현재 문제점 : Jake 로 수정해도 student.fullName 은 업데이트가 되지 않고 그대로 '박상훈'
 * 필드에 접근할 때 마다 새로운 fullName 을 반환하고 싶을 때 함수를 사용할 수도 있지만(function fullName())
 * 접근자 프로퍼티를 사용 = get fullName()
 */
const student = new Student('상훈', '박');
student.firstName = 'Jake';
// 접근자 프로퍼티
console.log(student);
console.log(student.fullName); // 변수명 . 으로 값을 읽게되면 get이 호출
student.fullName = '김철수'; // 값을 할당한다면 set이 호출되어 인자로 데이터를 전달
