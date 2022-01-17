const atom = (function() {
  const createElement = (tag, attrs, ...childs) => {
    return {tag, attrs, childs};
  };
  // 将 vdom 转换为真实 dom
  const render = (vdom, root) => {
    if (typeof vdom === 'string' || typeof vdom === 'number') {
      // 子元素如果是字符串，直接拼接字符串
      root.innerText += vdom;
      return;
    }
    const dom = document.createElement(vdom.tag);
    if (vdom.attrs) {
      for (let attr in vdom.attrs) {
        const value = vdom.attrs[attr];
        setAttribute(dom, attr, value);
      }
    }
    // 遍历子节点
    vdom.childs && vdom.childs.forEach(child => render(child, dom));
    // 将子元素挂载到其真实 DOM 的父元素上
    root.appendChild(dom);
  };

  // 设置 dom 节点属性
  const setAttribute = (dom, attr, value) => {
    if (attr === 'className') {
      attr = 'class';
    }
    // 处理事件
    if (/on\w+/.test(attr)) {
      attr = attr.toLowerCase();
      dom[attr] = value || '';
    } else if (attr === 'style' && value) {
      // 处理 style 样式，可以是个字符串或者对象
      if (typeof value === 'string') {
        dom.style.cssText = value;
      } else if (typeof value === 'object') {
        for (let styleName in value) {
          dom.style[styleName] =
            typeof value[styleName] === 'number'
              ? value[styleName] + 'px'
              : value[styleName];
        }
      }
    } else {
      // 其他属性
      dom.setAttribute(attr, value);
    }
  };

  const React = {
    createElement,
  };

  const ReactDOM = {
    render: (vdom, root) => {
      root.innerText = '';
      render(vdom, root);
    },
  };
  return {
    React,
    ReactDOM,
  };
})();
const { React, ReactDOM } = atom;
