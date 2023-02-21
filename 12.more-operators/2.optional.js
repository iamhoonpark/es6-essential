// 옵셔널 체이닝 연산자 Optional Chaning Operator
// ES11 (ECMAScript 2020)
// ?.

let item; //= { price: 1 };
// item && item.price 가 중복되어 옵셔널 체이닝 연산자로 심플하게 사용가능
// item이 존재할 경우 price로 접근하고, 존재하지 않을 경우 접근금지
const price = item?.price;
console.log(price);

let obj = { name: '😺', owner: { name: '상훈' } };

const ownerName = obj && obj.owner && obj.owner.name;
const ownerName2 = obj?.owner.name;
console.log(ownerName);
console.log(ownerName2);
