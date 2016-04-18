import { createStore } from 'redux'
import reducer from './reducer/index.js'

const store = createStore(reducer)

store.dispatch({
  type: 'ADD_TODO',
  text: 'Use Redux'
})

store.dispatch({
  type: 'DECREMENT'
})

console.log('改变后的 state :',store.getState())
