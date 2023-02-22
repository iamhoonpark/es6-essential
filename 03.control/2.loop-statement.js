/**
 * 반복문 (Loop Statement)
 * 반복문에서 흐름을 제어
 * 1) continue: 해당 문을 무시하고 다음 문을 진행
 * 2) break: 반복문을 특정한 조건에 그만두고 싶을 때
 */

/**
 * 1. for(변수선언문, 초기식; 조건식; 증감식) { }
 * - 실행순서:
 * 1) 변수선언문
 * 2) 조건식의 값이 참이면 { } 코드블럭을 수행
 * 3) 증감식을 수행
 * 4) 조건식이 거짓이 될 때까지 2번과 3번을 반복
 */

/**
 * 2. while(조건) { }
 * 조건이 false가 될때까지 {} 코드블럭을 반복 실행
 */
let num = 5;
while (num >= 0) {
  console.log(num);
  num--;
}

let isActive = false;
let i = 0;
while (isActive) {
  console.log('아직 살아있다👌');
  if (i === 1000) {
    break;
  }
  i++;
}

/**
 * 3. do { } while (조건);
 * - while(조건)문과 차이점: 조건이 맞을 때만 코드블럭을 시작
 * - do~while은 일단 먼저 do { } 코드를 실행 후 조건을 while(조건) 통해 검사
 */
do {
  // 한번은 꼭 실행해야할 경우 do~while 을 사용하는 것이 적합
  console.log("I'm still alive😃");
} while (isActive);
