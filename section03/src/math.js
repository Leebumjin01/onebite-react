// ES모듈 시스템에서 값을 내보내고 가져오는 방법

// 아래는 math 모듈(math는 그냥 이름 붙힘)
// 1. 방법 1: 함수를 선언 후 마지막 줄에 export 선언
/* 
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

export { add, sub };
 */

// 2. 방법 2: 함수 앞에 export 선언

export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

// 3. 방법 3 -> 하나의 모듈을 대표하는 default 값을 내보내는 방법

export default function multyply(a, b) {
  return a * b;
}
