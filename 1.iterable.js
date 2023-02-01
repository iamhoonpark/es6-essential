/**
 * 1. 이터레이션(Iteration, 반복·순회)
 *
 *  1) 이터레이션 프로토콜(Iteration Protocol)
 *  - 자바스크립트에서는 이터레이션 프로토콜 이라고 함(프로토콜: 규격, 약속, 인터페이스)
 *  - 즉, 이터레이션 프로토콜을 따른다는 것은 '순회가 가능하다' 라고도 말할 수 있음
 *  - 자바스크립트에서 이터레이션 프로토콜을 따르는 객체는 for...of, spread 으로 순회가 가능한 연사자
 *
 *  2) 이터레이션 프로토콜(for..of, sprea)을 따르는 기본 자바스크립트 자료구조
 *  - 즉, 이터레이션 프로토콜이라는 것은 순회가 가능하기 위해서 따라야하는 규칙, 인터페이스
 *  - 이 규격을 따르면 for...of, spread 연산자에서 사용이 가능하며, 이 연산자를 통해서 무언가를 순회한다는 말
 *  - 이것이 가능한 기본적인 데이터 타입, 자료구조는 Array, String, Map, Set
 *
 *  3) 해당 프로토콜을 준수한다는 것, 따른다는 것이란?
 *  - 순회가 가능한 객체가 되려면 첫번째로 Iterable 프로토콜을 따라야 함(다른 언어에서는 Iterable Interface 라고 함)
 *  - 그 어떤 객체 안에서도 Symbol.iterator함수를 호출 했을 때 Iterable 프로토콜을 따르는 객체를 반환만 하면 이 객체는 순회가 가능한 객체
 *
 * {
 *
 *      [Symbol.iterator]():
 *
 * }
 *
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
 */
