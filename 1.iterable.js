/**
 * 이터레이션
 * - 이터레이션을 자바스크립트에서는 이터레이션(Iteration, 반복·순회) 프로토콜(Iteration Protocol, 규격·약속·인터페이스) 이라고 칭함
 *   = '순회가 가능하다' 라고도 말할 수 있음
 *
 * 1) 이터레이션 프로토콜을 따르는 객체
 * - for...of, spread으로 순회가 가능한 연산자
 *
 * 2) 이터레이션 프로토콜을 따르는 자료구조(데이터타입)
 * - Array, String, Map, Set
 *
 * 3) Iterable 프로토콜
 * - 이터레이션 프로토콜을 따르기 위해서는 총 두가지 프로토콜을 따라야 함
 * 3-1) 첫번째로 이터러블 프로토콜을 따라야 함 > Symbol.iterator() 함수를 호출하면 Iteraotor 프로토콜(반복자)을 따르는 객체를 리턴해야 함
 * 3-2) 두번째로 Iteraotor 프로토콜(반복자)은 next()라는 함수가 있어서 다음 값을 계속 리턴하도록 만들면 됨
 * - object
    {
        [Symbol.iterator](): "Iteraotor 프로토콜(반복자)"
                             {
                                next(): 다음값
                             }
    }
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
 */
