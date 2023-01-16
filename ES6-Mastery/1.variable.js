/**
 * 1. 컴퓨터를 구성하는 요소 3가지
 * - 하드디스크: 파일, 어플리케이션 등 저장장치
 * - CPU: 저장장치에서 데이터를 읽어와서 연산하고 계산
 * - 메모리: 하드디스크에서 읽고 쓰는데 시간이 오래걸리기 때문에 데이터를 임시적으로 올려두는 곳
 *           빠르게 읽고 쓰기 위한 임시저장장치 메모리
 * 
 * 2. 메모리
 * - 하드디스크에 있는 파일을 열면 CPU가 계산하여 메모리와 어플리케이션을 열어둠
 * - 유저가 어플리케이션을 통해 수정작업을할 경우 메모리에 이를 임시적으로 저장
 * - 유저가 어플리케이션을 저장하거나 종료할 때, 이를 하드디스크에 저장
 * - 즉, 무언가를 처리할 때는 메모리 상에 보관하고 읽고 씀
 * - 각각의 메모리셀은 1byte(= 8bit, 1bit는 0또는 1을 담을 수 있음)
 * - 어플리케이션 마다 필요한 메모리를 할당받아 사용함
 * 
 * 3. 메모리 구분
 * - 어플리케이션이 메모리에 올라왔을 때, code, data, stack, heap 으로 구성
 *  ① code: 개발자가 작성한 코드
 *  ② data: 어플리케이션에서 전반적으로 필요한 변수, 데이터들
 *  ③ stack: 함수를 호출하는 순서, 즉 실행순서를 보관
 *  ④ heap: 어플리케이션에서 여러가지 데이터를 묶어놓은 타입을 보관(=객체)
 * - 메모리는 한 칸(셀)마다 주소가 존재(ex: 0x00006...)
 * ※ 참고영상: 비트와 바이트 - https://www.youtube.com/watch?v=5IRFJt1C5o4
 * 
 *  4. 어플리케이션을 시작하면 총 세가지의 일이 동작
 * - 입력(input): 유저의 데이터를 입력받음
 * - 처리(process): JS
 * - 출력(output): 모니터에 보여주는 것, 데이터를 파일 시스템(쿠키, 스토리지 등)에 저장하는 것, 네트워크 통신을 통해 서버에 보내는 것
 * 
 */

/**
 * 1. 변수(Variables)
 * - 값을 저장하는 공간
 * - 자료를 저장할 수 있는 이름이 주어진 기억장소
 * - let, const
 * - 변수를 선언할 때마다 변수명이 메모리셀 주소를 가르킴
 * - 또는 식별자(identifier) 라고도 함
 * 
 * 2. 선언과 할당
 * - 변수 선언(Variable declaration) : let a;
 * - 변수 선언과 값의 할당(Variable declaration and assignmnet) : let a = 0;
 * - 값의 재할당(value reassigning) : a = 1;
 *
 * 3. 변수 규칙
 * - 라틴문자(0-9, a-z, A-Z), _
 * - 대소문자를 구분함
 * - 추천: camelCase
 * - 한국어 ❌
 * - 예약어 ❌
 * - 숫자로 시작 ❌
 * - 특수문자, 이모지 ❌ (_, $ 두가지는 예외)
 * - 여러개의 변수를 1,2,3 등 숫자로 구분 ❌
 * 
 * ※ 참고문서: 변수 - https://developer.mozilla.org/ko/docs/Learn/JavaScript/First_steps/Variables
 *             예약어 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords
 */

let a = 0; // 변수 선언과 값의 할당
console.log(a);

a = 1; // 값의 재할당
console.log(a);

let b; // 변수 선언
console.log(b); // undefined = 아직 아무것도 정의되어 있지 않은 상태

b = 2; // 재할당
console.log(b);                                                                                             