// https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Working_with_Objects

const obj = {
  name: 'Jake',
  age: 20,
};

// 코딩하는 시점에, 정적으로 접근이 확정됨
obj.age;
obj.name;

// 동적으로 속성에 접근하고 싶을 때 대괄호 표기법 사용
function getValue(obj, key) {
  return obj[key];
}
console.log(getValue(obj, 'age'));

function addKey(obj, key, value) {
  obj[key] = value;
}
addKey(obj, 'hello', '🖐');
console.log(obj);

function deleteKey(obj, key) {
  delete obj[key];
}
deleteKey(obj, 'hello');
console.log(obj);
