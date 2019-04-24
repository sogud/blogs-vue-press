/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  if (nums.length == 1) return nums[0]
  nums = nums.sort((a, b) => a - b)
  let max = 0,
    key,
    mode = nums.length / 2
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == key || i == 0) {
      max++
      if (max > mode) return key
    } else {
      max = 1
    }
    key = nums[i]
  }
}
