/**
 * Symbol
 * - 🔑유일한 키를 생성할 수 있음
 * - Map 에서 유용하게 사용할 수 있음
 *  · 내 클래스 내부에서 또는 내 모듈 내부에서 생성된 심볼을 이용해서만 map에 있는 값을 읽어와야 한다면 보안을 조금 더 높이고 싶을 때
 * - 조금 더 유일한 키를 만들어야 할 때, 문자열 보다 Symbol을 이용해서 유니크함을 보장
 */
const map = new Map();
const key1 = 'key';
const key2 = 'key';
map.set(key1, 'Hello');
// 다른 변수를 만들어두긴 했지만, 문자열이 똑같은 값이어서 동일한 키로 간주
// 즉, 원시타입이기 때문에 값이 똑같아서 동일한 값을 가져옴
console.log(map.get(key2));
console.log(key1 === key2);

// 심볼을 사용하면 다른 결과를 얻을 수 있음
// Symbol은 new 연산자를 사용하지 않고 원하는 키 이름을 지정하면 됨
const map2 = new Map();
const key3 = Symbol('key');
const key4 = Symbol('key');
map2.set(key2, 'Hello');
// 서로 다른 값이 생성되되는 Symbol
// 이름은 똑같아도 서로 다른 유일한 키를 만들 때
console.log(map2.get(key4));
console.log(key3 === key4);

// 만약 문자열처럼 이름이 동일하다면
// 동일한 이름으로 하나의 키를 사용하고 싶다면, Symbol.for
// 전역으로 심벌을 관리하는 레지스트리, 이 이름의 심볼을 만들고 계속 재사용함
// 전역 심벌 레지스트리(Global Symbol Registry)
const k1 = Symbol.for('key');
const k2 = Symbol.for('key');
console.log(k1 === k2);

// Symbol 로 만들어진 Key 이름을 출력하는 함수
console.log(Symbol.keyFor(k1));

// Error 발생 : 심벌 레지스트리에서 만든 key가 아닌 문자열
// 즉 Symbol,keyFor() 함수는 전역 심벌 레지스트리에서 관리
// console.log(Symbol.keyFor(key1));

const obj = { [k1]: 'Hello', [Symbol('key')]: 1 };
console.log(obj);
console.log(obj[k1]);
console.log(obj[Symbol('key')]); // obj에 있는 Symbol 키와 log Symbol 키는 전혀 다른 값에 따라 undefined 출력

// 결론: 문자열이 똑같아도 유니크한 심볼을 만들고 싶을 때 Symbol 사용
// 결론2: 동일한 이름으로 하나의 유니크한 키를 사용하고 싶다면 Symbol.for
