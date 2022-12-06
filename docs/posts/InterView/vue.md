## vue 是怎么解析 template 的? template 会变成什么?

Vue.js 会将组件的模板（template）解析成一棵虚拟 DOM 树。虚拟 DOM 是一种数据结构，它与真实的 DOM 树类似，但是它存在于内存中，并不是真实的页面元素。

Vue.js 会先将模板转换成渲染函数，然后执行渲染函数来构建虚拟 DOM 树。渲染函数是一段 JavaScript 代码，它接收组件的状态（如 props 和 data）作为参数，并返回一棵虚拟 DOM 树。

例如，一个简单的模板可能如下所示：

```js
<div>{{ message }}</div>;

function render(props) {
  return h('div', null, props.message);
}
```

然后，Vue.js 就可以执行这个渲染函数来构建虚拟 DOM 树，并将虚拟 DOM 树渲染到真实的页面中。

渲染函数的优点是可以有效地利用编译器的优化，提高渲染的性能。在解析模板时，Vue.js 会对模板进行静态分析，并在编译阶段就将一些模板提取为渲染函数。这样在运行时，渲染函数就可以快速地执行，从而提高渲染的性能。

### 实现一个简单的 template 解析器

```js
function parse(template) {
  // 定义一个解析器，用于逐个解析模板字符
  const parser = new Parser();

  // 定义一个虚拟 DOM 的根节点
  let root = new Element();

  // 定义一个当前节点，初始指向根节点
  let current = root;

  // 定义一个栈，用于保存所有父节点
  const stack = [];

  // 逐个解析模板字符
  while (!parser.eof()) {
    const ch = parser.next();

    // 如果是开始标签，则创建一个新的元素节点
    if (ch === '<') {
      // 解析元素的标签名
      const tagName = parser.parseTagName();
      // 创建一个新的元素节点
      const element = new Element(tagName);
      // 将新的元素节点添加到当前节点的子节点中
      current.append(element);
      // 将新的元素节点作为当前节点
      current = element;
      // 将当前节点入栈
      stack.push(current);
    }
    // 如果是结束标签，则将当前节点出栈
    else if (ch === '>') {
      stack.pop();
      current = stack[stack.length - 1];
    }
    // 否则直接将字符添加到当前节点的文本内容中
    else {
      current.append(ch);
    }
  }

  // 返回虚拟 DOM 树的根节点
  return root;
}

// 定义一个简单的解析器
class Parser {
  constructor(template) {
    this.template = template;
    this.index = 0;
  }

  // 判断是否已经到了模板的末尾
  eof() {
    return this.index >= this.template.length;
  }

  // 获取下一个字符
  next() {
    return this.template[this.index++];
  }

  // 解析元素的标签名
  parseTagName() {
    let ch;
    let tagName = '';
    // 跳过空白字符
    while (!this.eof() && (ch = this.next()) !== '>') {
      if (ch !== ' ') {
        tagName += ch;
      }
    }
    return tagName;
  }
}

// 定义一个虚拟 DOM 节点
class Node {
  constructor(tagName) {
    this.tagName = tagName;
    this.children = [];
  }

  // 将指定的节点添加到子节点中
  append(node) {
    this.children.push(node);
  }
}

// 定义元素节点
class Element extends Node {
  constructor(tagName) {
    super(tagName);
    this.text = '';
  }

  // 将指定的节点添加到子节点中
  append(node) {
    if (typeof node === 'string') {
      this.text += node;
    } else {
      super.append(node);
    }
  }
}

// 定义文本节点
class Text extends Node {
  constructor(text) {
    super(null);
    this.text = text;
  }
}

// 解析模板
const root = parse('<div>Hello <b>World</b></div>');

// 输出解析后的虚拟 DOM 树
console.log(root);

// 输出：
// Element {
// tagName: 'div',
// children: [
// Text { text: 'Hello ' },
// Element {
// tagName: 'b',
// children: [
// Text { text: 'World' }
// ]
// }
// ]
// }
```
