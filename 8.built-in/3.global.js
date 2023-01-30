/**
 * 글로벌 객체
 * - (브라우저, 노드 등) 전역적으로 사용할 수 있는 자바스크립트 정보
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
 */

// 1. Value Properties
console.log(globalThis); //브라우저에서 this는 globalThis과 동일, 노드에서 this는 현재 모듈에 대한 정보
console.log(Infinity);
console.log(NaN);
console.log(undefined);

// 2. Function Properties
eval('const num = 2; console.log(num)'); // 자바스크립트를 평가
console.log(isFinite(1)); // 숫자가 유한한지 유한하지 않은지 확인
console.log(isFinite(Infinity));

console.log(parseFloat('12.43')); // 문자열 안에 숫자를 숫자로 변환
console.log(parseInt('12.43')); // 문자열 안에 숫자를 정수로 변환
console.log(parseInt('12')); // 문자열 안에 숫자를 정수로 변환

/**
 * encode 함수
 * 1) URL(URI, Uniform Resource Identifier의 하위 개념)
 * - 어떤 리소스를 나타낼 수 있는 단 하나의 교유한 주소나 ID
 * - 웹사이트를 나타낼 수 있는 공유한 것 = 주소(URL)
 * 2) 인코드
 * - 아스키 문자로만 구성되어야 함
 * - 그래서 한글이나 특수문자를 주소에 사용한다면 이스케이프 처리를 해야 함
 * - 이때 유용하게 사용할 수 있는 것이 인코드 함수
 */

const URL = 'https://드림코딩.com';
const encoded = encodeURI(URL);
console.log(encoded);

const decoded = decodeURI(encoded);
console.log(decoded);

// 전체 URL이 아니라 부분적인 것을 사용할 때는 Component 이용
const part = '드림코딩.com';
const encodedpart = encodeURIComponent(part);
console.log(encodedpart);
