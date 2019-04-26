/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    let tmp = false
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j]) {
        if (tmp) {
          nums.splice(j, 1)
          j--
        } else {
          tmp = true
        }
      }
    }
  }
  return nums
}
console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]))
