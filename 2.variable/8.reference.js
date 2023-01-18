// 원시타입은 값이 복사되어 전달됨
// 독립적
let a = 1;
let b = a; // 1
b = 2;
console.log(a);
console.log(b);

// 객체타입은 참조값(메모리주소, 레퍼런스)가 복사되어 전달됨
let apple = {   // 0x1234
    name: '사과'
}
let orange = apple; // 0x1234 메모리주소가 복사되어 orange로 전달됨
console.log(apple);
console.log(orange); // 즉, 동일한 오브젝트를 가르키는 동일한 주소를 가지게 됨

orange.name = '오렌지';
console.log(apple);
console.log(orange); // 따라서 동일한 오브젝트를 가르키고 있어서 한 곳에서만 바꿔도 둘 다 업데이트 됨