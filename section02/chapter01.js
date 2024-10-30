// 단락 평가
// 논리연산식에서 첫번째 피연산자의 값만으로도 해당 연산의 값을 확정지을 수 있다면, 두번째 피연산자에 접근하지 않음

// 1. Falsy한 값
// 아래 7가지 모두 조건문에서 거짓임
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

if (!f1) {
  // console.log("falsy");
  // true
} else {
  // console.log("Not falsy");
}

// 2. Truthy 한 값
// 7가지 Falsy한 값을 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

if (t1) {
  console.log("Truthy");
} else {
  console.log("Not Truthy");
}
