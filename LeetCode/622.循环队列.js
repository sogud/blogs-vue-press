/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
  this.items = []
  this.size = k
  this.count = 0
  this.head = -1
  this.tail = -1
}

/**
 * Insert an element into the circular queue. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
  if (this.isFull()) {
    return false
  }

  if (this.isEmpty()) {
    this.head = 0
  }

  this.tail = (this.tail + 1) % this.size
  this.items[this.tail] = value
  this.count++
  return true
}

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
  if (this.isEmpty()) {
    return false
  } else {
    this.head = (this.head + 1) % this.size
    this.count--
    return true
  }
}

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
  return this.head === -1 ? -1 : this.items[this.head]
}

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
  return this.head === -1 ? -1 : this.items[this.tail]
}

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
  return this.count === 0
}

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
  return this.size === this.count
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
var obj = new MyCircularQueue(3)
obj.enQueue(1)
obj.enQueue(1)
obj.enQueue(1)

var param_1 = obj.enQueue(1)
var param_12 = obj.enQueue(1)
var param_2 = obj.deQueue()
var param_3 = obj.Front()
var param_4 = obj.Rear()
var param_5 = obj.isEmpty()
var param_6 = obj.isFull()
