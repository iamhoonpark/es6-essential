// 1. 매개변수의 기본값은 무조건 undefined
function test(arg1, arg2) {
  console.log(arg1, arg2);
}
test();

// 2. 만약 값을 추가로 전달한다면 값이 무시됨
test(0, 1, 2);

/**
 * 3. 함수는 객체이기 때문에 함수 내부에서 쓸 수 있는 유용한 property 들이 존재
 * - 매개변수의 정보는 함수 내부에서 접근이 가능한 Arguments 객체에 저장됨
 */
function test2(arg1, arg2) {
  // 전달된 인자에 대한 정보를 가지고 있는 Aruments 내장객체
  console.log(arguments);
  console.log(arguments[0], arguments[1], arguments[2]);
}
test2(1, 2, 3);

/**
 * 4. 만약 값을 전달하지 매개변수로 않을 경우 기본 값을 정할 수 있음
 * - 매개변수 기본값(Default Parameters) 설정방법: arg = 1, arg2 = 2
 * - 다만 undefined 일 경우에만 설정이 가능하며, 외부에서 값을 보낼 경우 외부값을 그대로 사용
 */
function test3(arg1 = 1, arg2 = 2) {
  console.log(arg1);
  console.log(arg2);
  console.log(arguments);
}
test3();
test3(3, 5); // 누군가 값을 전달하면 기본값은 무시

/**
 * 5. Rest 매개변수(Rest Parameters)
 * - 얼마나 많은 개수의 인자가 전달되는지 모를 때, 모든 것을 배열로 받고 싶을 때 사용
 */
function sum(a, b, ...numbers) {
  console.log(a);
  console.log(b);
  console.log(numbers);
}
sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
