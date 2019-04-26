/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  let res = ''
  let code = 0
  for (let i = 0; i < str.length; i++) {
    code = str.charAt(i).charCodeAt()
    res +=
      code > 64 && code < 91 ? String.fromCharCode(code + 32) : str.charAt(i)
  }
  return res
}
