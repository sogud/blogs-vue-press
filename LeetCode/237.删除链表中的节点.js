/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
let head = [4, 5, 1, 9]

var deleteNode = function(node) {
  //检查越界值
  if (node > -1 && node < length) {
    var current = head, //暂存当前项
      previous, //暂存之前项
      index = 0 //索引
    // 如果移除第一项,直接让head置空即可
    if (node === 0) {
      head = current.next
    } else {
      // 迭代链表
      while (index++ < node) {
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
}
