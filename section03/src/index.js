/* 
import { add, sub } from "./math.js";
import multyply from "./math.js";
 */
// math.js 동일한 경로에서 불러올 때, 아래처럼 import도 가능
import multyply, { add, sub } from "./math.js";

console.log(add(1, 2));
console.log(sub(1, 2));
console.log(multyply(2, 3));
