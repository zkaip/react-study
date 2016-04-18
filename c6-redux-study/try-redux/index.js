import {createStore} from 'redux'

// 创建 reducer
function counter (state = 0, action) {
  switch(action.type){
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

// 创建store
let store = createStore(counter)

// 渲染页面内容的函数
const PureRender = () => {
  document.body.innerText = store.getState()
}

// 手动订阅更新,事件绑定到视图层
store.subscribe(PureRender)

// 执行渲染函数
PureRender()

// 当点击按钮的时候,改变state<通过dispatch一个action>
document.addEventListener('click',(e) => {
  // 点击减少
  store.dispatch({type:'DECREMENT'})
})
