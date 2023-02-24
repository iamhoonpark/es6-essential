/**
 * async, await
 * - Promise 객체의 장점은 callback함수를 사용하지 않고 깔끔하게 활용가능 그러나 then() 으로 연결되어 callback만큼이나 사용하기 때문에 코드를 이해하기 어려움
 * - 비동기적 코드를 동기적인 코드처럼 보이게, 절차적으로 작성할 수 있음
 */
function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('🍌'), 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('🍎'), 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error('no orange'));
}

// 1) asycn: 비동기함수 정의하여 암시적으로 Promise를 사용하여 결과를 반환
// 2) await: async 함수를 일시정지시키고 Promise객체가 await에 넘겨지면 결과를 기다렸다가 해당 값을 리턴
async function fetchFruits() {
  const banana = await getBanana();
  const apple = await getApple();
  return [banana, apple];
}
fetchFruits().then(console.log);

console.log('-----------------------------------------------------------');
function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
  return Promise.reject(new Error('can not find 🐓'));
}

async function makeFriedEgg() {
  let chicken;
  try {
    // getChicken을 시도해보고 성공한다면 할당
    chicken = await getChicken();
  } catch {
    // 에러가 잡혀서 실패한다면 다른 값을 할당
    chicken = '🐔';
  }
  const egg = await fetchEgg(chicken);
  return await fryEgg(egg);
}

makeFriedEgg().then(console.log);
