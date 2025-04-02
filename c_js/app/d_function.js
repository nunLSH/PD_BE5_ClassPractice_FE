// 함수
// 함수 선언식 : 함수 호이스팅이 가능하다.
console.log(add(100, 200));
function add(a, b){
  return a+b;
}

console.log('a + b = ', add(10, 15));

// 자바스크립트에서 함수는 1급 객체 (Java Class)
// 1급 객체 : 변수에 담을 수 있다.
// 변수, 매개변수, 반환값으로 사용 가능

// 함수 표현식
// console.log(fncExpr(1000, 200000));
const fncExpr = function(a, b){
  return a + b;
}
console.log(fncExpr);
console.log(fncExpr(1000, 3000));

const argFnc = function (fnc){
   fnc();
}

argFnc(function(){console.log('저는 callback 함수입니다.')});

const returnFnc = function(){
  let name = 'lsh';
  let counter = 0;

  // 자바스크립트에서 함수는 함수객체가 생성되는 시점에
  // 함수가 실행되기 위한 환경을 메모리에 저장 (따라서 name, counter(변수들)이 메모리에서 내려오지 않음 >> 마치 캡슐화처럼 사용 가능)
  // 반환되는 함수 : Closure
  return function (){
    counter++;
    console.log(name, counter);
  }
}

returnFnc();    // 함수를 반환
returnFnc()();  // 반환된 함수를 실행

const rf = returnFnc();
rf();
rf();
rf();
rf();
rf();

console.log('==============================');
// 즉시실행함수 IIFE
// 함수의 선언과 동시에 실행

(function (iife){
  console.log('선언과 동시에 실행')
})();

// 람다
// (arg...) => {};
// 1. 매개변수가 1개라면 매개변수 선언부의 괄호 생략
// 2. 코드블록에 return문만 있다면 함수 body의 {} 생략 가능

let arr = [
    '감자', '고구마', '옥수수'
];

arr.forEach((e, idx, arr) => {
  console.log(e);
  console.log(idx);
  console.log(arr);
});

const argFunc = ((t,s,u) => {
  console.log(t);
});

argFunc('hi', 1, 2, 3, 4, 5, 6, 7);