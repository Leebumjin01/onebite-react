// 1. Date 객체를 생성하는 방법

let date1 = new Date(); // 생성자
// console.log(date1);
// 시간은 날짜뒤에 / 하고 시간 입력
let date2 = new Date("1990-07-14/10:10:10");
// console.log(date2);

// 2. 타임 스탬프
// 특정 시간이 "1972-01-01 00시 00분 00초"(UTC)로부터 몇 ms가 지났는지 의미하는 숫자값
let ts1 = date1.getTime();
// console.log(ts1);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1; // JS에서 월은 0부터 시작함, +1 해줘서 실제 사용하는 값으로 변경 필요
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();
// console.log(year, month, date, hour, minute, seconds);

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(8 + 1);
date1.setDate(29);
date1.setHours(16);
date1.setMinutes(55);
date1.setSeconds(23);

// console.log(date1);

console.log(date1.toDateString());
console.log(date1.toLocaleString());
