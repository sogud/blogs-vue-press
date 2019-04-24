/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  let result = 0
  for (let i = 0; i < S.length; i++) {
    if (J.includes(S.charAt(i))) {
      result += 1
    }
  }
  return result
}
