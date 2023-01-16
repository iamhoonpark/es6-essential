/** 
 * 1. JavaScript 언어가 브라우저(Browser)와 컴퓨터(Computer) 위에서 동작할 수 있는 이유
 * - 자바스크립트 엔진(JavaScript Engine)
 * 
 * 2. 자바스크립트 엔진(JavaScript Engine) 이란?
 * - 브라우저 위에서 작성된 코드(JS)가 동작하기 위해서는 브라우저 자체에 내장되어 있는 '자바스크립트 엔진' 이 필요
 * - 자바스크립트 엔진이 동작하는 시간에, 즉 런타임(Run Time)이라고 함
 * - 이 과정에서 코드를 한줄 한줄씩 번역해서 실행
 * 
 * 3. 인터프리터(Interpreter)
 * - 런타임(Run Time)시 코드를 한줄 한줄씩 번역해서 실행하는 것
 * - 즉, 일단 실행 후 하나하나씩 필요할 때마다 한줄씩 번역해서 실행
 * - 바로 실행하기 때문에 초반 실행하는 속도는 빠르지만, 실행하고 있는 당시 한줄한줄씩 번역하기 때문에 실행속도가 비교적 느릴 수 있는 담점
 * - 하지만, 자바스크립트 엔진 성능이 최적화가 되어 성능에 큰 걱정을 하지 않아도 됨
 * - 동적으로 타입(자료형)이 결정됨 = Dynamic Type
 * 
 * 4. 컴파일러(Compiler)
 * - 인터프리터와 대비되는 개념으로 컴파일러는 Java에서 사용됨
 * - 컴파일러 동작 방식: 작성된 코드를 컴파일러를 통해서 실행하기 전 모든 코드를 컴파일링 후 컴퓨터가 이해할 수 있는 실행파일로 변경하는 과정을 거쳐야 함
 * - Ex) .Java 파일(text) > 컴파일러 > .class 파일(java bytecode)
 * - 즉, 실행 전 모든 파일을 번역하는 작업을 진행
 * - 사전에 컴파일링 과정을 거쳐서 실행파일을 만들기 때문에 실행 전 컴파일링 과정에서 시간이 오래걸리는 단점이 있지만,
 *   한번 실행파일을 만들어 두어서 실행을 때는 빠르게 실행할 수 있기 때문에 실행속도가 빠른 장점
 * - 컴파일링을 거치면 정적으로 타입(자료형)이 결정됨 = Static Type
 * 
 * 5. 각각의 브라우저들이 사용하는 자바스크립트 엔진
 * - Chrome, Edge, Node Js = V8 Engine
 * - Sapari = JavaScript Core
 * - FireFox = SpiderMonkey
 * 
 * 6. ECMAScript
 * - 브라우저 엔진들이(5번) JS코드를 이해하고 번역하고 실행하기 위해서는 공통된 규격이 필요
 * - 그 규격을 정의한 것을 이크마스크립트(ECMAScript)이라 함
 * - 이크마스크립트는 자바스크립트와 완전히 별개의 새로운 언어가 아닌, 자바스크립트의 문법의 규격사항, 표준사항을 명시하는 것으로 볼 수 있음
 * - 자바스크립트 언어로 프로그래밍을 했다고 말하기 위해서는 변수는, 제어문, 반복문 등 문법에 대해 정의한 이크마스크립트를 통해서 각각의 엔진들이
 *   '우린 이렇게 번역할게~' 라고 엔진을 구현해 둘 수 있음
 * - 따라서 JS로 코딩을 할 때도 이크마스크립트에 맞게 프로그래밍을 하고 엔진도 이것에 맞춰 구현되어 있기 때문에 서로 호환이 가능하도록 프로그래밍할 수 있음
 * ※ 참조문서: 이크마스크립트 히스토리 - https://ko.wikipedia.org/wiki/ECMA%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8
 * 
 * 7. 자바스크립트(JavaScript)의 특징
 * - JavaScript(JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.
 *   While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.
 * - 자바스크립트는 가볍고, 인터프리터를 이용하는 언어이다. 이것을 just-in-time compiled 즉, 사전에 컴파일링하는 것이 아니라 필요할 때 실시간으로 컴파일을 하는 일급함수를 가진 프로그래밍 언어이다.
 *   그리고 자바스크립트는 웹페이지를 위한 스크립팅 언어라고 잘 알려져있지만 이제는 브라우저가 아닌 외부 환경에서도 자바스크립트 엔진이 있는 어떤 곳이든 자바스크립트 언어를 사용할 수 있다.
 *   예) Node.js, Apache CouchDB, Adobe Acrobat
 * - JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.
 * - 자바스크립트는 프로토타입을 베이스로한 다양한 스타일의 프로그래밍을 작성할 수 있는 멀티-패러다임이다. 절차지향으로도 작성할 수도 있고, 객체지향 언어라고도 할 수 있고 함수형 프로그래밍도 가능한데 이를 다 프로토타입을 베이스로 되어있다.
 *   그리고 한 번에 딱 한번의 일만 실행할 수 있는 싱글쓰레드 프로그래밍 언어이며, 동적인 언어이다.
 * ※ 참조문서: Mdn - https://developer.mozilla.org/ko/docs/Web/JavaScript
 * 
 * 8. 자바스크립트 언어
 * - 자바스크립트는 프로그래밍 언어＊이며 브라우저 환경에서 많이 사용되며, 브라우저 외부 노드환경 즉 컴퓨터에서도 사용할 수 있음
 * ＊개발자가 정해진 문법으로 특정한 로직을 수행하도록 프로그래밍 작성하는 것
 * - 언어라는 것은 특정한 문법을 가지고 있는 도구에 불과
 *   (브라우저에 무언가를 출력하고 싶다거나, 네트워크 통신을 하고 싶다면 통신을 할 수 있는 외부환경(=라이브러리)이 필요)
 * 
 * 9. Browser(= Front-end) 필수 지식 
 * 1) JavaScript 언어(= 문법)
 * 2) 브라우저에서 제공하는 WebAPIs: DOM, Network, Audio/Video, Storage, console, setTimeout, fetch 등...
 * 
 * 10. 프레임워크
 * - 요즘에는 WebAPIs 같은 호스트환경에서 제공해주는 API뿐만 아니라 Angular, React, Vue 등 다양한 프레임워크가 존재
 * 
 * 11. 익스텐션
 * 1) Prettier - Code formatter
 * 2) Material Icon Theme
 * 3) Material Theme > Set Color Theme > Meterial Theme Darker
 * 4) Live Server > Ctrl + Shift + P > 검색어 'live server' > Open WIth Live Server
 * 
 * 12. 세팅(Ctrl + ,)
 * 1) 더블 쿼테이션 설정: 문자열을 작성할 때, 싱글 따옴표로 사용할 수 있도록 하는 설정
 *    > 검색어 'quote' 
 *    > 'JavaScirpt>Preferences: Quote Style',
 *      'TypeScript>Preferences: Quote Style',
 *      'Prettier: JSX Single Quote',
 *      'Prettier: Single Quote',
 *    > single
 * 2) 주석 색상 변경
 *    > 검색어 '.json'
 *    > 'Json Schemas'
 *    > Edit in settings.json
 *    > 하단 코드 복붙
 *      "editor.tokenColorCustomizations": {
 *          "comments": "#EFDC05",
 *      }, 
 * 
 * 13. Node.js 환경
 * - Node 환경에서 실행할 경우
 * 1) node -v : 설치버전확인
 * 2) node : 노드 접속
 * 3) Ctrl + C * 2 : 노드 종료
 * 4) npm install nodemon -g : 노드몬 설치(노드에서 실시간 모니터링해서 실시간 콘솔 확인 가능)
 * 5) nodemon 파일명.확장자명 : 노드몬으로 js파일 실행
 * 
*/