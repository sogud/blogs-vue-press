/**
  在一个给定的数组nums中，总是存在一个最大元素 。
  查找数组中的最大元素是否至少是数组中每个其他数字的两倍。
  如果是，则返回最大元素的索引，否则返回-1。

  示例 1:

  输入: nums = [3, 6, 1, 0]
  输出: 1
  解释: 6是最大的整数, 对于数组中的其他整数,
  6大于数组中其他元素的两倍。6的索引是1, 所以我们返回1.
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
  if (nums.length === 1) {
    return 0
  }
  var arr = nums.concat()
  arr.sort((a, b) => a - b)
  return arr[arr.length - 1] >= arr[arr.length - 2] * 2
    ? nums.indexOf(arr[arr.length - 1])
    : -1
}

console.log(dominantIndex((nums = [3, 6, 1, 0])))
