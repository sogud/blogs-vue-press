/**
 * 
  给定一个二进制数组， 计算其中最大连续1的个数。

  示例 1:
  输入: [1,1,0,1,1,1]
  输出: 3
  解释: 开头的两位和最后的三位都是连续1，所以最大连续1的个数是 3.
  注意：

  输入的数组只包含 0 和1。
  输入数组的长度是正整数，且不超过 10,000。
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  //声明一个最大值与暂存值
  let max = 0
  let cur = 0
  //遍历nums判断是否连续
  for (let i = 0; i < nums.length; i++) {
    //如果连续就暂存到cur里,遇到不连续的则比较最大值与当前值谁最大,取最大值,cur清零
    if (nums[i] == 1) {
      cur++
    } else {
      max = Math.max(cur, max)
      cur = 0
    }
  }
  return Math.max(max, cur)
}
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]))
