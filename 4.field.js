/**
 * 접근제어자 - 캡슐화
 * - private(#), public(default), protected()
 * - 과일이라는 객체를 만들었을 때, apple이라는 이름과 🍎이라는 이모지를 지정했을 때,
 *   apple.name = '오렌지'; 과 같이 프로퍼티들에 접근하여 수정하지 못하도록하고 싶을 때 접근제어자를 이용
 */
class Fruit {
  // 사실 필드(외부로 부터 전달받는 데이터)가 숨어있음
  // 대개 자바스크립트에서는 생성자(constructor)에서 주어지는거라면 필드를 생략함
  #name;
  #emoji;

  // 인스턴스를 만들 때 바로 초기화 하고 싶을 때
  #type = '과일';

  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }

  #display = () => {
    console.log(`${this.#name} ${this.#emoji}`);
  };
}

const apple = new Fruit('apple', '🍎');
// apple.#name = '오렌지'; // #field는 외부에서 접근이 불가능함
console.log(apple); // 실행 시 필드들의 정보가 나오지 않음
