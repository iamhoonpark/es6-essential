/**
 * this 바인딩
 * - 자바, C#, C++ 대부분의 객체지향 프로그래밍 언어에서는 this는 항상 자신의 인스턴스 자체를 가르킴
 * - this라고 하는 것은 정적으로 인스턴스가 만들어지는 시점에 this가 결정되고 변경될 수가 없음
 * - 하지만, JS에서는 누가 호출하냐(주체가 누구냐)에 따라서 this가 달라질 수 있음
 * - 즉, this는 호출되는 오브젝트(caller)에 의해서 동적으로 결정됨
 */

function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(`고양이 이름은 ${this.name} 이라옹~`);
  };
}

function Dog(name) {
  this.name = name;
  this.printName = function () {
    console.log(`강아지 이름은 ${this.name} 이라월!`);
  };
}

const cat = new Cat('냐옹!');
const dog = new Dog('멍멍!');
cat.printName();
dog.printName();
console.log('─────────────────────────────────────────────');
console.log();

/**
 * JS에서는 호출되는 오브젝트에 따라서 this가 동적으로 결정됨
 * - cat에 있는 printName을 할당해주었기 때문에 해당 함수가 호출됨
 * - this.name은 cat의 name을 가르키고 있는 것이 아니라 호출한 사람(dog)
 * - Dog 객체에서 호출이됨 = dog의 this로 동적으로 변환
 */
dog.printName = cat.printName;
dog.printName();
cat.printName();
/**
 * 누가 호출하냐에 따라서 this가 동적으로 결정된다는 뜻은 위와 같이
 * - Dog 객체가 호출하면 Dog 객체의 name, Cat 객체가 호출하면 Cat 객체의 name으로 결정된다는 뜻
 * ❗ 어떻게 보면 당연할 수 있겠지만 다른 프로그래밍 언어 경우 dog.printName()을 해도 Cat의 함수이기 때문에 Cat의 name이 나옴
 *
 * 이러한 동적 바인딩이 문제가 될 수 있는 이유
 * - undefined 가 출력
 * - 함수가 호출하는 주체가 없기 때문
 * - C#, Java 등 같은 경우는 this가 한번 결정나면 영원히 this가 바인딩
 * - JS에서는 정적으로 영원히 이루어지지 않음, 객체 주체가 어떤지에 따라 동기적으로 결정
 */
function printOnMonitor(printName) {
  console.log('모니터를 준비하고!, 전달된 콜백을 실행!');
  // 함수가 호출하는 주체가 없음 ex) cat.printName() or dog.printName()
  // 즉 this라는 정보를 잃어버려서 예상치 못한 에러가 발생
  printName();
}
printOnMonitor(cat.printName);
