/**
 * 구조 분해 할당 Destructuring Assignment
 * - 데이터 뭉치(그룹화)를 쉽게 만들 수 있음
 */
const emoji = ['❤', '🧡', '💛', '💚', '💙', '💜'];
const [first, second, ...others] = emoji;
console.log(emoji);
console.log(first);
console.log(second);
console.log(others);

const point = [1, 2];
const [x, y, z = 0] = point;
console.log(x);
console.log(y);
console.log(z);
console.log(point);

function createEmoji() {
  return ['보라색', '💜'];
}
const array = createEmoji();
// 출력이 가능하나
console.log(array);
// 조금 더 의미있는 이름으로 받아오고 싶다면
const [title, heart] = createEmoji();
console.log(title, heart);

// 구조분해할당 Object
const jake = { name: 'Jake', age: 20, job: 's/w engineer' };
function display({ name, age, job }) {
  console.log(name, age, job);
}
display(jake);

const { name, age, job: opccupation, pet = 'Mumu' } = jake;
console.log(name, age, pet);
console.log(opccupation); // 다른 key로 변환해서 사용 가능
console.log(pet); // 새로운 key를 사용해서 다른 값을 지정

// Quiz
const prop = {
  name: 'Button',
  styles: {
    size: 20,
    color: 'black',
  },
};

function changeColor({ name, styles, styles: { size, color } }) {
  console.log(name, styles, size, color);
}
changeColor(prop);
