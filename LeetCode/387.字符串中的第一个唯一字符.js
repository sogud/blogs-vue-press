/**
 * @param {string} s
 * @return {number}
 */
s = 'loveleetcode'
var firstUniqChar = function(s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i
    }
  }
  return -1
}
console.log(firstUniqChar(s))
