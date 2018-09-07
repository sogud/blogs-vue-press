---
title: javascript 实现集合
date: 2018-01-13 16:07:32
tags:
  - JavaScript
  - 算法
category: 前端
---

在数学中，集合是一组 不同的对象（的集）。 比如说，一个由大于或等于 0 的整数组成的自然数集合：N = {0, 1, 2, 3, 4, 5, 6, …}。集合中 的对象列表用“{}”（大括号）包围。
还有一个概念叫空集。空集就是不包含任何元素的集合。比如 24 和 29 之间的素数集合。由于 24 和 29 之间没有素数（除了 1 和自身，没有其他正因数的大于 1 的自然数），这个集合就是空集。 空集用“{ }”表示。
你也可以把集合想象成一个既没有重复元素，也没有顺序概念的数组。
在数学中，集合也有并集、交集、差集等基本操作。

- 目前的 JavaScript 实现是基于 2011 年 6 月发布的 ECMAScript 5.1（现代浏览器均已支持），它包 括了我们在之前章节已经提到过的 Array 类的实现。ECMAScript 6（官方名称 ECMAScript 2015， 2015 年 6 月发布）包括了 Set 类的实现。

```javascript
function Set() {
  var items = {}

  this.has = function(value) {
    return items.hasOwnProperty(value)
  }

  this.add = function(value) {
    if (!this.has(value)) {
      items[value] = value
      return true
    }
    return false
  }
  this.remove = function(value) {
    if (this.has(value)) {
      delete items[value]
      return true
    }
    return false
  }

  this.clear = function() {
    items = {}
  }
  this.size = function() {
    return Object.keys(items).length
  }
  this.values = function() {
    return Object.keys(items)
  }

  //并集
  this.intersection = function(otherSet) {
    var intersectionSet = new Set()
    var values = this.values()

    for (var i = 0; i < values.length; i++) {
      if (otherSet.has(values[i])) {
        intersectionSet.add(values[i])
      }
    }
    return intersectionSet
  }
  //差集
  this.difference = function(otherSet) {
    var differenceSet = new Set()

    var values = this.values()

    for (var i = 0; i < values.length; i++) {
      if (!otherSet.has(values[i])) {
        differenceSet.add(values[i])
      }
    }

    return differenceSet
  }
  //子集
  this.subset = function(otherSet) {
    if (this.size() > otherSet.size()) {
      return false
    } else {
      var values = this.values()
      for (var i = 0; i < values.length; i++) {
        if (!otherSet.has(values[i])) {
          return false
        }
      }
      return true
    }
  }
}
```
