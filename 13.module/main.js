/**
 * 모듈화
 * - 모듈성을 높여서 개별적으로 개발
 * - index.html 에서는 서로 다른 js 파일을 서로 읽고 수정할 수 있음 = 커플링이 심하게 되어 있음 = 이는 버그에 치명적
 * - 이것을 방지하기 위해 각 js파일 별로 모듈처럼 사용할 수 있음
 * - script 요소의 type속성과 module값을 사용 후 export, import를 통해 노출시킬 수 있음
 * - <script type="module" src="counter.js"></script>
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
 *
 */
// import { increase as increase1 } from './counter.js';
// import * as counter from './counter.js';
// counter.increase();
import { count, increase, getCount } from './counter.js';

console.log('실행 main.js');
console.log('count = ', count);
increase();
increase();
increase();
increase();
increase();
const count1 = getCount();
console.log('count1 = ', count1);
