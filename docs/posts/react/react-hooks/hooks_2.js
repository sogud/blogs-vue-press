
let hook = null
let isMount = true
let watchArr

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

function useEffect(fn, watch) {
  debugger
  let isChange = true
  if (watchArr) {
    isChange = !watch.every((e, i) => e === watchArr[i])
  }
  if (isChange) {
    watchArr = watch
    fn()
  }
}

function App(params) {
  const [count, updateCount] = useState(0)
  let aa = 0
  useEffect(() => {
    console.log('useEffect:', count);
  })
  return render('button', {
    innerText: count,
    onclick: () => updateCount(e => e + 10)
  })
}

function schedule(params) {
  App()
  isMount = false
}

schedule()

function render(nodeType, props) {
  const root = document.getElementById('root')
  let dom = document.createElement(nodeType)
  for (const key in props) {
    dom[key] = props[key]
  }
  root.innerHTML = ''
  root.append(dom)
}