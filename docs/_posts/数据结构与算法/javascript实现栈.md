---
title: javascript 实现栈
date: 2018-01-13 16:07:32
tags:
  - JavaScript
  - 算法
category: 前端
---

栈是一种遵从后进先出（LIFO）原则的有序集合。新添加的或待删除的元素都保存在栈的 末尾，称作栈顶，另一端就叫栈底。在栈里，新元素都靠近栈顶，旧元素都接近栈底。

在现实生活中也能发现很多栈的例子。例如，下图里的一摞书或者餐厅里堆放的盘子。

我们将创建一个类来表示栈。让我们从基础开始，先声明这个类：

```javascript
function Stack() {
  //各种属性和方法的声明
  var items = []
  //添加一个（或几个）新元素到栈顶
  this.push = function(item) {
    items.push(item)
  }
  //移除栈顶的元素，同时返回被移除的元素。
  this.pop = function() {
    return items.pop()
  }
  //返回栈顶的元素，不对栈做任何修改（这个方法不会移除栈顶的元素，仅仅返 回它）
  this.peek = function() {
    return items.length - 1
  }
  //如果栈里没有任何元素就返回true，否则返回false。
  this.isEmpty = function() {
    return items == []
  }
  //移除栈里的所有元素
  this.clear = function() {
    items = []
  }
  //返回栈里的元素个数。
  this.size = function() {
    return items.length
  }
  this.print = function() {
    console.log(items.toString())
  }
}
```

使用刚刚声明的栈方法实现一个十进制数转二进制数的算法

要把十进制转化成二进制，我们可以将该十进制数字和 2 整除（二进制是满二进一），直到结 果是 0 为止

```JavaScript
function divideBy2(decNumber){

  var remStack = new Stack(),
      rem,
      binaryString ='';

  while (decNumber >0 ){
    rem = Math.floor(decNumber % 2);
    remStack.push(rem);
    decNumber = Math.floor(decNumber / 2)
  }

  while (!remStack.isEmpty()){
    binaryString += remStack.pop().toString();
  }

  return binaryString
}
```

我们很容易修改之前的算法，使之能把十进制转换成任何进制。除了让十进制数字和 2 整除 转成二进制数，还可以传入其他任意进制的基数为参数，就像下面算法这样：

```JavaScript
function baseConverter(decNumber,base){

  var remStack = new Stack(),
      rem,
      baseString = '',
      digits = '0123456789ABCDEF';

  while (decNumber >0){
    rem = Math.floor(decNumber % base);
    remStack.push(rem);
    decNumber = Math.floor(decNumber / base)
  }

  while (!remStack.isEmpty()){
    baseString +=  digits[remStack.pop()];
  }

  return baseString;
}
```

<script>
export default {
  mounted () {
    function Stack() {
      //各种属性和方法的声明
      var items = []
      //添加一个（或几个）新元素到栈顶
      this.push = function(item) {
        items.push(item)
      }
      //移除栈顶的元素，同时返回被移除的元素。
      this.pop = function() {
        return items.pop()
      }
      //返回栈顶的元素，不对栈做任何修改（这个方法不会移除栈顶的元素，仅仅返 回它）
      this.peek = function() {
        return items.length - 1
      }
      //如果栈里没有任何元素就返回true，否则返回false。
      this.isEmpty = function() {
        return items == []
      }
      //移除栈里的所有元素
      this.clear = function() {
        items = []
      }
      //返回栈里的元素个数。
      this.size = function() {
        return items.length
      }
      this.print = function() {
        console.log(items.toString())
      }
    }
    function baseConverter(decNumber,base){
        var remStack = new Stack(),
            rem,
            baseString = '',
            digits = '0123456789ABCDEF';
        
        while (decNumber >0){
          rem = Math.floor(decNumber % base);
          remStack.push(rem);
          decNumber = Math.floor(decNumber / base)
        }

        while (!remStack.isEmpty()){
          baseString +=  digits[remStack.pop()]; 
        }
        return baseString; 
    }
    // console.log(baseConverter(1345, 2)) 
    // console.log(baseConverter(100345, 8)) 
    // console.log(baseConverter(100345, 16))
  }
}
</script>
