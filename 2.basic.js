// 객체를 손쉽게 만들 수 있는 템플릿 두가지

// 1. 생성자 함수 (오래된 고전적인 방법으로 더이상 사용하지 않음)
function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}
const apple = new Fruit('apple', '🍎');
console.log(apple);

// 2. 클래스
class Fruit2 {
  // 클래스를 이용해서 만들 객체에 필요한 데이터(프로퍼티)를 외부로부터 받아와서 채워줄 수 있는 생성자(constructor)
  // 생성자: new 키워드를 통해 객체를 생성할 때, 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  // 함수(메서드)는 생성자 밖에서 정의
  // this 키워드는 붙일 필요없음
  // function 키워드를 붙일 경우 문법오류 발생하므로
  // function 키워드를 제거하고 선언하거나 화살표 함수를 사용
  display = () => {
    console.log(`${this.name} ${this.emoji}`);
  };
}
const orange = new Fruit2('orange', '🍊');
console.log(orange);

const obj = { name: 'Jake' };

/**
 * 3. 객체와 인스턴스
 * 1) orange는 Fruit2 클래스의 인스턴스이다.
 *  - 즉, orange는 Fruit2라는 클래스를 통해서 만든 객체이다.
 *
 * 2) obj는 그냥 객체이고, 그 어떤 클래스의 인스턴스도 아니다.
 */
