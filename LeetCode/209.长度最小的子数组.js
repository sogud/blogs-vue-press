/**
  给定一个含有 n 个正整数的数组和一个正整数 s ，
  找出该数组中满足其和 ≥ s 的长度最小的连续子数组。
  如果不存在符合条件的连续子数组，返回 0。

  示例:

  输入: s = 7, nums = [2,3,1,2,4,3]
  输出: 2
  解释: 子数组 [4,3] 是该条件下的长度最小的连续子数组。
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  let left = 0
  let minLength = nums.length
  let sum = 0
  let length = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    while (sum >= s) {
      length = i - left + 1
      //minLength = Math.min(minLength, i-left+1);
      if (minLength > length) {
        minLength = length
      }
      sum -= nums[left++]
    }
  }

  //return minLength==nums.length?0:minLength;
  if (minLength == nums.length) {
    return 0
  } else {
    return minLength
  }
}
console.log(minSubArrayLen((s = 7), (nums = [2, 3, 1, 2, 4, 3])))
