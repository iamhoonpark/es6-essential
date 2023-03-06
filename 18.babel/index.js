/**
 * 1. Babel
 * - Babel, TS Compiler: 최신 문법을 이전 버전의 문법으로 변환
 * - React, Node 등 최신 프레임워크에는 이미 유사한 툴이 내장
 * - 순수 JS 프로젝트는 Babel을 사용해야 가능
 * - https://babeljs.io/
 *
 * 2. Babel 세팅
 * 1) 해당 프로젝트로 이동
 *    - cd 18.bable
 * 2) npm 셋업
 *    - npm init
 * 3) 외부 라이브러리 설치, 개발자 디펜던씨 모드에 추가
 *    - npm install --save-dev @babel/core @babel/cli @babel/preset-env
 * 4) script
 *    - package.json, sciprts "build" 추가
 * 5) npm 실행
 *    - npm run build
 *    - build/index.js
 */
class Cat {}
const hello = () => {};
const yes = Promise.resolve(1);
