const textObj = new String('Hello World!'); // 대개 사용하지 않고
const text = 'Hello World'; // 원시타입으로 사용
console.log(textObj);
console.log(text);

// 배열의 Index로 접근
console.log(text[0]);
console.log(text[1]);
console.log(text[2]);

// charAt 함수로 접근
console.log(text.charAt(0));
console.log(text.charAt(1));
console.log(text.charAt(2));

// 길이 확인
console.log(text.length);

// letter 찾기
console.log(text.indexOf('l')); // 첫 index 기준
console.log(text.lastIndexOf('l')); // 뒤 index 기준

// 대소문자 구분하여 문자열을 포함하는지
console.log(text.includes('tx'));
console.log(text.includes('H'));

// 대소문자 구분하여 어떤 문자열로 시작or끝나는지
console.log(text.startsWith('He'));
console.log(text.endsWith('rld'));

// 문자열을 전부 대문자or소문자 로 변경
console.log(text.toUpperCase());
console.log(text.toLocaleLowerCase());

// 문자열 중 특정 부분을 반환
console.log(text.substring(0, 2));

// 문자열 중 특정 부분을 제거 후 반환
console.log(text.slice(2)); // 앞에서 시작
console.log(text.slice(-2)); // 뒤에서 시작

// 공백제거
const space = '           space         ';
console.log(space.trim());

// 구분자를 이용해서 문자열을 배열로 반환
const longText = 'Get to the, point';
console.log(longText.split(' '));
console.log(longText.split(' ', 2));

console.log(longText.split(','));
