let isMount = true;
let workInProgressHook = null;

const fiber = {
  stateNode: App,
  memoizedState: null,
};

function useState(initialState) {
  let hook;
  if (isMount) {
    hook = {
      memoizedState: initialState,
      next: null,  // 链表
      queue: {   // 存储action的环形队列
        pending: null,
      },
    };
    if (!fiber.memoizedState) {
      fiber.memoizedState = hook;
    } else {
      workInProgressHook.next = hook;
    }
    workInProgressHook = hook;
  } else {
    // console.log('~~~ workInProgressHook', workInProgressHook)
    hook = workInProgressHook;
    workInProgressHook = workInProgressHook.next;
  }
  // 执行 action
  let baseState = hook.memoizedState;
  if (hook.queue.pending) {
    let firstUpdate = hook.queue.pending.next;
    do {
      const action = firstUpdate.action;
      baseState = action(baseState);
      firstUpdate = firstUpdate.next;
    } while (firstUpdate !== hook.queue.pending.next);
    hook.queue.pending = null;
  }
  hook.memoizedState = baseState;
  // return [baseState, dispatchAction.bind(null, hook.queue)];
  return [baseState, (action) => dispatchAction(hook.queue, action)];
}

function dispatchAction(queue, action) {
  const update = {
    action,
    next: null,
  };
  if (queue.pending === null) {
    // u0 -> u0
    update.next = update;
  } else {
    // u0 -> u1 ; u1 -> u0
    update.next = queue.pending.next;
    queue.pending.next = update;
  }
  queue.pending = update;
  schedule();
}

// 调度器
function schedule() {
  debugger
  workInProgressHook = fiber.memoizedState;
  render();
  isMount = false;
}

function App(params) {
  const [count, updateCount] = useState(0);
  const [count2, updateCount2] = useState(1);
  const [count3, updateCount3] = useState(2);
  console.log('isMount', isMount);
  console.log('count', count);
  console.log('count2', count2);

  return (
    <div>
      <button onClick={() => updateCount(e => e + 10)}>{count}</button>
      <button onClick={() => updateCount2(e => e + 20)}>{count2}</button>
    </div>
  )
}

schedule()

function render() {
  ReactDOM.render(fiber.stateNode(), document.getElementById('root'));
}