// const apple = {
//   name: 'apple',
//   display: function () {
//     console.log(`${this.name} 🍎`);
//   },
// };

// const orange = {
//   name: 'orange',
//   display: function () {
//     console.log(`${this.name} 🍊`);
//   },
// };

// 생성자 함수(시작하는 함수명 첫번째 대문자)
function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
  // return this; // 생략 가능: 생섬자 함수에서는 자동으로 this가 리턴되도록 자바스크립트 엔진이 만들어줌
}

const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');
console.log(apple);
console.log(orange);
