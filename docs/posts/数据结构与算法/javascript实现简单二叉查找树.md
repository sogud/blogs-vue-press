---
title: JavaScript 实现简单二叉查找树
date: 2018-01-13 16:07:32
tags:
  - JavaScript
  - 算法
category: 前端
---

![二叉树](http://or2vgb0pq.bkt.clouddn.com//18-10-29/46844758.jpg)

二叉树：二叉树就是一种数据结构， 它的组织关系就像是自然界中的树一样。官方语言的定义是：是一个有限元素的集合,该集合或者为空、或者由一个称为根的元素及两个不相交的、被分别称为左子树和右子树的二叉树组成。

节点： 树中的每个元素称为一个节点，

根节点： 位于整棵树顶点的节点，它没有父节点。

子节点： 其他节点的后代

叶子节点: 没有子节点的元素称为叶子节点。

#### 二叉树创建代码的实现

> 创建二叉树

```javascript
// 声明根节点
var root = null
// 声明函数
function BinarSearchTree() {
  var Node = function(key) {
    this.key = key
    this.left = null
    this.right = null
  }

  // 这个方法会通过递归得调用自身，来找到新添加节点的合适位置
  var insertNode = function(node, newNode) {
    // 判断插入左节点还是右节点,然后递归调用
    if (newNode.key <= node.key) {
      if (node.left === null) {
        node.left = newNode
      } else {
        insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        insertNode(node.right, newNode)
      }
    }
    // 判断创建根节点还是插入子节点
    this.insert = function(key) {
      // 创建一个用来表示新节点的Node类实例，因此需要new一下Node类并传入需要插入的key值，它会自动初始化为左右节点为null的一个新节点
      var newNode = new Node(key)
      // 先判断树是否为空，若为空，新插入的节点就作为根节点，如不为空，调用一个辅助方法insertNode()方法，将根节点和新节点传入
      if (root === null) {
        root = newNode
      } else {
        insertNode(root, newNode)
      }
    }
  }
}
//定义要插入的二叉树
var nodes = [7, 3, 6, 2, 8, 13, 5, 15]
// 实例化二叉树函数
var _binarSearchTree = new BinarSearchTree()
// 遍历数组插入节点
nodes.forEach(key => {
  _binarSearchTree.insert(key)
})
//查看二叉树输出结果】
console.log(root)
```

#### 二叉树的中序遍历

中序遍历（LDR）是二叉树遍历的一种，也叫做中根遍历、中序周游。在二叉树中，先左后根再右。巧记：左根右。

中序便历可用于排序。

以下代码先查找最左叶子节点然后打印出来，如果没有最左叶子节点则打印根节点，最后打印右子节点。

> 中序遍历

```javascript
      var inOrderTraverseNode = function (node) {
        // 判断当前节点如果不为空则递归查找节点，按照左根右的顺序
        if (node !== null) {
          // 先查找左叶子节点，如果左叶子节点有值则递归此节点
          inOrderTraverseNode(node.left)
          // 如果没有左叶子节点则打印当前根节点
          console.log(node.key)
          // 最后查找右子节点
          inOrderTraverseNode(node.right)
        }
      }
      //中序遍历
      this.inOrderTraverse = function () {
        // 将二叉树根节点传入
        inOrderTraverseNode(root)
      }
    }
```

#### 二叉树的先序遍历

先序遍历(Pre-order)，按照根左右的顺序沿一定路径经过路径上所有的结点。在二叉树中，先根后左再右。巧记：根左右。

先序遍历常用于复制二叉树。

先序遍历与中序遍历代码很像，只不过先查找根节点打印出来，然后在查找最左叶子节点然后打印出来，最后打印右子节点。

> 先序遍历

```javascript
var preOrderTraverseNode = function(node) {
  if (node !== null) {
    // 先打印当前节点然后在查找左右子节点
    console.log(node.key)
    preOrderTraverseNode(node.left)
    preOrderTraverseNode(node.right)
  }
}
this.preOrderTraverse = function() {
  preOrderTraverseNode(root)
}
```

#### 二叉树的后序遍历

后序遍历（LRD）是二叉树遍历的一种，也叫做后根遍历、后序周游，可记做左右根。后序遍历有递归算法和非递归算法两种。在二叉树中，先左后右再根。巧记：左右根。

后序遍历实际应用于操作系统的文件系统遍历中。

后序遍历与上面两个遍历一样，这回变为左右根的顺序。

> 后序遍历

```javascript
this.postOrderTraverse = function() {
  postOrderTraverseNode(root)
}
var postOrderTraverseNode = function(node) {
  if (node !== null) {
    postOrderTraverseNode(node.left)
    postOrderTraverseNode(node.right)
    // 如果没有左右子节点最后打印根节点
    console.log(node.key)
  }
}
```

#### 二叉树查找最大值与最小值

二叉树的最左子节点为最小，最右节点为最大，按照这个规律我们只需要递归查找最左与最右子节点就可以查到最大与最下值。

> 查找最小节点

```javascript
var minNode = function(node) {
  if (node) {
    // 如果当前节点不为空并且含有左子节点
    while (node && node.left !== null) {
      node = node.left
    }
    return node.key
  }
}
// 查找最小节点
this.min = function() {
  return minNode(root)
}
```

> 查找最大节点

```javascript
var maxNode = function(node) {
  if (node) {
    // 如果当前节点不为空并且含有右子节点
    while (node && node.right !== null) {
      node = node.right
    }
    return node.key
  }
}
// 查找最大节点
this.max = function() {
  return maxNode(root)
}
```

#### 二叉树查找指定值

实现查找二叉树特定值这个方法首先检验 node 的合法性，如果为 null，直接退出，并返回 fasle。如果传入的 key 比当前传入 node 的 key 值小，它会继续递归查找 node 的左侧节点，反之，查找右侧节点。如果找到相等节点，直接退出，并返回 true。

> 查找指定值

```javascript
var searchNode = function(node, key) {
  // 如果节点为空则返回
  if (node === null) {
    return false
  }

  if (key < node.key) {
    // 如果查找值小于当前节点值则查找左子节点
    return searchNode(node.left, key)
  } else if (key > node.key) {
    // 如果查找值大于当前节点值则查找右子节点
    return searchNode(node.right, key)
  } else {
    return true
  }
}
// 查找指定节点
this.search = function(key) {
  return searchNode(root, key)
}
```

#### 移除节点

移除节点的实现情况比较复杂，它会有三种不同的情况：

1.  需要移除的节点是一个叶子节点

2.  需要移除的节点包含一个子节点

3.  需要移除的节点包含两个子节点

和实现搜索指定节点一元，要移除某个节点，必须先找到它所在的位置，因此移除方法的实现中部分代码和上面相同，其中，移除包含两个子节点的节点是最复杂的情况，它包含左侧节点和右侧节点，对它进行移除主要需要三个步骤：

1.  需要找到它右侧子树中的最小节点来代替它的位置
2.  将它右侧子树中的最小节点移除
3.  将更新后的节点的引用指向原节点的父节点

有点绕，但必须这样，因为删除元素后的二叉搜索树必须保持它的排序性质。

> 移除节点

```javascript
var removeNode = function(node, key) {
  if (node == null) {
    return null
  }
  if (key < node.key) {
    node.left = removeNode(node.left, key)
    return node
  } else if (key > node.key) {
    node.right = removeNode(node.right, key)
    return node
  } else {
    // 需要移除的是一个叶子节点
    if (node.left === null && node.right === null) {
      node = null
      return node
    }

    //需要移除的节点包含一个叶子节点

    if (node.left === null) {
      node = node.right
      return node
    } else if (node.left === null) {
      node = node.left
      return node
    }
    //需要移除的节点包含两个子节点
    var aux = findMinNode(node.right)
    node.key = aux.key
    node.right = removeNode(node.right, axu.key)
    return node
  }
}
var findMinNode = function(node) {
  if (node) {
    while (node && node.left !== null) {
      node = node.left
    }
    return node
  }
  return null
}
//移除节点
this.remove = function(key) {
  removeNode(root, key)
}
```

> 完整代码

```javascript
// 声明根节点
var root = null
// 声明函数
function BinarSearchTree() {
  var Node = function(key) {
    this.key = key
    this.left = null
    this.right = null
  }
  // 判断创建根节点还是插入子节点
  this.insert = function(key) {
    var newNode = new Node(key)
    if (root === null) {
      root = newNode
    } else {
      insertNode(root, newNode)
    }
  }
  // 判断插入左节点还是右节点
  var insertNode = function(node, newNode) {
    if (newNode.key <= node.key) {
      if (node.left === null) {
        node.left = newNode
      } else {
        insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        insertNode(node.right, newNode)
      }
    }
  }

  var inOrderTraverseNode = function(node) {
    // 判断当前节点如果不为空则递归查找节点，按照左根右的顺序
    if (node !== null) {
      // 先查找左叶子节点，如果左叶子节点有值则递归此节点
      inOrderTraverseNode(node.left)
      // 如果没有左叶子节点则打印当前根节点
      console.log(node.key)
      // 最后查找右子节点
      inOrderTraverseNode(node.right)
    }
  }
  //中序遍历
  this.inOrderTraverse = function() {
    // 将二叉树根节点传入
    inOrderTraverseNode(root)
  }

  var preOrderTraverseNode = function(node) {
    if (node !== null) {
      console.log(node.key)
      preOrderTraverseNode(node.left)
      preOrderTraverseNode(node.right)
    }
  }
  // 先序遍历
  this.preOrderTraverse = function() {
    preOrderTraverseNode(root)
  }

  var postOrderTraverseNode = function(node) {
    if (node !== null) {
      postOrderTraverseNode(node.left)
      postOrderTraverseNode(node.right)
      // 如果没有左右子节点最后打印根节点
      console.log(node.key)
    }
  }
  // 后序遍历
  this.postOrderTraverse = function() {
    postOrderTraverseNode(root)
  }

  var minNode = function(node) {
    if (node) {
      // 如果当前节点不为空并且含有左子节点
      while (node && node.left !== null) {
        node = node.left
      }
      return node.key
    }
  }
  // 查找最小节点
  this.min = function() {
    return minNode(root)
  }
  var maxNode = function(node) {
    if (node) {
      // 如果当前节点不为空并且含有右子节点
      while (node && node.right !== null) {
        node = node.right
      }
      return node.key
    }
  }
  //查找最大节点
  this.max = function() {
    return maxNode(root)
  }
  var searchNode = function(node, key) {
    // 如果节点为空则返回
    if (node === null) {
      return false
    }

    if (key < node.key) {
      // 如果查找值小于当前节点值则查找左子节点
      return searchNode(node.left, key)
    } else if (key > node.key) {
      // 如果查找值大于当前节点值则查找右子节点
      return searchNode(node.right, key)
    } else {
      return true
    }
  }
  // 查找指定节点
  this.search = function(key) {
    return searchNode(root, key)
  }
  var removeNode = function(node, key) {
    if (node == null) {
      return null
    }
    if (key < node.key) {
      node.left = removeNode(node.left, key)
      return node
    } else if (key > node.key) {
      node.right = removeNode(node.right, key)
      return node
    } else {
      // 需要移除的是一个叶子节点
      if (node.left === null && node.right === null) {
        node = null
        return node
      }

      //需要移除的节点包含一个叶子节点

      if (node.left === null) {
        node = node.right
        return node
      } else if (node.left === null) {
        node = node.left
        return node
      }
      //需要移除的节点包含两个子节点
      var aux = findMinNode(node.right)
      node.key = aux.key
      node.right = removeNode(node.right, axu.key)
      return node
    }
  }
  var findMinNode = function(node) {
    if (node) {
      while (node && node.left !== null) {
        node = node.left
      }
      return node
    }
    return null
  }
  //移除节点
  this.remove = function(key) {
    removeNode(root, key)
  }
}

var nodes = [7, 3, 6, 2, 8, 13, 5, 15]
var _binarSearchTree = new BinarSearchTree()
nodes.forEach(key => {
  _binarSearchTree.insert(key)
})
// 打印插入完的二叉树
console.log(root)
// 调用中序遍历方法
_binarSearchTree.inOrderTraverse()
// 调用先序遍历方法
_binarSearchTree.preOrderTraverse()
// 调用后序遍历方法
_binarSearchTree.postOrderTraverse()
// 查找最小值
console.log(_binarSearchTree.min())
// 查找最大值
console.log(_binarSearchTree.max())
// 查找特定值
console.log(_binarSearchTree.search(2))
// 删除节点
_binarSearchTree.remove(8)
_binarSearchTree.inOrderTraverse()
```

<script>
export default {
  mounted(){
     // 声明根节点
    var root = null;
    // 声明函数
    function BinarSearchTree() {
      var Node = function (key) {
        this.key = key;
        this.left = null;
        this.right = null;
      };
      // 判断创建根节点还是插入子节点
      this.insert = function (key) {
        var newNode = new Node(key)
        if (root === null) {
          root = newNode
        } else {
          insertNode(root, newNode)
        }
      }
      // 判断插入左节点还是右节点
      var insertNode = function (node, newNode) {
        if (newNode.key <= node.key) {
          if (node.left === null) {
            node.left = newNode
          } else {
            insertNode(node.left, newNode)
          }
        } else {
          if (node.right === null) {
            node.right = newNode
          } else {
            insertNode(node.right, newNode)
          }
        }

      }

      var inOrderTraverseNode = function (node) {
        // 判断当前节点如果不为空则递归查找节点，按照左根右的顺序
        if (node !== null) {
          // 先查找左叶子节点，如果左叶子节点有值则递归此节点
          inOrderTraverseNode(node.left)
          // 如果没有左叶子节点则打印当前根节点
          console.log(node.key)
          // 最后查找右子节点
          inOrderTraverseNode(node.right)
        }
      }
      //中序遍历
      this.inOrderTraverse = function () {
        // 将二叉树根节点传入
        inOrderTraverseNode(root)
      }

      var preOrderTraverseNode = function (node) {
        if (node !== null) {
          console.log(node.key)
          preOrderTraverseNode(node.left)
          preOrderTraverseNode(node.right)
        }
      }
      // 先序遍历
      this.preOrderTraverse = function () {
        preOrderTraverseNode(root)
      }

      var postOrderTraverseNode = function (node) {
        if (node !== null) {
          postOrderTraverseNode(node.left)
          postOrderTraverseNode(node.right)
          // 如果没有左右子节点最后打印根节点
          console.log(node.key)
        }
      }
      // 后序遍历
      this.postOrderTraverse = function () {
        postOrderTraverseNode(root)
      }

      var minNode = function (node) {
        if (node) {
          // 如果当前节点不为空并且含有左子节点
          while (node && node.left !== null) {
            node = node.left
          }
          return node.key
        }
      }
      // 查找最小节点
      this.min = function () {
        return minNode(root)
      }
      var maxNode = function (node) {
        if (node) {
          // 如果当前节点不为空并且含有右子节点
          while (node && node.right !== null) {
            node = node.right
          }
          return node.key
        }
      }
      this.max = function () {
        return maxNode(root)
      }
      var searchNode = function (node, key) {
        // 如果节点为空则返回
        if (node === null) {
          return false
        }

        if (key < node.key) {
          // 如果查找值小于当前节点值则查找左子节点
          return searchNode(node.left, key)
        } else if (key > node.key) {
          // 如果查找值大于当前节点值则查找右子节点
          return searchNode(node.right, key)
        } else {
          return true
        }
      }
      // 查找指定节点
      this.search = function (key) {
        return searchNode(root, key)
      }
      var removeNode = function (node, key) {
        if (node == null) {
          return null
        }
        if (key < node.key) {
          node.left = removeNode(node.left, key)
          return node
        } else if (key > node.key) {
          node.right = removeNode(node.right, key)
          return node
        } else {
          // 需要移除的是一个叶子节点
          if (node.left === null && node.right === null) {
            node = null
            return node
          }

          //需要移除的节点包含一个叶子节点

          if (node.left === null) {
            node = node.right
            return node
          } else if (node.left === null) {
            node = node.left
            return node
          }
          //需要移除的节点包含两个子节点
          var aux = findMinNode(node.right)
          node.key = aux.key
          node.right = removeNode(node.right, axu.key)
          return node
        }
      }
      var findMinNode = function (node) {
        if (node) {
          while (node && node.left !== null) {
            node = node.left
          }
          return node
        }
        return null
      }
      //移除节点
      this.remove = function (key) {
        removeNode(root, key)
      }
    }

    var nodes = [7, 3, 6, 2, 8, 13, 5, 15];
    var _binarSearchTree = new BinarSearchTree();
    nodes.forEach(key => {
      _binarSearchTree.insert(key)
    })
    // 打印插入完的二叉树
    console.log(root)
    // 调用中序遍历方法
    _binarSearchTree.inOrderTraverse()
    // 调用先序遍历方法
    _binarSearchTree.preOrderTraverse()
    // 调用后序遍历方法
    _binarSearchTree.postOrderTraverse()
    // 查找最小值
    console.log(_binarSearchTree.min())
    // 查找最大值
    console.log(_binarSearchTree.max())
    // 查找特定值
    console.log(_binarSearchTree.search(2));
    // 删除节点
    _binarSearchTree.remove(8)
    _binarSearchTree.inOrderTraverse()
  }
}
</script>
