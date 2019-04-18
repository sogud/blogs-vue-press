/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let len = nums.length
  if (len < 2) return false
  nums = nums.sort((a, b) => a - b)
  let prev = nums[0]
  for (let i = 1; i < len; i++) {
    if (prev === nums[i]) {
      return true
    } else {
      prev = nums[i]
    }
  }
  return false
}
console.log(containsDuplicate([1]))
