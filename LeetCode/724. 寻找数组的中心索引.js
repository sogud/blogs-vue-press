/**
  给定一个整数类型的数组 nums，请编写一个能够返回数组“中心索引”的方法。

  我们是这样定义数组中心索引的：数组中心索引的左侧所有元素相加的和等于右侧所有元素相加的和。

  如果数组不存在中心索引，那么我们应该返回 -1。如果数组有多个中心索引，那么我们应该返回最靠近左边的那一个。

  示例 1:

  输入:
  nums = [1, 7, 3, 6, 5, 6]
  输出: 3
  解释:
  索引3 (nums[3] = 6) 的左侧数之和(1 + 7 + 3 = 11)，与右侧数之和(5 + 6 = 11)相等。
  同时, 3 也是第一个符合要求的中心索引。
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  var sum = 0
  //求出总和
  for (var i = 0; i < nums.length; i++) {
    sum += nums[i]
  }
  var leftCount = 0
  var rightCount = 0
  for (var i = 0; i < nums.length; i++) {
    //设置i=0时的值
    if (i == 0) {
      leftCount = 0
    } else {
      //左边的和
      leftCount += nums[i - 1]
    }
    //右边的和
    rightCount = sum - leftCount - nums[i]
    if (leftCount == rightCount) {
      return i
    }
  }
  return -1
}

console.log(pivotIndex((nums = [1, 7, 3, 6, 5, 6])))
