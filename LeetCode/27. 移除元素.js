/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(numss, val) {
  let nums = numss
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == val) {
      nums.splice(i, 1)
      i--
    }
  }
  return nums
}

console.log(removeElement((numss = [1, 2, 3, 2, 1]), (val = 2)))
