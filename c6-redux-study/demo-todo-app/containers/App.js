import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import Footer from '../components/Footer'
import {addTodo, completeTodo, setVisibilityFilter, VisibilityFilters} from '../actions'

class App extends Component {
  render(){
    // connect() 注入
    const {dispatch, visibleTodos, visibilityFilter} = this.props
    return (
      <div>
       <AddTodo onAddClick={(text)=>dispatch(addTodo(text))}/>
        <TodoList todos={visibleTodos} onTodoClick={index => dispatch(completeTodo(index))}/>
        <Footer filter={visibilityFilter} onFilterChange={nextFilter=> {
          console.log('nextFilter:',nextFilter)
          dispatch(setVisibilityFilter(nextFilter))
        }}/> 
      </div>
    )
  }
}

App.propTypes = {
  visibleTodos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired,
  visibilityFilter: PropTypes.oneOf([
    'SHOW_ALL','SHOW_COMPLETED','SHOW_ACTIVE'
  ]).isRequired
}

function selectTodos (todos, filter) {
  console.log('todos, filter:',todos, filter)
  
  switch(filter){
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todos => !todos.completed)
  }
}

function select (state) {  
  console.log('selectTodos',selectTodos(state.todos, state.visibilityFilter))
  
  return {
    visibleTodos:selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter:state.visibilityFilter
  }
}

export default connect(select)(App)