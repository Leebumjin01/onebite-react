// 5가지 배열 변형 메서드

// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
  { name: "홍길동1", hobby: "테니스" },
  { name: "홍길동2", hobby: "테니스" },
  { name: "홍길동3", hobby: "독서" },
];
/* 
const tennisPeople = arr1.filter((item) => {
  if (item.hobby === "테니스") return true;
});
*/
// 간결한 코드
const tennisPeople = arr1.filter((item) => item.hobby === "테니스");
// console.log(tennisPeople);

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환

let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  return item * 3;
});
// console.log(mapResult1);

let names = arr1.map((item) => item.name);
// console.log(names);

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
// 원본 배열 자체를 정렬함
let arr3 = ["b", "a", "r", "y"];
arr3.sort();
// console.log(arr3);

// 사전순으로 정렬이기 때문에 숫자의 대소 관계는 정렬하지 않음
// 만약 숫자를 정렬하고 싶으면
let arr4 = [10, 3, 5];
arr4.sort((a, b) => {
  if (a > b) {
    return 1; // b가 a앞에 옴
  } else if (a < b) {
    return -1; // a가 b앞에 옴
  } else {
    return 0; // a,b 자리 그대로 유지
  }
});
// console.log(arr4);

// 4. toSorted(최근에 추가된 함수)
// 정렬된 새로운 배열을 반환함
let arr5 = ["c", "a", "d"];
const sorted = arr5.toSorted();

// console.log(arr5);
// console.log(sorted);

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드

let arr6 = ["hi", "I", "am", "bamzen"];
// join("") 메서드 " " 사이에 구분자 입력 가능
const joined = arr6.join(" - ");
console.log(joined);
