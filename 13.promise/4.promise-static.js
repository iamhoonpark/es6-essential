// static method resolve, reject

function fetchEgg(chicklen) {
  return Promise.resolve(`${chicklen} => 🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
  return Promise.reject(new Error('치킨을 가져올 수 없음'));
  // return Promise.resolve(`🌲 => 🐔`);
}

// catch의 위치에 따라 에러 처리 방식이 다름
getChicken()
  .catch((error) => '🐔')
  .then(fetchEgg)
  .then(fryEgg)
  .then(console.log);
//   .catch((error) => console.log(error.name));

/**
 * 축약: 전달하는 인자와 호출하는 인자가 동일하다면 에로우 펑션과 소괄호()를 쓸 필요 없이 함수명만 선언 가능
 * getChicken()
  .catch((error) => {
    console.log(error.name);
    return '🐔';
  })
  .then((chicken) => fetchEgg(chicken))
  .then((egg) => fryEgg(egg))
  .then((friedEgg) => console.log(friedEgg));
 */
