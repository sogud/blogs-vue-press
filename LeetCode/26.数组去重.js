/**
 * @param {number[]} nums
 * @return {number}
 */
var nums = [-1, 0, 0, 0, 0, 3, 3]
var removeDuplicates = function(nums) {
  // return [...new Set(nums)]
  // return Array.from(new Set(nums))
  for (var i = 0; i < nums.length; i++) {
    for (var j = nums.length - 1; j > i; j--) {
      if (nums[i] == nums[j]) {
        nums.splice(j, 1)
      }
    }
  }

  return nums
}

// removeDuplicates(nums)
console.log(removeDuplicates(nums))

/**
 * 解题思路：
一级循环从左至右遍历数组，对比对象为该循环索引右侧的所有元素，所以二级循环取从右到左，并终止于一级循环索引数 i，
遇到相同元素，立即删除右侧（二级循环中的）元素并变更原始数组，以保证一级循环过的元素都是唯一的。
 */
