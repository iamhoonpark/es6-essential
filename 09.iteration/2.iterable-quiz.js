/**
 * Q. 0부터 10이하까지 숫자의 2배를 순회하는 이터레이터(반복자) 만들기
 * - 0, 2, 4, 6, 8, 10
 * - 순회가 가능하게 하려면 일반 객체에 이터레이터 함수를 호출했을 때 반복자를 반환하면 됨
 * - Symbol.iterator(): Iterator{ next(): {value, done}}
 */
const multiple = {
  [Symbol.iterator]() {
    const max = 10;
    let num = 0;
    return {
      next() {
        return {
          // * 연산자가 할당 된 뒤, num의 값이 증가할 수 있도록 ++ 후위연산자 사용
          value: num++ * 2,
          done: num > max,
        };
      },
    };
  },
};

for (const num of multiple) {
  console.log(num);
}
