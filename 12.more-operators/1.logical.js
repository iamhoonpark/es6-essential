// 논리연산자 Logical Operator
// && 그리고
// || 또는
// 단축평가: short-circuit evaluation
const obj1 = { name: '🐶' };
const obj2 = { name: '😺', owner: 'Jake' };

// if문 조건식에 논리연산자를 사용할 경우 각각의 조건들이 boolean 값으로 변환되면서 평가가 됨
if (obj1 && obj2) {
  console.log('둘다 true!');
}

// 조건문 안에서는 모든 조건들이 평가가 됨
// 조건문 밖에서 쓰게 되면 평가가 단축된다 = 단축평가
let result = obj1 && obj2;

// boolean 값으로 변환되는 것이 아니라 object 가 출력
// 즉, obj1이 true이기 때문에 obj2는 t/f로 평가하지 않고 단축평가하는 대신에 true니까 뒤에 있는 건 result에 할당
console.log(result);

// OR 연산자의 단축평가 경우, obj1이 t이니까 뒤에 내용은 확인하지 않아도 되므로 앞의 obj1이 할당됨
result = obj1 || obj2;
console.log(result);

// 결론: t/f 로 평가되지 않고
// AND 연산자 단축평가일 경우 하나가 t이면 뒤에 있는 값이 할당
// OR 연산자 단축평가일 경우 하나가 t일 경우 해당 값이 할당

// 활용예
// 조건이 truthy일 때 && 무언가를 해야 할 경우
// 조건이 falshy일 때 || 무언가를 해야 할 경우
function changeOwner(animal) {
  if (!animal.owner) {
    throw new Error('주인이 없어서 앱이 crash됨');
  }
  animal.owner = '바뀐주인! Hoon';
}
function makeNewOwner(animal) {
  if (animal.owner) {
    throw new Error('주인이 있어서 앱이 crash됨');
  }
  animal.owner = '새로운주인!';
}

console.log('----------------------------------------------------');
// owner가 있으면 changeOwner를 호출
obj1.owner && changeOwner(obj1);
obj2.owner && changeOwner(obj2);
console.log(obj1); // 주인이 없었기 때문에(false) 뒤에건 실행이 안됨
console.log(obj2); // 주인이 있기 때문에(true) 뒤에게 실행되어 주인이 바뀌었음

console.log('----------------------------------------------------');
// owner가 있으면 changeOwner를 호출
obj1.owner || makeNewOwner(obj1);
obj2.owner || makeNewOwner(obj2);
console.log(obj1); // 주인이 없었기 때문에(false) 뒤에걸 실행해서 새로운 주인을 할당
console.log(obj2); // 주인이 있기 때문에(true) 뒤에건 실행하지 않음

// 이렇게 단축평가를 하지 않는 경우에는 if~else if~else 로 길게 이어나가야 함

console.log('----------------------------------------------------');
// AND연산자 활용: null 또는 undefined인 경우를 확인할 때
let item; // = { price: 1 };
// item이 있으면 item의 price에 접근
const price = item && item.price;
// 만약 const price = item; 일 경우 item이 undefined인데 undefined에 price를 접근하기 때문에 에러가 발생
// 즉, null일 수 있는 변수에 그 안에 있는 property에 접근하면 어플리케이션이 죽어버리기 때문에 단축평가를 씀
console.log(price);

// OR연산자 활용: 기본값을 설정
function print(message) {
  // 인자에 아무것도 없다면(false) 기본값을 세팅
  const text = message || 'Hello';
  console.log(text);
  /**
   * 주의! 더 심플한 Default Paramter를 print(message = 'Hello') 사용하지 않는 이유
   * 전달하지 않거나, undefined인 경우에만 설정이 가능함(인자로 아무것도 전달하지 않거나 undefined를 전달할 경우만)
   * 즉, null과 0은 undefined가 아니므로 디폴트 파라미터로 설정이 되지 않아서 null과 0은 그대로 출력이됨
   * 하지만 OR연산자 같은 경우에는 값이 Falshy한 경우 모두 설정됨(0, -0, null, undefined, '')
   * ※ OR연산자 단축평가 경우 모둔 Falshy한 값에 대해 적용되기 때문에 0과 ''텅 빈 문자열에 대해서도 falshy로 간주해서 할 것인지 고려해야 함
   */
}
print();
