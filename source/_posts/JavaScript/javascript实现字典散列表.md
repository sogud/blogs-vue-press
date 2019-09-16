---
title: javascript 实现字典散列表
date: 2018-01-13 16:07:32
tags:
  - JavaScript
  - 算法
category: 前端
---

你已经知道，集合表示一组互不相同的元素（不重复的元素）。在字典中，存储的是[键，值] 对，其中键名是用来查询特定元素的。字典和集合很相似，集合以[值，值]的形式存储元素，字 典则是以[键，值]的形式来存储元素。字典也称作映射。

将要实现的类就是以 ECMAScript 6 中 Map 类的实现为基础的。你会发现它和 Set 类很相似（但不同于存储[值，值]对的形式，我们将要存储的是[键，值]对）。

```javascript
function Dictionary() {
  var items = {}

  this.has = function(key) {
    return key in items
  }
  this.set = function(key, value) {
    items[key] = value
  }
  this.remove = function() {
    if (this.has(key)) {
      delete items[key]
      return true
    }
    return false
  }
  this.get = function(key) {
    return this.has(key) ? items[key] : nuderfined
  }
  this.values = function() {
    var values = []
    for (var k in items) {
      if (this.has(k)) {
        values.push(items[k])
      }
    }
    return values
  }
  this.clear = function() {
    items = {}
  }
  this.size = function() {
    return Object.keys(items).length
  }
  this.keys = function() {
    return Object.keys(items)
  }
  this.getItems = function() {
    return items
  }
}
var dictionary = new Dictionary()
```

```javascript
// var loseloseHashCode = function(key) {
//   var hash = 0
//   for (var i = 0; i < key.length; i++) {
//     hash += key.charCodeAt(i)
//   }
//   return hash % 37
// }
var loseloseHashCode = function(key) {
  var hash = 5381
  for (var i = 0; i < key.length; i++) {
    hash = hash * 33 + key.charCodeAt(i)
  }
  return hash % 1013
}
function HashTable() {
  var table = []
  this.put = function(key, value) {
    var position = loseloseHashCode(key)
    console.log(position + '-' + key)
    table[position] = value
  }
  this.get = function(key) {
    return table[loseloseHashCode(key)]
  }
  this.remove = function(key) {
    table[loseloseHashCode(key)] = undefined
  }
}
var hash = new HashTable()
hash.put('Gandalf', 'gandalf@email.com')
hash.put('John', 'johnsnow@email.com')
hash.put('Tyrion', 'tyrion@email.com')
console.log(hash.get('Gandalf'))
console.log(hash.get('Loiane'))
hash.remove('Gandalf')
console.log(hash.get('Gandalf'))
```
