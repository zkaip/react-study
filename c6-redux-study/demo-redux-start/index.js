import { createStore } from 'redux'

// reducer
const todos = (state = [''], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return Object.assign([],state,[action.text]);
    default:
      return state;
  }
}

let store = createStore(todos,['Use Redux'])

// action creator
function addTodo (text) {
  return {
    type: 'ADD_TODO',
    text
  }
}

// handle change
function handleChange () {
  console.log(store.getState())
}

store.subscribe(handleChange)

handleChange()

// dispatch(action)
store.dispatch(addTodo('Read the docs'))
store.dispatch(addTodo('Read about the middleware'))