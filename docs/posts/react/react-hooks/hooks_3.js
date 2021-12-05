
let hook = null
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
    hook.action = action
  }
  schedule()
}

function App(params) {
  const [count, updateCount] = useState(0)
  return <button onClick={() => updateCount(e => e + 20)}>{count}</button>;
}

function schedule() {
  render();
  isMount = false
}

schedule()
function render() {
  ReactDOM.render(App(), document.getElementById('root'));
}