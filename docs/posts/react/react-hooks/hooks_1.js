let hook = null;
let isMount = true

function useState(initialState) {
  if (isMount) {
    hook = {
      state: initialState,
      action: null
    }
  }
  if (hook.action) {
    hook.state = hook.action(hook.state)
  }
  return [hook.state, dispatchAction]
}
function dispatchAction(action) {
  if (hook.action === null) {
    hook.action = action;
  }
  schedule();
}
// 调度器
function schedule() {
  App();
  isMount = false
}
function App() {
  const [count, updateCount] = useState(0)
  return render('button', {
    onclick: () => updateCount(e => e + 10),
    innerText: count
  })
}

function render(nodeType, props) {
  const root = document.getElementById('root');
  const dom = document.createElement(nodeType);

  for (let attr in props) {
    dom[attr] = props[attr];
  }

  root.innerHTML = '';
  root.append(dom);
}
schedule()