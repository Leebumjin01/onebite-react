// promise를 사용한 비동기처리

function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수
    // executor
    setTimeout(() => {
      // const num = 10; // -> then으로 빠짐

      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다.");
      }

      // console.log("안녕");
      // resolve("성공"); // 인수로 결과값을 전달
      // reject("실패"); // 인수로 결과값을 전달
    }, 2000);
  });
  return promise;
}

add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

/* 
// promise 객체 생성
const promise = new Promise((resolve, reject) => {
  // 비동기 작업 실행하는 함수
  // executor
  setTimeout(() => {
    // const num = 10; // -> then으로 빠짐
    const num = null; // -> catch로 빠짐

    if (typeof num === "number") {
      resolve(num + 10);
    } else {
      reject("num이 숫자가 아닙니다.");
    }

    // console.log("안녕");
    // resolve("성공"); // 인수로 결과값을 전달
    // reject("실패"); // 인수로 결과값을 전달
  }, 2000);
});
 */
// then 메서드(그 후에)
// promise의 비동기 작업이 성공 시 호출되는 메서드
/* 
promise.then((value) => {
  console.log(value); // resolve의 인수로 전달한 결과값을 매개변수로 결과값을 반환
});

// catch, 실패 시
promise.catch((error) => {
  console.log(error);
});
 */
/* 
setTimeout(() => {
  console.log(promise);
}, 3000);
 */

// then, catch 같이 사용하기
// promise channing 이라고도 불림

/* 
promise
  .then((value) => {
    console.log(value); // resolve의 인수로 전달한 결과값을 매개변수로 결과값을 반환
  })
  .catch((error) => {
    console.log(error);
  });
 */
