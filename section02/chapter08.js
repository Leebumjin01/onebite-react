// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드

let arr1 = [1, 2, 3];

/* 
arr1.forEach(function (item, idx, arr) {
  // console.log(idx, item * 2);
});
 */

let doubledArr = [];

// arr1의 요소를 순회한 값을 item에 저장하고
arr1.forEach((item) => {
  // console.log("item : " + item);
  // doubleArr 배열에 item * 2 의 값을 저장
  doubledArr.push(item * 2);
  // console.log("doubleArr: " + doubledArr);
});

// console.log(doubledArr);

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];

let isInclude = arr2.includes(3);
let isNotInclude = arr2.includes(10);

// console.log(isInclude);
// console.log(isNotInclude);

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 인덱스 값을 반환하는 메서드
let arr3 = [1, 2, 3];
let index = arr3.indexOf(3);

// console.log(index);

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족해야함(콜백함수가 true)
// 특정 요소의 인덱스(위치)를 반환하는 메서드

let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => {
  if (item % 2 === 0) return true;
});

// console.log(findedIndex);

// 조건이 만족하는 값이 배열에 존재하지 않는다면 -1 을 반환
// 원시타입 데이터를 찾을 때는 indexOf 메서드로
// 객체타입 데이터를 찾을 때는 findIndex 메서드로...

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환

let arr5 = [{ name: "홍길동" }, { name: "임꺽정" }];

const finded = arr5.find((item) => item.name === "임꺽정");

console.log(finded);
