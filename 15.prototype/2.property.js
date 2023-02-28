/**
 * 프로퍼티 디스크럽터
 * - 오브젝트 상태에 대해서 간직하고 있는 것
 */

const dog = { name: '흰둥이', emoji: '🐶' };

/**
 * 1. 오브젝트 안에 있는 Key와 Value 찾는 디스크럽터
 */
// 1) Array으로 반환
console.log(Object.keys(dog));
console.log(Object.values(dog));
console.log(Object.entries(dog));

// 2) boolean으로 반환
console.log('name' in dog);
console.log(dog.hasOwnProperty('name'));
console.log('──────────────────────────────────────');

/**
 * 2. 프로퍼티 디스크럽터
 * - 오브젝트 안에 키들은 수정, 삭제가 가능한지에 대한 정보를 가지고 있는 디스크럽터
 * - 오브젝트의 각각의 프로퍼티는 프로퍼티 디스크립터 라고 하는 객체로 저장됨
 * - name이라는 Key에 대한 디스크럽터, emoji라는 Key에 대한 디스크럽터를 확인 가능
 * 1) value: 값
 * 2) writable: 값의 수정여부
 * 3) enumerable: 값을 열거할 수 있는지(iterator)
 * 4) configurable: 값들의 속성들을 수정·삭제할 수 있는지
 * - 기본적으로 Key에 대해서 아무것도 설정하지 않으면 전부 true로 되어 있음
 * - 오브젝트의 Key들은 그냥 name과 값으로 이루어진게 아니라 1,2,3,4번 처럼 객체로 가지고있음
 */

// 1) 모든 디스크럽터
const descriptors = Object.getOwnPropertyDescriptors(dog);
console.log(descriptors);

// 2) 한개의 디스크럽터
const descriptor = Object.getOwnPropertyDescriptor(dog, 'name');
console.log(descriptor);
console.log('──────────────────────────────────────');

// 3) 한개의 객체에 대해 프로퍼티를 정의
Object.defineProperty(dog, 'name', {
  value: '점박이',
  writable: false, // 수정불가
  enumerable: false, // 열거불가
  configurable: false, //속성(프로퍼티)수정삭제불가
});

// enumerable: false로 인해 emoji만 나오고 name에 대한 정보는 확인할 수 없음
console.log(dog.name);
console.log(Object.keys(dog));
console.log(Object.values(dog));
console.log(Object.entries(dog));

// writable: false로 인해 값을 수정할 수 없음
delete dog.name;
console.log(dog.name);
console.log('──────────────────────────────────────');

// 4) 전체적인 객체에 대해 모든 프로퍼티를 정의
const student = {};
Object.defineProperties(student, {
  firstName: {
    value: '영희',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  lastName: {
    value: '김',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  fullName: {
    get() {
      return `${lastName} ${firstName}`;
    },
    set(name) {
      [this.lastName, this.firstName] = name.split(' ');
    },
    configurable: true,
  },
});
console.log(student);
student.fullName = '박 상훈';
console.log(student);
