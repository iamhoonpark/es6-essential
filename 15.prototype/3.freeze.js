/**
 * 객체 불변성
 */

const jake = { name: '제이크' };
const dog = { name: '흰둥이', emoji: '🐶', owner: jake };

// 1. 동결 Object.freeze()
// 추가·삭제·쓰기·속성 재정의(defineProperties)❌
Object.freeze(dog);
dog.name = '멍멍';
dog.age = 4;
console.log(dog);
delete dog.name;
// 얕은동결: 참조되어있는 모든 객체를 동결시키지 않고 얕은 레벨만 동결
jake.name = 'JAKE';
console.log(dog);
// 동결확인
console.log(Object.isFrozen(dog));
console.log('─────────────────────────────────────────────────────────────');

// 2. 밀봉 Object.seal()
// 값 수정⭕, 추가·삭제·속성 재정의(defineProperties)❌
const cat = { ...dog }; // = Object.assign(cat, dog);
Object.seal(cat);
console.log(cat);
cat.name = '무무';
console.log(cat);
delete cat.emoji;
console.log(cat);
// 밀봉확인
console.log(Object.isSealed(cat));
console.log('─────────────────────────────────────────────────────────────');

// 3. 확장 금지 preventExtenstions
// 추가만 안됨❌
const tiger = { name: '어흥' };
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger));
tiger.name = '어흐으으으응';
console.log(tiger);
delete tiger.name;
console.log(tiger);
tiger.age = 1;
console.log(tiger);
