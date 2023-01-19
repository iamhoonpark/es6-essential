// 주어진 숫자만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야 함
// 1) 5, 순회하는 숫자를 다 출력하고 싶음
// 2) 5. 순회하는 숫자의 두배값을 다 출력하고 싶음
// function iterate(max, action)

const log = (num) => num;
const doubleAndLog = (num) => num * 2;

function iterate(max, action) {
  for (let index = 0; index <= max; index++) {
    console.log(action(index));
  }
}

iterate(4, log); // == iterate(4, (num) => num);
iterate(4, doubleAndLog); // == iterate(4, (num) => num *2);

// 실제 callback 사용예(setTimeout host API)
setTimeout(() => {
  console.log('😃');
}, 5000);
