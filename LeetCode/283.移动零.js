/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  var j = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      var deleted = nums.splice(i, 1)[0]
      i--
      j++
    }
  }
  for (let i = 1; i <= j; i++) {
    nums.push(0)
  }
  return nums
}

console.log(moveZeroes([0, 0, 1]))
