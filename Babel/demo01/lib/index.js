"use strict";

require("core-js/modules/es7.promise.finally");

// const s = () => {
//   console.log(1)
// }
Promise.resolve().finally();
let arr = [1, 23, 3,, 4, 35,, 466, [123, 12, 31, 241, 2, 15, [123, 12312, 3]]];
console.log(arr.flat(2));