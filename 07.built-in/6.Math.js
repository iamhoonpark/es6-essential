/**
 * Math
 * - static properties, method 가 많이 존재
 * - Math는 원시타입을 이용한 객체는 아니지만 숫자를 이용해서 계산할 때 필요한 유용한 함수들이 존재
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 */

console.log(Math.E); // 오일러의 상수, 자연로그의 밑
console.log(Math.PI); // 원주율 PI 값

// static method
console.log(Math.abs(-10)); // 절대값
console.log(Math.ceil(1.4)); // 소수점 이하를 올림
console.log(Math.floor(1.4)); // 소수점 이하를 내림
console.log(Math.round(1.4)); // 소수점 이하를 반올림
console.log(Math.round(1.7)); // 소수점 이하를 반올림
console.log(Math.trunc(1.56565)); // 정수만 반환

// 최대, 최소값을 찾기
console.log(Math.max(1, 2, 3, 4));
console.log(Math.min(1, 2, 3, 4));

// 거듭제곰
console.log(3 ** 2); //3² (es7 연산자)
console.log(Math.pow(3, 2)); //3²

// 제곱근
console.log(Math.sqrt(9)); // 9의 제곱근은 3, 어떠한 값을 두번 곱해야 하는지

// 0부터 1사이의 랜던한 값을 반환
console.log(Math.random());

// 1~10 까지 랜덤한 숫자
console.log(Math.floor(Math.random() * 10 + 1)); // Math.randome() * 10 = 0~9까지, 여기서 1을 더해서 1~10까지, floor로 소수점 이하를 내림
console.log();
console.log();
