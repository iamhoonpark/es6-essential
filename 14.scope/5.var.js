/**
 * var의 특징 💩💩💩💩💩💩💩💩💩💩💩💩💩
 * - 일반 코딩 방식과 어긋나서 개발하면서도 멘붕옴
 * - 코드의 가독성과 유지보수성에 좋지 않음
 */

// 1. 변수 선언하는 키워드 없이 선언 & 할당이 가능
// 선언인지, 재할당인지 구분하기 어려움
something = '💩';
console.log(something);

// 2. 중복 선언이 가능하기에 실수를 방지하지 못함
var poo = '💩';
var poo = '💩';
console.log(poo);

// 3. 블록 리벨 스코프 안됨: 외부에서 내부 참조가 가능함
// 지역변수가 글로벌변수와 동일한 레벨이 됨
var apple = '사과';
{
  var apple = '🍎';
  {
    var apple = '🍏';
  }
}
console.log(apple);

// 4. 함수 레벨 스코프만 지원 됨
function example() {
  var dog = '강아지';
}
console.log(dog); // 이거는 정상적으로 에러 발생
