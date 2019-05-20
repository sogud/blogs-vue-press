/**
  给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

  示例 1:

  输入: 123
  输出: 321
  示例 2:

  输入: -123
  输出: -321
  示例 3:

  输入: 120
  输出: 21
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let resultArr = []
  let intToStr = x.toString()
  for (let i = intToStr.length - 1; i > 0; i--) {
    resultArr.push(intToStr[i])
  }
  if (intToStr[0] === '-') {
    resultArr.unshift('-')
  }
  resultArr.push(intToStr[0])
  let resultNum = parseInt(resultArr.join(''))
  if (resultNum <= Math.pow(-2, 31) || resultNum >= Math.pow(2, 31) - 1) {
    return 0
  }
  return resultNum
}

console.log(reverse(123))
