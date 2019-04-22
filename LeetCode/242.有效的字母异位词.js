/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length != t.length) {
    return false
  }
  let arrs = s.split('').sort()
  let arrt = t.split('').sort()
  for (let i = 0; i < arrs.length; i++) {
    if (arrs[i] != arrt[i]) {
      return false
    }
  }
  return true
}
let s = 'rat',
  t = 'car'

console.log(isAnagram(s, t))
