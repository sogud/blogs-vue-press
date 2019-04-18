/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  // let next = nums.splice(k + 1)
  // let arr = next.concat(nums)
  // return arr
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop())
  }
}

console.log(rotate([99, -1, -100, 3], 2))
