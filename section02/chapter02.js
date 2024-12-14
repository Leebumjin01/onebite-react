/**
 * 단락 평가
 */

// function returnFalse() {
//   console.log("False 함수");
//   return false;
// }

// function returnTrue() {
//   console.log("True 함수");
//   return true;
// }

// console.log(returnFalse() && returnTrue()); // False 함수, false
// console.log(returnTrue() && returnFalse()); // True 함수, Flase 함수, false

// 단락 평가 활용 사례

function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName(); // person의 값이 없음
printName({ name: "LBJ" }); // 이정환

// Truethy || Truethy -> 앞의 Truethy 값 반환
// Truethy && Truethy -> 뒤의 Truethy 값 반환
