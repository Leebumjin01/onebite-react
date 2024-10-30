// 1. callback 함수

function main(value) {
  // console.log(value);
  value();
}

function sub() {
  console.log("I'm sub function");
}

main(sub);

// 위의 함수를 익명함수로 변환
main(() => {
  // console.log("I'm sub function");
});

// 2. 콜백함수의 활용
function repeat(count) {
  for (let idx = 1; idx <= count; idx++) {
    // console.log(idx);
  }
}

function repeatDouble(count) {
  for (let idx = 1; idx <= count; idx++) {
    // console.log(idx * 2);
  }
}

// repeat(5);
// repeatDouble(5);

function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, function (idx) {
  // console.log(idx * 2);
});

// 익명 함수로
repeat(5, (idx) => {
  // console.log(idx * 2);
});
