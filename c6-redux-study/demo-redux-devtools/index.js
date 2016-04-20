import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import DevTools from './containers/DevTools'
import { createStore, compose } from 'redux';
import todoApp from './reducers'

const enhancer = compose(
  DevTools.instrument()
)

const store = createStore(todoApp,enhancer)
const rootElement = document.getElementById('app')

render(
  <Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>,
  rootElement)