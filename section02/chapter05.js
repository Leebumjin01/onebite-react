/**
 * 객체 타입 주의사항
 */

// 1. 의도치 않게 값이 수정될 수 있다.

// 2. 객체간의 비교는 기본적으로 참조값을 기준으로 이루어짐

let o1 = { name: "LBJ" };
let o2 = o1;
let o3 = { ...o1 };

console.log(o1 === o2); // 얕은 비교, true
console.log(o1 === o3); // 깊은 비교, false

// 참조값이 아닌 프로퍼티를 기준으로 비교
// stringify: 객체를 문자열로 변환
console.log(JSON.stringify(o1) === JSON.stringify(o3)); // true

// 3. 배열과 함수도 객체다.
