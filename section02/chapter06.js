// 1. 배열 순회
// for of는 배열에서만 사용
// for in은 객체에서만 사용

let arr = [1, 2, 3];

// 1.1 배열 인덱스
// length: 배열의 길이를 저장하는 프로퍼티
for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
}

let arr2 = [4, 5, 6, 7, 8];
for (let i = 0; i < arr2.length; i++) {
  //   console.log(arr2[i]);
}

// 1.2 for of 반복문
let arr3 = [1, 2, 3, 4, 5];

// of 뒤에있는 배열의 값을 하나씩 순서대로 꺼내 변수 item에 저장
for (let item of arr3) {
  //   console.log(item);
}

// 2. 객체 순회
let person = {
  name: "LBJ",
  age: 27,
  hobby: "테니스",
};

// 2.1 Object.keys 사용
// 객체에서 key 만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);
// console.log(keys);
for (let i = 0; i < keys.length; i++) {
  // console.log(keys[i]);
}

for (let personItems of keys) {
  //   console.log(personItems, person[personItems]);
}

// 2.2 Object.values
// 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);
// console.log(values);

for (let value of values) {
  //   console.log(value);
}

// 2.3 for in
for (let key in person) {
  const value = person[key];
  console.log(key, value);
}
