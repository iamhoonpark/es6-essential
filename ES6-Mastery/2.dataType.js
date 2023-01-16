/**
 * 데이터 타입 Data Type
 * 
 * 1. 원시(Primitive): 단일데이터
 * - number
 *  · BigInt
 * - string
 * - boolean
 * - null
 * - undefined
 * - Symbol
 * 
 * 2. 객체(object): 복합데이터
 * - 상태(변수), 행동(함수)를 묶어둘 수 있는 것
 *  · 객체는 key와 value로 이루어지며 value에는 원시, 또다른 객체를 담을 수 있다
 * - object
 *  · array
 * - function
 * 
 * 2-1) 복합데이터의 메모리
 * - 원시타입은 메모리의 Data,와 Stack 영역에 들어감
 * - 객체는 크기가 정해져 있지 않아서 메모리셀에 들어갈 수가 없음
 * - 따라서 데이터 사이즈가 정해져 있지 않고 동적으로 늘었다 줄어나는 Heap 메모리 영역에 보관
 * - 여러 개의 메모리셀에 걸쳐서 object 가 할당이 됨
 * 
 * 2-2) 값과 참조의 차이
 * - 원시타입은 Copy By Value
 * - 객체타입은 Copy By Reference
 * - 4.9 강의 참조
 */
let apple = {
    name: 'apple',
    color: 'red',
    display: '🍎'
}