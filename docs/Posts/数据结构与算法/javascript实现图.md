---
title: javascript 实现图
date: 2018-01-13 16:07:32
tags:
  - JavaScript
  - 算法
category: 前端
---

由一条边连接在一起的顶点称为相邻顶点。比如，A 和 B 是相邻的，A 和 D 是相邻的，A 和 C 是相邻的，A 和 E 不是相邻的。
一个顶点的度是其相邻顶点的数量。比如，A 和其他三个顶点相连接，因此，A 的度为 3；E 和其他两个顶点相连，因此，E 的度为 2。 路径是顶点 v1, v2,…,vk 的一个连续序列，其中 vi 和 vi+1 是相邻的。以上一示意图中的图为例， 其中包含路径 A B E I 和 A C D G。
简单路径要求不包含重复的顶点。举个例子，A D G 是一条简单路径。除去最后一个顶点（因 为它和第一个顶点是同一个顶点），环也是一个简单路径，比如 A D C A（最后一个顶点重新回到 A）。

### 有向图

如果图中不存在环，则称该图是无环的。如果图中每两个顶点间都存在路径，则该图是连通的。

![图](http://or2vgb0pq.bkt.clouddn.com//18-10-29/45067468.jpg)

图还可以是未加权的（目前为止我们看到的图都是未加权的）或是加权的。如下图所示，加 权图的边被赋予了权值：

![加权图](http://or2vgb0pq.bkt.clouddn.com/18-10-29/23327009.jpg)

我们可以使用图来解决计算机科学世界中的很多问题，比如搜索图中的一个特定顶点或搜索 一条特定边，寻找图中的一条路径（从一个顶点到另一个顶点），寻找两个顶点之间的最短路径， 以及环检测。

### 邻接矩阵

图最常见的实现是邻接矩阵。每个节点都和一个整数相关联，该整数将作为数组的索引。我 们用一个二维数组来表示顶点之间的连接。如果索引为 i 的节点和索引为 j 的节点相邻，则 array[i][j] === 1，否则 array[i][j] === 0，如下图所示
![邻接矩阵](http://or2vgb0pq.bkt.clouddn.com//18-10-29/71130959.jpg)

### 邻接表

我们也可以使用一种叫作邻接表的动态数据结构来表示图。邻接表由图中每个顶点的相邻顶 点列表所组成。存在好几种方式来表示这种数据结构。我们可以用列表（数组）、链表，甚至是 散列表或是字典来表示相邻顶点列表。下面的示意图展示了邻接表数据结构
![邻接表](http://or2vgb0pq.bkt.clouddn.com//18-10-29/43873809.jpg)

### 关联矩阵

我们还可以用关联矩阵来表示图。在关联矩阵中，矩阵的行表示顶点，列表示边。如下图所 示，我们使用二维数组来表示两者之间的连通性，如果顶点 v 是边 e 的入射点，则 array[v][e] === 1； 否则，array[v][e] === 0

![关联矩阵](http://or2vgb0pq.bkt.clouddn.com//18-10-29/9738760.jpg)

```JavaScript

//需要用到的队列类
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
//需要用到字典类型
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

function Graph() {
  //用一个数组存储顶点的名字
  var vertices = []
  //用一个字典存储邻接表
  var adjList = new Dictionary()
  //这个方法接受顶点v作为参数
  this.addVertex = function(v) {
    //将顶点加到顶点列表中
    vertices.push(v)
    // 在邻接表中设置v为键对于值为一个空数组
    adjList.set(v, [])
  }
  //这个方法接受两个顶点作为参数
  this.addEdge = function(v, w) {
    // 通过将w加入到v的邻接表中，我们添加了一条自顶 点v到顶点w的边
    adjList.get(v).push(w)
    // 无向图我们需要添加一条自w向v的边
    adjList.get(w).push(v)
  }
  //实现一下Graph类的toString方法，以便于在控制台输出图
  this.toString = function() {
    var s = ''
    for (var i = 0; i < vertices.length; i++) {
      s += vertices[i] + ' -> '
      var neighbors = adjList.get(vertices[i])
      for (var j = 0; j < neighbors.length; j++) {
        s += neighbors[j] + ' '
      }
      s += '\n'
    }
    return s
  }
  var initializeColor = function() {
    var color = []
    for (var i = 0; i < vertices.length; i++) {
      color[vertices[i]] = 'white' //1
    }
    return color
  }
  // 广度优先搜索
  this.bfs = function(v, callback) {
    var color = initializeColor() //2
    var queue = new Queue() //3
    queue.enqueue(v) //4

    while (!queue.isEmpty()) {
      //5
      var u = queue.dequeue() //6
      var neighbors = adjList.get(u) //7
      color[u] = 'grey' //8
      for (var i = 0; i < neighbors.length; i++) {
        //9
        var w = neighbors[i] //10
        if (color[w] === 'white') {
          //11
          color[w] = 'grey' //12
          queue.enqueue(w) //13
        }
      }
      color[u] = 'black' //14
      if (callback) {
        //15
        callback(u)
      }
    }
  }
}

}
// 测试这段代码：
var graph = new Graph()
var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
for (var i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i])
}
graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')
console.log(graph.toString())
function printNode(value) {
  console.log('Visited vertex: ' + value)
}
//广度优先搜索
graph.bfs(myVertices[0], printNode)
// 输出结果为:

/**
  A -> B C D
  B -> A E F
  C -> A D G
  D -> A C G H
  E -> B I
  F -> B
  G -> C D
  H -> D
  I -> E

  Visited vertex: A
  Visited vertex: B
  Visited vertex: C
  Visited vertex: D
  Visited vertex: E
  Visited vertex: F
  Visited vertex: G
  Visited vertex: H
  Visited vertex: I
*/
```

<disqus/>
