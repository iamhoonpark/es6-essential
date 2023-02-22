/**
 * 프로그래밍 언어에서 얕은복사(Shallow Copy)라고 존재함.
 * 얕은복사란 바로 객체는 메모리 주소가 전달되는 것을 뜻함.
 *
 * 자바스크립트에서 복사할때는 항상 얕은 복사가 이루어짐!
 * 그래서 Array.from, concat, slice, spread(...), Object.assign 등을 사용해서
 * 기존의 Object를 어딘가에 전달하기 위해 복사할 때는 새로운 Object가 만들어지는 것이 아니라 얕은 복사가 이루어짐
 */

const pizza = { name: '🍕', price: 2 };
const ramen = { name: '🍜', price: 3 };
const sushi = { name: '🍣', price: 1 };
const store1 = [pizza, ramen];

// 메뉴판을 그대로 체인점 2호 개설
const store2 = Array.from(store1); // 새로운 배열을 반환
console.log('store1 : ', store1);
console.log('store2 : ', store2);

// 2호점에는 초밥 메뉴도 추가
store2.push(sushi);
console.log('store2 : ', store2);

// 피자 가격이 인상
pizza.price = 4;
console.log('store1 : ', store1);
console.log('store2 : ', store2);

// 결론: Object는 메모리 주소가 전달되기 때문에 새로운 배열을 반환해도 동일한 오브젝트를 참조함에 따라 모든 배열에 값이 동일함
