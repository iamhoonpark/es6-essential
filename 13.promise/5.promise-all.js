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

// 1. Chaining : 바나나를 가져오는데 1초 + 사과를 가져오는데 3초으로 총 4초가 소요
// 바나나와 사과를 같이 가지고 오기
getBanana() //
  .then((banana) => getApple().then((apple) => [banana, apple]))
  .then(console.log);

// 2. Promise.all : 병렬적으로 한번에 모든 Promise들을 실행
// all : 모든 것들을 동일선상에서 다 같이 한번에 동시다발적으로 실행시킴. 바나나 1초 사과 3초으로 총 3초가 소요
Promise.all([getBanana(), getApple()]).then((result) =>
  console.log('all = ', result)
);

// 3. Promise.race 주어진 Promise 중에 제일 빨리 수행되는 것이 이김!
// 제일 빨리 수행된 결과값만 반환
Promise.race([getBanana(), getApple()]).then((fruit) =>
  console.log('race = ', fruit)
);

// 3. Promise.all에 error가 발생했을 경우
// error가 발생했는데 catch가 없어서 에러 발생
// catch구문을 제일 아래로 선언할 경우: [] 안에 모든게 성공해야 then으로 넘어가기 때문에 all then은 실행되지 않음
Promise.all([getBanana(), getApple(), getOrange()])
  .then((result) => console.log('all-error = ', result))
  .catch(console.log);

// 3. Promise.allSettled : 실패하든 성공하든 결과를 배열러 묶어서 반환
Promise.allSettled([getBanana(), getApple(), getOrange()])
  .then((result) => console.log('all-allSettled = ', result))
  .catch(console.log);
