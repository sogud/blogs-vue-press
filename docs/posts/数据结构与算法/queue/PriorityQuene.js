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
      if (!added) {
        items.push(quemeElement)
      }
    }
  }
}
