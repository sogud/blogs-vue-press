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