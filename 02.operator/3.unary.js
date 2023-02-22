// 단항연산자 (Unary Operators)
// + (양): 음을 양으로 바꿀 때
// - (음): 양을 음으로 바꿀 때
// ! (부정): T를 F, F를 T로 바꿀 때
// !!: 한번 더 부정함 즉, 값을 boolean 타입으로 변환해줌
let a = 5;
a = -a; //-a = -1 * 5
console.log(a);

a = -a;
console.log(a); // 한번 더 음수를 곱하면 양수

a = -a;
a = +a;
console.log(a); // 음수 * 양수 = 음수

let boolean = true;
console.log(boolean);
console.log(!boolean);
console.log(!!boolean); // 한번 더 부정 즉, 원래의 값을 표시 또는 boolean 타입으로 값을 변경해줌

// +연산자: 숫자가 아닌 타입들을 숫자로 변환하면 어떤값이 나오는지 확인할 수 있음
console.clear();
console.log(+false); // 0
console.log(+null); // 0
console.log(+''); // 0
console.log(+true); // 1
console.log(+'text'); // NaN
console.log(+undefined); // NaN
