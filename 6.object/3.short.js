// kay, value 명이 서로 똑같다면 축약이 가능하다

const x = 0;
const y = 0;

// const coordinate = { x: x, y: y };
const coordinate = { x, y };

function makeObj(name, age) {
  // return {
  //   name: name,
  //   age: age,
  // };
  return {
    name,
    age,
  };
}
