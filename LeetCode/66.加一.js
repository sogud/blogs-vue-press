/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  // let str = digits.join('')
  // let plus = (Number(str) + 1).toString()
  // return plus.split('')
  let i
  for (i = digits.length - 1; i >= 0; i--) {
    if (digits[i] == 9) {
      digits[i] = 0
    } else {
      digits[i]++
      return digits
    }
  }
  if (i == -1) {
    digits.unshift(1)
  }
  return digits
}
console.log(plusOne([9]))
