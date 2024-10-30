// 배열의 6가지 조작 메서드

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드

let arr1 = [1, 2, 3];
// arr1.push(4, 5, 6, 7);
// push 메서드는 요소 추가후 변환 된 길이를 반환함
const arr1Length = arr1.push(4, 5, 6, 7);
// console.log(arr1);
// console.log(arr1Length); // 7

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고 반환

let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();
// console.log(poppedItem);
// console.log(arr2);

// 3. shift
// 배열의 맨 앞에 있는 요소를 제거, 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();
// console.log(shiftedItem);
// console.log(arr3);

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가

let arr4 = [1, 2, 3];
// arr4.unshift(4, "LBJ");
const arr4Length = arr4.unshift(4, "LBJ");
// console.log(arr4);
// console.log(arr4Length);

// 5. slice
// 배열의 특정 범위를 잘라내서 새로운 배열로 반환

let arr5 = [1, 2, 3, 4, 5];
// 마지막의 인덱스보다 +1을 해서 넣어주어야함
let slice = arr5.slice(2, 5);

// 끝까지 잘라내는 경우 시작 인덱스만 넣어줘도 됨
let slice2 = arr5.slice(2);
// console.log(slice2);

// 뒤에서부터 자르는 경우 음수 값을 사용
let slice3 = arr5.slice(-3);
// console.log(slice3); // 3, 4, 5

const arr5Length = arr5;
// console.log(slice);
// 원본 값은 변하지 않음
// console.log(arr5);
// console.log(arr5Length);

// 6. concat
// 두개의 서로 다른 배열을 이어 붙혀서 새로운 배열을 반환

let arr6 = [1, 2, 3];
let arr7 = [4, 5, 6];
let concatedArr = arr6.concat(arr7);
console.log(concatedArr);
