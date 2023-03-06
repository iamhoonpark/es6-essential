"use strict";

require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.number.constructor.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
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
var Cat = /*#__PURE__*/_createClass(function Cat() {
  _classCallCheck(this, Cat);
});
var hello = function hello() {};
var yes = Promise.resolve(1);
