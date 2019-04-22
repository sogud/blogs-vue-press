/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let len = s.length - 1
  let length = s.length / 2
  for (let i = 0; i < length; i++) {
    let ts = s[i]
    s[i] = s[len]
    s[len] = ts
    len--
  }
  return s
}

console.log(reverseString(['h', 'e', 'l', 'l', 'o']))
