// 문자열타입
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String

let string = '안녕하세요';
string = `안녕!`;
console.log(string);

// 따옴표 자체를 출력하고 싶을 때, 외부에 쓰여지는 따옴표의 반대되는 걸 내부에 작성
string = '"안녕!"';
console.log(string);

string = "'안녕!'";
console.log(string);

// 특수문자 출력하는 법
string = '안녕!\n엘리야!, \\, \u09AC';
console.log(string);

// 템플릿 리터럴 (Template Literal) = 백틱기호 ``
let id = '엘리';
let greetings = "'안녕!, " + id + "🖐\n즐거운 하로 보내요!'"
console.log(greetings);

greetings = `'안녕, ${id} 🖐
즐거운 하루 보내요!`;
console.log(greetings);