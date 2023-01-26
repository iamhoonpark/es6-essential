// 카운터 만들기
// 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터를 만들기

class Counter {
  #value;

  constructor(startValue) {
    if (startValue < 0) {
      console.log('음수입니다. 어플리케이션을 종료합니다.');
      return;
    } else if (!isNaN(startValue)) {
      console.log('숫자만 입력 가능합니다. 어플리케이션을 종료합니다.');
      return;
    } else if (!startValue) {
      console.log('값을 찾을 수 없습니다. 어플리케이션을 종료합니다.');
      return;
    } else {
      this.#value = startValue;
    }
  }

  get value() {
    return this.#value;
  }

  increment = () => {
    this.#value++;
  };
}

const counter = new Counter();
counter.increment();
console.log(counter.value);
counter.increment();
console.log(counter.value);
counter.increment();
console.log(counter.value);
counter.increment();
console.log(counter.value);
counter.increment();
console.log(counter.value);
