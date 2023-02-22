/**
 * 1. 프로퍼티와 메소드
 * - 프로퍼티와 메소드는 인스턴스 레벨과 클래스 레벨으로 나뉨
 *
 * 1) 인스턴스 레벨의 프로퍼티와 메소드
 *  · Fruit2 클래스를 예로 들면 name, emoji, display 는 인스턴스 레벨의 프로퍼티와 메소드
 *  · 왜냐하면 클래스에서 정의한 프로퍼티와 함수들이 중복적으로 인스턴스를 만들어내기 때문
 *  · 호출방법: 만들어진 인스턴스는 객체.속성, 객체.함수() 이렇게 접근할 수 있음
 *
 * 2) 클래스의 레벨의 프로퍼티와 메소드
 *  · 그러나 모든 객체마다 동일하게 참조해야하는 속성이나 행동이 있다면 static 으로 선언해서 클래스 레벨의 프로퍼티와 메소드를 사용
 *  · 클래스 레벨은 만들어진 인스턴스에 포함이 되지 않고 클래스 내부에 한번만 정의해서 그대로 남아 있음
 *  · 호출방법: 클래스명.속성, 클래스명.함수()
 */

// static 정적 프로퍼티(속성), 메서드(함수)
class Fruit2 {
  static MAX_FRUITS = 4;

  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  // 인스턴스 레벨의 메서드
  // display 함수는 만들어진 객체에 주어진 데이터에 접근해서 무언가 출력
  // 즉, 만들어진 인스턴스와 밀접하게 연관되어 있기 때문에 인스턴스 레벨로 지정
  display = () => {
    console.log(`${this.name} ${this.emoji}`);
  };

  // 클래스 레벨의 메서드
  // 그러나, 클래스별로 공통적으로 사용할 수 있고
  // 만들어진 인스턴스 데이터에 참조할 필요가 없다면 static으로 만들 수 있음
  static makeRandomFruit() {
    // 클래스 레벨의 메서드에서는 주어진 데이터가 채워지지 않은 상태이기 때문에 즉, 템플릿이기 때문에 this를 참조할 수 없음
    // 임의의 인스턴스를 만들어서 리턴해주는 함수
    return new Fruit2('banana', '🍌');
  }
}

// instance 레벨의 프로퍼티, 메서드에 접근 방법: 생성된 인스턴스를 통해서 접근
const orange = new Fruit2('orange', '🍊');
console.log(orange);

// static 레벨의 프로퍼티, 메서드 접근 방법: 클래스 이름을 통해서 직접적으로 접근
console.clear();
const banana = Fruit2.makeRandomFruit();
console.log(Fruit2.MAX_FRUITS);
console.log(banana);

// static의 사용예제
// Math 빌트인 클래스를 이용해서 오브젝트를 만들지 않아도 바로 이렇게 유용한 유틸리티 함수들을 호출할 수 있음
Math.pow();
Number.isFinite(1);
