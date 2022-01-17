

let memoizedState = [];
let currentCursor = 0;

function useState(initialState) {
  memoizedState[currentCursor] = memoizedState[currentCursor] || {
    state: initialState,
    action: null
  };
  const cursor = currentCursor
  currentCursor++

  if (memoizedState[cursor].action) {
    memoizedState[cursor].state = memoizedState[cursor].action(memoizedState[cursor].state)
    memoizedState[cursor].action = null
  }
  return [memoizedState[cursor].state, dispatchAction.bind(null, cursor)]
}

function dispatchAction(cursor, action) {
  if (memoizedState[cursor].action === null) {
    memoizedState[cursor].action = action
  }
  schedule()
}

function App(params) {
  const [count, updateCount] = useState(0)
  const [count2, updateCount2] = useState(0)

  return (
    <div>
      <button onClick={() => updateCount(e => e + 10)}>{count}</button>
      <button onClick={() => updateCount2(e => e + 20)}>{count2}</button>
    </div>
  )
}

function schedule() {
  currentCursor = 0
  render();
}

schedule()

function render() {
  ReactDOM.render(App(), document.getElementById('root'));
}