function loop() {
  const array = [];
  /**
   * 클로저에서 var와 let차이점
   * - var는 블록스코프가 없고 함수 스코프만 가지고 있음
   * - for문 안에서 얼마나 많은 함수를 생성하는지 상관없이
   * - 내부 i는 공통된 var i 변수를 가르키기 때문에 최종적으로 증가한 정보 '5'에만 접근
   * - 아래 코드와 똑같은 형태임
   * ex)
   * const array = [];
   * var i;
   * for (i = 0; i < 5; i++) { … }
   */
  for (let i = 0; i < 5; i++) {
    array.push(function () {
      console.log(i);
    });
  }
  return array;
}

const array = loop();
// 배열에 담긴 함수들을 호출
array.forEach((func) => func());
