/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let firstStrs = strs[0]
  let result = ''
  if (strs.length === 0 || firstStrs.length === 0) {
    return ''
  }
  if (strs.length === 1) {
    return firstStrs
  }
  for (let i = 0; i < firstStrs.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (firstStrs[i] != strs[j][i]) {
        return result
      }
    }
    result += firstStrs[i]
  }
  return result
}
console.log(longestCommonPrefix(['']))
