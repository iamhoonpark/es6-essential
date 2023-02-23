/**
 * 1. 비동기
 * - 자바스크립트 언어 자체는 동기적(순차적)으로 진행
 * - 자바스크립트 런타입 환경 즉, 호스트 환경에서 제공해주는 다양한 API(웹·노드)들은 대부분 비동기적으로 실행
 *   싱글쓰레드가 아닌 멀티쓰레드 환경에서 동작하기 때문에 다양한 일들을 동시다발적으로 처리할 수 있음
 * - 그래서 호스트환경의 API들의 도움을 받아서 다양한 일을 수행할 수 있음
 *
 * 2. 동작로직
 * 1) Call Stack: execute() 함수를 올려놓고 실행
 * 2) 브라우저에게 setTimeout()에 callback을 함께 전달
 * 3) 3초 후 브라우저에게 전달한 callback함수를 Task Queue라는 곳에 전달
 * 4) 자바스크립트 환경에 있는 Event Loop가 Call Stack과 Task Queue를 감시하면서 Call Stack이 비어있다면 callback을 Call Stack으로 가져와서
 * 5) Call Stack에 쌓여있는 callback을 실행
 */

function execute() {
  console.log('1');
  setTimeout(() => {
    console.log('2');
  }, 3000);
  console.log('3');
}

execute();

// Quiz. 주어진 seconds(초)가 지나면 callback함수를 호출함
// 단, seconds가 0보다 작으면 에러를 발생
function runInDelay(callback, seconds) {
  if (!callback) {
    throw new Error('callback 설정을 확인해주세요.');
  }
  if (!seconds || seconds < 0) {
    throw new Error('시간초 설정을 확인해주세요.');
  }
  setTimeout(callback, seconds * 1000);
}

try {
  runInDelay(() => console.log('출력완료'), -1);
} catch (error) {}
