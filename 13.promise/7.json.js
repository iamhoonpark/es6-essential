/**
 * JSON(JavaScript Object Notation)
 * - 자바스크립트에서 사용하는 객체(Obejct)를 서버와 주고받기 편할 수 있도록 문자열 형태로 변환하는 형태
 * - 서버와 클라이언트(브라우저, 모바일) 간의 HTTP 통신을 위한 오브젝트 형태의 텍스트 포맷
 * - 오브젝트 데이터를 서버로 보내기 전에 JSON형태로 변환하는 JS함수 stringify(object): JSON
 * - 서버로부터 JSON을 받아서 Object형태로 변환하는 JS함수 parse(JSON): Object
 */
const jake = { name: 'Jake', age: 20, eat: () => console.log('eat') };

// 직렬화(Serializing): 객체를 문자열로 만드는(변환) 것
const json = JSON.stringify(jake);
console.log(jake);
console.log(json); // JSON은 객체의 프로퍼티(상태)만 포함됨

// 역직렬화(Deserializing): 문자열 데이터를 자바스크립트 객체로 변환
const obj = JSON.parse(json);
console.log(obj);
