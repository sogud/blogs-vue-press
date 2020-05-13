---
title: javascript 实现链表
date: 2018-01-13 16:07:32
tags:
  - JavaScript
  - 算法
category: 前端
---

链表存储有序的元素集合，但不同于数组，链表中的元素在内存中并不是连续放置的。每个 元素由一个存储元素本身的节点和一个指向下一个元素的引用（也称指针或链接）组成。

相对于传统的数组，链表的一个好处在于，添加或移除元素的时候不需要移动其他元素。然 而，链表需要使用指针，因此实现链表时需要额外注意。数组的另一个细节是可以直接访问任何 位置的任何元素，而要想访问链表中间的一个元素，需要从起点（表头）开始迭代列表直到找到 所需的元素。
现实中也有一些链表的例子。第一个例子就是康加舞队。每个人是一个元素，手就是链向下 一个人的指针。可以向队列中增加人——只需要找到想加入的点，断开连接，插入一个人，再重 新连接起来。

另一个例子是寻宝游戏。你有一条线索，这条线索是指向寻找下一条线索的地点的指针。你顺着这条链接去下一个地点，得到另一条指向再下一处的线索。得到列表中间的线索的唯一办法， 就是从起点（第一条线索）顺着列表寻找。
还有一个可能是用来说明链表的最流行的例子，那就是火车。一列火车是由一系列车厢（也 称车皮）组成的。每节车厢或车皮都相互连接。你很容易分离一节车皮，改变它的位置，添加或 移除它。

### 创建一个链表

```JavaScript
function LinkedList() {
  // 一个辅助类,表示一个节点,包含一个指针,指向下一个节点
  var Node = function(element) {
    this.element = element
    this.next = null
  }
  // 表示列表项的长度
  var length = 0
  // 第一个节点的引用
  var head = null
  // 向链表尾部添加一个新的项
  this.append = function(element) {
    // 创建一个节点
    var node = new Node(element),
      current //用于暂存当前项
    //如果是空链表 那么 直接让head成为一个节点head.next自动变成null
    if (head === null) {
      //列表中第一个节点
      head = node
    } else {
      // 当前的head不为null,说明当前的head有next属性
      current = head
      // 循环链表找到最后一项
      while (current.next) {
        current = current.next
      }
      // 当curent.next等于空时说明已经到了最后一项
      // 然后把node赋值给最后一项即可
      current.next = node
    }
    // 更新长度
    length++
  }
  // 向链表的特定位置插入一个新的项
  this.insert = function(position, element) {
    //检查越界值
    if (position >= 0 && position <= length) {
      var node = new Node(element),
        current = head,
        previous,
        index = 0
      //在第一个位置添加
      //current是对链表中第一个元素的引用
      if (position === 0) {
        // 现在head和node.next都指向了current
        node.next = current
        // 把head的引用改为node
        head = node
      } else {
        // 当跳出循环时，current变量将是对想要插入新元素的位置之后一个 元素的引用，
        // 而previous将是对想要插入新元素的位置之前一个元素的引用。
        while (index++ < position) {
          previous = current
          current = current.next
        }
        // 因此，首先需要把新项（node）和当前项链接起来，然后需要改变previous和current之间的链接。
        // 我们还需要让previous.next 指向node。
        node.next = current
        previous.next = node
      }
      //更新长度
      length++

      return true
    } else {
      return false
    }
  }
  // 从链表中移除一项
  this.remove = function(element) {}
  // 从链表中的特定位置移除一项
  this.removeAt = function(position) {
    //检查越界值
    if (position > -1 && positon < length) {
      var current = head, //暂存当前项
        previous, //暂存之前项
        index = 0 //索引
      // 如果移除第一项,直接让head置空即可
      if (position === 0) {
        head = current.next
      } else {
        // 迭代链表
        while (index++ < position) {
          // 用previous(上一个)暂存current(当前项),当前项指向下一项
          previous = current
          current = current.next
        }
        //将previous(上一个))与current(当前的)的下一项连接起来;跳过current,从而移除它
        previous.next = current.next
      }
      // 更新长度
      length--
      return current.element
    } else {
      return null
    }
    // current变量是对要移除元素的引用。previous变量是对要移除元素的前一个元素的引用。
    // 那么要移除current元素，需要做的就是将previous.next与current.next链接起来。
    // 因此， 我们的逻辑对这两种情况都管用。
  }
  // 返回元素在链表中的索引
  this.indexOf = function(element) {
    var current = head,
      index = -1
    while (current) {
      if (element === current.element) {
        return index
      }
      index++
      current = current.next
    }
    return -1
  }
  // 返回链表是否为空
  this.isEmpty = function() {
    return length === 0
  }
  // 返回链表中的元素个数
  this.size = function() {
    return length
  }
  // 输出值
  this.toString = function() {
    var current = head,
      string = ''
    while (current) {
      string = current.element
      current = current.next
    }
    return string
  }
  this.getHead = function() {
    return head
  }
  this.print = function() {}
}
```

# 双向链表

```JavaScript

function DoublyLinkedList() {
  var Node = function(element) {
    this.element = element
    this.next = null
    this.prev = null
  }

  var length = 0
  var head = null
  var tail = null

  this.insert = function(position, element) {
    if (position >= 0 && position <= length) {
      var node = new Node(element),
        current = head,
        previous,
        index = 0

      if (position === 0) {
        if (!head) {
          //1
          head = node
          tail = node
        } else {
          node.next = current
          current.prev = node //2
          head = node
        }
      } else if (position === length) {
        current = tail //3
        current.next = node
        node.prev = current
        tail = node
      } else {
        while (index++ < position) { //4
          previous = current
          current = current.next
        }
        node.next = current //5
        previous.next = node

        current.prev = node
        node.prev = previous
      }
      length++
      return true
    } else {
      return false
    }
  }
}
```
