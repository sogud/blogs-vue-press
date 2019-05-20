/**
  给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

  示例 1:

  输入: num1 = "2", num2 = "3"
  输出: "6"
  示例 2:

  输入: num1 = "123", num2 = "456"
  输出: "56088"
  说明：

  num1 和 num2 的长度小于110。
  num1 和 num2 只包含数字 0-9。
  num1 和 num2 均不以零开头，除非是数字 0 本身。
  不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  // 0*0=0
  if (num1 === '0' || num2 === '0') {
    return '0'
  }
  // 获取到字符串长度
  var num1Len = num1.length,
    num2Len = num2.length
  // 创建一个长度为结果的空数组用0补充
  var result = new Array(num1Len + num2Len).fill(0)
  // use res[i+j+1] to store the single digits, num[i+j] to store carry
  var tmp
  for (var i = num1Len - 1; i >= 0; i--) {
    for (var j = num2Len - 1; j >= 0; j--) {
      tmp = parseInt(num1[i]) * parseInt(num2[j])
      result[i + j + 1] += tmp
      if (result[i + j + 1] >= 10) {
        result[i + j] += parseInt(result[i + j + 1] / 10)
        result[i + j + 1] = parseInt(result[i + j + 1] % 10)
      }
    }
  }
  var resultString = ''
  for (i = 0; i < result.length; i++) {
    if (resultString === '' && result[i] === 0) {
      continue
    }
    resultString += result[i]
  }
  return resultString
}
console.log(multiply((num1 = '123'), (num2 = '456')))
