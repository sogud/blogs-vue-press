---
title: JavaScript 实现排序算法
date: 2018-01-13 16:07:32
tags:
  - JavaScript
  - 算法
category: 前端
---

#### 冒泡排序

冒泡排序是一种简单的排序算法。它重复地走访过要排序的数列，一次比较两个元素，如果它们的顺序错误就把它们交换过来。走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。这个算法的名字由来是因为越小的元素会经由交换慢慢“浮”到数列的顶端。

1. 比较相邻的元素。如果第一个比第二个大，就交换它们两个；
2. 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对，这样在最后的元素应该会是最大的数；
3. 针对所有的元素重复以上的步骤，除了最后一个；
4. 重复步骤 1~3，直到排序完成。
   > 冒泡排序

```javascript
var bubbleSort = function(arr) {
  var i, j, m, noswap
  var len = arr.length
  if (len <= 1) {
    return
  }
  console.time('冒泡排序耗时')
  for (i = 0; i < len; i++) {
    noswap = true
    for (j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        m = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = m
        noswap = false
      }
    }
    if (noswap) {
      break
    }
  }
  console.timeEnd('冒泡排序耗时')
  return arr
}

console.log(bubbleSort([2, 3, 4, 5, 1, 2, 23, 4, 5, 6, 79]))
```

#### 选择排序

选择排序(Selection-sort)是一种简单直观的排序算法。它的工作原理：首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置，然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。以此类推，直到所有元素均排序完毕。

> 选择排序

```javascript
function selectionSort(arr) {
  var len = arr.length
  var minIndex, temp
  console.time('选择排序耗时')
  for (var i = 0; i < len - 1; i++) {
    minIndex = i
    for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  console.timeEnd('选择排序耗时')
  return arr
}
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.log(selectionSort(arr)) //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
```

#### 插入排序

插入排序（Insertion-Sort）的算法描述是一种简单直观的排序算法。它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。插入排序在实现上，通常采用 in-place 排序（即只需用到 O(1)的额外空间的排序），因而在从后向前扫描过程中，需要反复把已排序元素逐步向后挪位，为最新元素提供插入空间。

1. 从第一个元素开始，该元素可以认为已经被排序；
2. 取出下一个元素，在已经排序的元素序列中从后向前扫描；
3. 如果该元素（已排序）大于新元素，将该元素移到下一位置；
4. 重复步骤 3，直到找到已排序的元素小于或者等于新元素的位置；
5. 将新元素插入到该位置后；
6. 重复步骤 2~5。

> 插入排序

```javascript
function insertionSort(arr) {
  var len = arr.length
  console.time('插入排序耗时')
  for (var i = 1; i < len; i++) {
    var key = arr[i]
    var j = i - 1
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = key
  }
  console.timeEnd('插入排序耗时')
  return arr
}
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.log(insertionSort(arr))
```

#### 快速排序

排序算法（Sorting algorithm）是计算机科学最古老、最基本的课题之一。要想成为合格的程序员，就必须理解和掌握各种排序算法。

目前，最常见的排序算法大概有七八种，其中"快速排序"（Quicksort）使用得最广泛，速度也较快。它是图灵奖得主 C. A. R. Hoare（1934--）于 1960 时提出来的。

1. 在数据集之中，选择一个元素作为"基准"（pivot）。
2. 所有小于"基准"的元素，都移到"基准"的左边；所有大于"基准"的元素，都移到"基准"的右边。
3. 对"基准"左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止。

> 快速排序

```javascript
var quickSort = function(arr) {
  if (arr.length <= 1) {
    return arr
  }
  var pivotIndex = Math.floor(arr.length / 2)
  var pivot = arr.splice(pivotIndex, 1)[0]
  var left = []
  var right = []
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([pivot], quickSort(right))
}
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.log(quickSort(arr))
```

<script>
export default {
  method:{

  },
  mounted () {
    console.log(`运行:`)
    console.log(`var quickSort = function (arr) {
      if (arr.length <= 1) {
        return arr
      }
      var pivotIndex = Math.floor(arr.length / 2)
      var pivot = arr.splice(pivotIndex, 1)[0]
      var left = []
      var right = []
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
          left.push(arr[i])
        } else {
          right.push(arr[i])
        }
      }
      return quickSort(left).concat([pivot], quickSort(right))
    }
    var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
    console.log(quickSort(arr))
    `)
    var quickSort = function (arr) {
      if (arr.length <= 1) {
        return arr
      }
      var pivotIndex = Math.floor(arr.length / 2)
      var pivot = arr.splice(pivotIndex, 1)[0]
      var left = []
      var right = []
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
          left.push(arr[i])
        } else {
          right.push(arr[i])
        }
      }
      return quickSort(left).concat([pivot], quickSort(right))
    }
    var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]

    console.log(`输出:`)
    console.log(quickSort(arr))
  }
}
</script>
