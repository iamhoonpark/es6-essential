function Cat(name) {
  this.name = name;
  // 방법2) 함수 표현식이 아닌 화살표함수(애로우펑션) 사용
  // arrow 함수는 렉시컬 환경에서의 this를 기억
  // 에로우 함수에서 만드는 순간 this를 참조
  this.printName = () => {
    console.log(`고양이 이름은 ${this.name} 이라옹~`);
  };
  // 방법1) bind 함수를 이용해서 수동적으로 바인딩
  // 주어진 객체와 (인자로 전달된)함수를 가지고 새롭게 binding한 함수를 만듬
  // 즉, 앞으로 만들어질 인스턴스(this)와 printName을 새롭게 bind
  // 더 이상 동적으로 결정되지 않음
  // this.printName = this.printName.bind(this);
}

function Dog(name) {
  this.name = name;
  this.printName = function () {
    console.log(`강아지 이름은 ${this.name} 이라월!`);
  };
}

const cat = new Cat('냐옹!');
const dog = new Dog('멍멍!');

dog.printName = cat.printName;

function printOnMonitor(printName) {
  console.log('모니터를 준비하고!, 전달된 콜백을 실행!');
  // 함수가 호출하는 주체가 없음 ex) cat.printName() or dog.printName()
  // 즉 this라는 정보를 잃어버려서 예상치 못한 에러가 발생
  printName();
}
// printName함수를 어디에 전달하든지 상관없이 누가 호출하냐에 상관없이 동일하게 출력(영원히 바인딩)
printOnMonitor(cat.printName);
printOnMonitor(dog.printName);
