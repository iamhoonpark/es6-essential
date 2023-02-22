// 클래스를 확장할 수 있는 상속(Extends)

class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('먹자!');
  }
  sleep() {
    console.log('잔다~');
  }
}

class Tiger extends Animal {}
const tiger = new Tiger('yellow');
console.log(tiger);
tiger.eat();
tiger.sleep();

class Dog extends Animal {
  /**
   * 자식클래스에서 생성자를 정의하는 순간, 부모 클래스의 필드를 전부 받아와야 함
   * (생성자를 통해서 외부로부터 데이터를 받아올 수 있었음)
   * super 키워드는 내가 상속하고 있는 부모 클래스를 가르킴
   * super() 라고 선언할 경우 부모클래스의 생성자를 호출
   * 따라서 부모 클래스의 생성자를 호출하여 인자로 데이터를 보낼 수 있음
   */
  constructor(color, ownerName) {
    super(color);
    this.ownerName = ownerName;
  }
  play() {
    console.log('놀자~~~!~!');
  }
  eat() {
    /**
     * super 키워드는 내가 상속하고 있는 부모 클래스를 가르킴
     * 부모의 기능을 유지하면서 추가적인 것을 하고 싶을 때
     * super . 으로 접근
     */
    super.eat();

    // 오버라이딩(overriding): 부모의 행동을 내 행동으로 덮어씌움
    console.log('강아지가 먹는당!');
  }
}
const dog = new Dog('brown', 'Jake');
console.log(dog);
dog.eat();
dog.sleep();
dog.play();
