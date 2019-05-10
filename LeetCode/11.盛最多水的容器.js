/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  //双指针法,声明左右两个指针
  let i = 0,
    j = height.length - 1
  //声明最大值
  let max = 0
  //遍历计算
  while (i < j) {
    // 找到最矮的线乘上宽度算出面积
    let cur = Math.min(height[i], height[j]) * (j - i)
    //比较之前计算的面积与现在的面积比较,选出最大的面积
    max = Math.max(max, cur)
    //如果最左边的高度大于右边的高度,右指针向前移动
    //否则左指针向右移动
    if (height[i] >= height[j]) {
      j--
    } else {
      i++
    }
  }
  return max
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
