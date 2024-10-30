// 1. 함수 표현식

function funcA() {
  console.log("funcA call");
}

// 함수 자체를 변수에 담을 수 있음
let varA = funcA;
// console.log(varA);

// varA();
// funcA();

// 함수를 생성하자마자 변수에 담음
let varB = function funcB() {
  // console.log("funcB call");
};

varB();

// 위의 예제를 익명함수로 만들기
let varC = function () {
  // console.log("funcC call");
};

// varC();

// 2. 화살표 함수

let varD = () => {
  return 1;
};

console.log(varD());

// 위의 예제를 더 간단하게 만들기
// return 값을 반환하기만 한다면

// let varE = function() {
//   return 1;
// }

// 위의 것을 단순화

// let varJ = () => {
//   return 1;
// };

let varE = () => 1;
console.log(varE());

// 화살표 함수에 매개변수 선언
let varF = (value) => value + 1;
console.log(varF(20));
