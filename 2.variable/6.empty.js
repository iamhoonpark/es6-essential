// null, undefined

let variable;
console.log(variable);
// ↪ undefined

variable = undefined;
console.log(variable);
// ↪ undefined

variable = null;
console.log(variable);
// ↪ null

let activeItem; // 아직 활성화된 아이템이 있는지 없는지 모르는 상태!
console.log(typeof activeItem);
// ↪ undefined

activeItem = null; // 활성화된 아이템이 없는 상태!
console.log(typeof activeItem);
// ↪ object

/**
 * null - type Object, 값이 비어있는 상태
 * undefined - type undefined 정해지지 않은 상태(메모리에 변수 배정만 받고 아무것도 없음)
 */