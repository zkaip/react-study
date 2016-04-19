import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

// 展示型组件
class Counter extends Component {
  render(){
    const {value, onIncreaseClick, onDecreaseClick} = this.props
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>戳我+1</button>
        <button onClick={onDecreaseClick}>戳我-1</button>
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired
}
// Action
const increaseAction = {type: 'INCREASE'},
      decreaseAction = {type: 'DECREASE'}

// Reducer
function counter (state = { count:0 }, action) {
  let count = state.count
  switch (action.type) {
    case 'INCREASE':
      return {count: count + 1}
    case 'DECREASE':
      return {count: count - 1}
    default:
      return state
  }
}

// Store
const store = createStore(counter)

// Map redux state to component props
function mapStateToProps (state) {
  // 拿到的state就是store里面的state
  return {
    value: state.count
  }
}

// Map Redux actions to component props
function mapDispatchToProps (dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction),
    onDecreaseClick: () => dispatch(decreaseAction)
  }
}

class App extends Component {
  render(){
    console.log('props:',this.props)
    return (
      <div>
        <h1>学习使用 react-redux</h1>
        <Counter {...this.props}/>
      </div>
    )
  }
}

// Connected Component
const RootApp = connect(mapStateToProps,mapDispatchToProps)(App)

// 最终 render
ReactDOM.render(
  <Provider store={store}>
    <RootApp/>
  </Provider>,
  document.getElementById('app')
)