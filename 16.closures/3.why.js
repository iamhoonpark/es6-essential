/**
 * 클로저는 내부 정보를 은닉하고 공개함수(public, 외부)를 통한 데이터 조작을 위해 사용
 * 즉, 캡슐화와 정보은닉을 위해서 쓰임
 * 클래스에서 private 필드를 사용하는 것과 똑같은 효과를 누리기 위함
 * (최신JS에서는 class에서 충분히 private을 사용가능 그러나 이전 브라우저·JS 버전은 클래스가 없었기 때문에 클로저 활용)
 *
 * 사용예제
 * - 카운트를 세는 카운터 함수의 변수 counter는 외부에서 직접적으로 접근하고 조작하면 안됨
 * - counter라는 정보를 은닉(=렉시컬 환경에 숨김)하고
 * - 외부에서는 조작(증가)만할 수 있는 함수
 */
function makeCounter() {
  let count = 0;
  function increase() {
    count++;
    console.log(count);
  }
  return increase;
}

const increase = makeCounter();
increase();
increase();
increase();
increase();
increase();
console.log('─────────────────────────────────────────────');

// 최신JS, TS에서는 클로저를 사용하지 않고 클래스를 사용
class Counter {
  #count = 0;
  increase() {
    this.#count++;
    console.log(this.#count);
  }
}
const counter = new Counter();
counter.increase();
counter.increase();
counter.increase();
counter.increase();
counter.increase();
