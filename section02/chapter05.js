// 원시타입: 불변값(메모리 값 수정 X)
// Number, String, Boolean 등...
// 값이 저장된 실제 메모리의 데이터가 변하는게 아닌, 새로운 값이 저장 된 메모리로 주소값을 변경
// 값 자체로써 변수에 저장되고 복사 됨

// Object, Array, Function 등...
// 객체타입: 가변값(메모리 값 수정 O)
// 메모리에 값을 저장하여 변수는 메모리의 참조값을 참조, 참조값은 저장된 값을 참조
// 값이 변경되면 변수는 참조값이 변하지 않고, 같은 참조값을 바라봄, 변경된 값은 원본 데이터 자체를 수정
// 참조 값을 통해 변수에 저장되고 복사 됨

let o1 = { name: "LBJ" };
let o2 = o1;
let o3 = { ...o1 };

console.log(o1 === o2); // true
console.log(o1 === o3); // false, 참조값이 다르기 때문

console.log(JSON.stringify(o1) === JSON.stringify(o3)); // true, JSON.stringfy() 자바스크립트 내장 함수, 객체를 문자열로 변환하는 기능
