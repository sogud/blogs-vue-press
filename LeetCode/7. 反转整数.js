/**
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
