/**
 * 외부로 모듈을 노출시킬 수 있는 방법
 *
 * 1. export default
 * - 모듈에서 한 개만 export 시킬 수 있음
 * - import increase from './counter.js';
 * - import 페이지에서 해당 모듈명을 변경해서 사용할 수 있음
 * ex) import increase1 from ...
 *
 * 2. export
 * - 모듈에서 여러개를 export 시킬 수 있음
 * - import { increase } from './counter.js';
 * - import 페이지에서 해당 모듈명을 변경할 수 없음
 * - 원하는 이름으로 받아서 사용하고 싶다면 as
 * - import { increase as increase1 } from ...
 */
console.log('실행 counter.js');

// 변수 자체를 export하기 보다는 getter와 setter(캡슐화)를 이용해서 하기
export let count = 0;

export function increase() {
  count++;
  console.log(count);
}

export function getCount() {
  return count;
}
