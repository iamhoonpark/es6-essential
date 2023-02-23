/**
 * Promise(object)
 * - 비동기적으로 수행하고 결과값을 반환하는 오브젝트
 *
 * 1. Promise의 상태
 *  1) pending: 일이 끝나지 않은 상태
 *  2) fulfilled: 성공적으로 끝난 상태
 *  3) rejected: 실패한 상태
 */

function runInDelay(seconds) {
  // then을 호출할 때 사용할 resolve
  // catch를 호출할 때 사용할 reject
  return new Promise((resolve, reject) => {
    // 비동기적인 일을 사용할 구문 작성 영역
    if (!seconds || seconds < 0) {
      reject(new Error('시간초설정다시하세요.'));
    }
    setTimeout(resolve, seconds * 1000);
  });
}

// 체이닝을 통해서 아래 주석 구문을 깔끔하게 할 수 있음
runInDelay(2)
  .then(() => console.log('타이머 완료!'))
  .catch(console.error) // 전달하는 인자와 호출하는 인자가 같으면 생략가능 (error) => console.error(error)
  .finally(() => console.log('끝났다.'));

// try {
//   runInDelay(() => {
//     console.log('타이머 완료!');
//   }, 1);
// } catch (error) {}
