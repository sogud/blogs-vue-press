---
title: javascript 实现队列
date: 2017-01-13 16:07:32
tags:
  - JavaScript
  - 算法
category: 前端
---

#### 什么是队列

队列是遵循 FIFO（First In First Out，先进先出，也称为先来先服务）原则的一组有序的项。 队列在尾部添加新元素，并从顶部移除元素。最新添加的元素必须排在队列的末尾。

在计算机科学中，一个常见的例子就是打印队列。比如说我们需要打印五份文档。我们会打 开每个文档，然后点击打印按钮。每个文档都会被发送至打印队列。第一个发送到打印队列的文 档会首先被打印，以此类推，直到打印完所有文档

```javascript
// 创建队列类方法
class Queue {
  constructor() {
    this.items = []
  }
  //相队列尾部添加一个元素
  enqueue(element) {
    this.items.push(element)
  }
  //移除队列的一个个元素
  dequeue() {
    return this.items.shift()
  }
  // 返回队列第一个元素,第一个被添加的元素
  front() {
    return this.items[0]
  }
  // 查看队列是否为空
  isEmpty() {
    return this.items.length == 0
  }
  // 清除队列
  clear() {
    this.items = []
  }
  // 返回队列包含的元素个数
  size() {
    return this.items.length
  }
  print() {
    console.log(this.items.toString())
  }
}
//测试用例
const queue = new Queue()
console.log(queue.isEmpty())
queue.enqueue('John')
queue.enqueue('Jack')
queue.print()
```

#### 优先队列

队列大量应用在计算机科学以及我们的生活中，我们在之前话题中实现的默认队列也有一些 修改版本。
其中一个修改版就是优先队列。元素的添加和移除是基于优先级的。一个现实的例子就是机 场登机的顺序。头等舱和商务舱乘客的优先级要高于经济舱乘客。在有些国家，老年人和孕妇（或 带小孩的妇女）登机时也享有高于其他乘客的优先级。
另一个现实中的例子是医院的（急诊科）候诊室。医生会优先处理病情比较严重的患者。通 常，护士会鉴别分类，根据患者病情的严重程度放号。

实现一个优先队列，有两种选项：设置优先级，然后在正确的位置添加元素；或者用入列操 作添加元素，然后按照优先级移除它们。

```JavaScript
    function PriorityQuene() {
      var items = []
      //创建一个特殊的元素.包含优先级
      function QueneElement(element, priority) {
        this.element = element
        this.priority = priority
      }
      // 入队方法
      this.enquene = function (element, priority) {
        // 实例化元素
        var quemeElement = new QueneElement(element, priority)
        // 如果队列是空的那么直接push
        if (this.isEmpty()) {
          this.push(quemeElement)
        } else {
          // 否则遍历队列中的元素比较优先级
          var added = false
          for (var i = 0; i < items.length; i++) {
            // 如果新的元素优先级比更高那么在它前面push(1代表最高优先级
            if (quemeElement.priority < items[i].priority) {
              items.splice(i, 0, quemeElement)
              added = true
              break
            }
          }
          // 如果没有找到更高的优先级那么自己push到后面
          if(!added){
            items.push(quemeElement)
          }
        }
      }
    }

```

<script>
export default {
  mounted() {
    class Queue {
      constructor() {
        this.items = []
      }
      enqueue(element) {
        this.items.push(element)
      }
      dequeue() {
        return this.items.shift()
      }
      front() {
        return this.items[0]
      }
      isEmpty() {
        return this.items.length == 0
      }
      clear() {
        this.items = [];
      }
      size() {
        return this.items.length
      }
      print() {
        console.log(this.items.toString())
      }
    }

    var queue = new Queue(); 
    console.log(queue.isEmpty()); 
    queue.enqueue("John"); 
    queue.enqueue("Jack"); 
    queue.print();
  },
}
</script>
