/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.s1 = []
  this.s2 = []
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  let s2 = this.s2,
    s2Len = s2.length,
    s1 = this.s1

  let curMin = s2[s2Len - 1]
  if (curMin < x) s2.push(curMin)
  else s2.push(x)
  s1.push(x)
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  let s1 = this.s1,
    s1Len = s1.length,
    s2 = this.s2,
    s2Len = s2.length

  if (s1Len === 0) return undefined

  s2.pop()
  return s1.pop()
}

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  let s1 = this.s1,
    s1Len = s1.length
  if (s1.length === 0) return undefined
  return s1[s1Len - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  let s2 = this.s2,
    s2Len = s2.length
  if (s2Len === 0) return undefined
  return s2[s2Len - 1]
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
var obj = new MinStack()
obj.push(3)
obj.push(4)
obj.push(2)
obj.push(1)
obj.push(5)
obj.pop()
var param_3 = obj.top()
var param_4 = obj.getMin()
