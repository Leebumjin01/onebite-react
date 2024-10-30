// 1. Spread 연산자, 사용법: ... (점 3개)
// Spread: 흩뿌리다, 펼치다
// 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];
console.log(arr2);

// 객체에서의 사용
let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  c: 3,
  ...obj1,
  d: 4,
};

// console.log(obj2);

function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}

funcA(...arr1);

// 2. Rest 매개변수
// Rest는 나머지, 나머지 매개변수
// rest 매개변수는 매개변수 마지막에 작성, 뒤에 추가적인 매개변수는 선언할 수 없음

// 첫번째 매개변수를 제외한 나머지 값이 rest 매개변수에 저장됨
function funcB(one, ...rest) {
  // console.log(one);
  console.log(rest); // 2, 3이 출력 됨
}

funcB(...arr1);
