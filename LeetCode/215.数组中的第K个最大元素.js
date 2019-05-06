/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  nums.sort((a, b) => b - a)
  // console.log(nums[k - 1])
  return nums[k - 1]
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))
