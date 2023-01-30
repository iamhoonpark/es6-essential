/**
 * Date 객체 기준은 UTC(협정 세계시간, 1970년 1월 1일 00시 00분 00초 UTC 자정과의 시간 차이를 밀리초 단위로 표기함)
 * 그래서 공통된 세계 시간 기준으로 표기가 됨
 */

console.log(new Date()); // 인자 없이 Date 객체를 만들 경우 현재 시간이 설정

// 현재 시간을 지정하고 싶다면
console.log(new Date('Jun 5, 2022'));
console.log(new Date('2022-12-17T03:24:00'));

console.log(Date.now());
// 날짜와 시간 문자열을 구분하여 UTC를 기준으로 경과한 밀리초를 반환
console.log(Date.parse('2022-12-17T03:24:00'));

// 시간을 내가 원하는 대로 지정하는 방법
const now = new Date();
now.setFullYear(2023);
now.setMonth(10); // 0부터 시작(0이 1월)
console.log(now.getFullYear());
console.log(now.getDate()); // 0부터 index가 시작(0: 1)
console.log(now.getDay()); // 0:일, 1:월, 2:화 … 6:토요일
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getTime());
console.log(now);

// 전체적인 날짜와 시간까지 문자열로 출력
console.log(now.toString());

// 날짜를 문자열로
console.log(now.toDateString());

// 시간을 문자열로
console.log(now.toTimeString());

// 시간을 날짜를 표현하는 방식을 ISO 8601 형식으로
console.log(now.toISOString());

// 국가별 출력
console.log(now.toLocaleString('en-US'));
console.log(now.toLocaleString('ko-KR'));
