// 자바스크립트 실행 환경 : 1. browser, 2. node.js
console.log("Hello World");
// 1. 자바스크립트는 interpreter 언어
// compile | interpreter 언어
// 2. 자바스크립트는 타입추론을 지원하는 언어
// 컴파일러가 자동 타입캐스팅을 지원해준다.

// 변수
// var 변수명    : 변수, es6 이전 사용, 함수레벨스코프, 변수호이스팅
// let 변수명    : 변수, es6 이후 사용, block level scope, 변수호이스팅 (X)
// const 변수명  : 상수, es6 이후 사용, block level scope, 변수호이스팅 (X)


// 변수 호이스팅
// 아직 선언되지 않은 변수를 사용
console.log(vStr);  // 2
var vStr;           // 1
vStr = 10;          // 3
console.log(vStr);

// console.log(lStr);
let lStr  = 'let';

// console.log(cStr);
const cStr = 'const';
// cStr = 'modify';

function studyScope() {
  if (true){
    var vScope  = '함수레벨스코프';
    const cScope = 'block level scope'
    console.log(cScope);
  }
  console.log(vScope);
}

studyScope();

// 자바스크립트는 순수객체지향프로그래밍언어
// 모든 것이 객체

// primitive type : String, Number, Boolean, Null, Undefined
// reference type : object

// Null      : 개발자가 명시적으로 값이 없음을 나타내기 위해 할당하는 값
// Undefined : 변수가 선언된 이후 초기화되지 않았음. 자바스크립트 엔진이 자동으로 넣어주는 값

let userName = '임서현';
const age = 25;
const flg = true;
const empty = null;
let _undefined;
const obj = {name: '임서현', subject: ['java', 'html', 'css']}

console.log(userName, typeof(userName));
console.log(age, typeof(age));
console.log(flg, typeof(flg));
console.log(empty, typeof(empty));
console.log(_undefined, typeof(_undefined));
console.log(obj, typeof(obj));

