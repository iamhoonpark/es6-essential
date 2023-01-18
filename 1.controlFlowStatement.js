// 제어문 (Control Flow Statement)
// 코드의 흐름을 제어
// 1) 조건문, 2) 상항 조건 연산자, 3) 스위치문

// 1. 조건문 Conditional Statement
// if (조건) { }
// if (조건) { } else { }
// if (조건1) { } else if (조건2) { } else { }
let fruit = 'orange';
if (fruit === 'orange') {
  console.log('🍊');
} else if (fruit === 'apple') {
  console.log('🍎');
} else {
  console.log('✨');
}

// 2. 삼항 조건 연산자(Ternary Operator)
// 조건식 ? 참인경우 : 거짓인경우
let emoji = fruit === 'apple' ? '🍎' : '🍊';
console.log(emoji);

// Quiz
let num = 2;
// num의 숫자가 짝수이면 👍, 홀수라면 👎

let result = num % 2 === 0 ? '👍' : '👎';
console.log(result);

// 3. 스위치문(Switch)
// 정해진 범위 안의 값에 대해 특정한 일을 해야 하는 경우
let day = 6; // 0: 월요일... 6: 일요일
switch (day) {
  case 0:
    console.log('월요일');
    break; // ✅ case의 결과가 맞다면 그 다음 케이스를 확인하지 않도록 break; 설정
  case 1:
    console.log('화요일');
    break;
  case 2:
    console.log('수요일');
    break;
  case 3:
    console.log('목요일');
    break;
  case 4:
    console.log('금요일');
    break;
  case 5:
    console.log('토요일');
    break;
  case 6:
    console.log('일요일');
    break;
}

// 상황에 따라 break 를 사용하지 않아야 할 때
let condition = 'okay'; // okay, good -> 좋음!, bad -> 나쁨!
let text;
switch (condition) {
  case 'okay':
  case 'good':
    text = '좋음';
    break;
  case 'bad':
    text = '나쁨';
    break;
  default: // case에서 처리할 수 없는 것을 처리(if문에서 else 역할)
    console.log('해당하는 요일이 없음');
}
console.log(text);
