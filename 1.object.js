/**
 * 1. 데이터 타입(Data Type)
 *  1) 단일데이터 원시(primitive) : number, string, boolean, null, undefined, Symbol
 *  2) 복합데이터 객체(object) : object(+array), function
 *  - 함수도 여러가지 데이터가(arguments 등) 들어있기 때문에 객체에 포함
 *
 * 2. 객체(object)
 * - 밀접하게 관련있는 속성와 행동을 객체로 묶음
 * - 속성 = 데이터 = 프로퍼티
 * - 행동 = 함수 = 메서드
 *
 * 3. 객체를 생성하는 방법✅
 * 1) { key: value } : Object literal
 * 2) new Object() : Object Class를 이용
 * 3) Object.create() : Object 클래스 내부 함수
 *
 * 4. 속성과 값
 * - key: 문자, 숫자, 문자열, 심볼
 * - value: 원시값, 객체(함수)
 */

let apple = {
  name: 'apple',
  hello: '🖐',
  'hello-bye': '🖐', // -> 보통 이런 경우 helloBye 라고 함
  0: 1,
  ['hello-bye2']: '🖐',
};

// 속성, 데이터에 접근하기 위해서는
console.log(apple[0]);
console.log(apple.name); // 마침표 표기법(Dot notation)
console.log(apple.hello);
console.log(apple['hello-bye']); // 대괄호 표기법(Bracket notation)
console.log(apple['hello-bye2']);

// 속성 추가
apple.emoji = '💕';
console.log(apple.emoji);
console.log(apple['emoji']);

// 속성 삭제
delete apple.emoji; // 또는 delete apple['emoji'];
console.log(apple);
