let person = {
  name: "LBJ",
  age: 35,
  hobby: "riding",
  address: "성남시",
};

// 3.1 특정 프로퍼티에 접근(점 표기법, 괄호 표기법)
let name = person.name;
console.log(name);

let age = person["age"];
console.log(age);

// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = "fe developer";
person["favoriteFood"] = "떡볶이";

// 3.3 프로퍼티 수정
person.job = "repia";
person["favoriteFood"] = "초콜릿";

// 3.4 프로퍼티 삭제(delete 연산자)
delete person.job;
delete person["favoriteFood"];

// 3.5 프로퍼티의 존재 유무 확인(in 연산자), true, false 반환
let result1 = "name" in person;
let result2 = "age" in person;
console.log(result1);

console.log(person);
