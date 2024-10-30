// 단락 평가 활용

function returnFalse() {
  console.log("False 함수");
  return false;
}

function returnTrue() {
  console.log("True 함수");
  return true;
}

// JS의 단락 평가로 인해 논리연산식에서 첫번째 피연산자가 false로 확정되어 뒤에 무엇이 오든 접근조차 하지 않음
// False && ? = False
// returnTrue의 함수는 호출 안 됨
console.log(returnFalse() && returnTrue());

// 다른 예시
// T || T 면 앞 피연산자의 값이 나오고, T && T 면 뒤 피연산자의 값이 나옴
function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "LBJ" });
