import React, {Component} from 'react'
import Button from '../components/Button/Button'

import 'bootstrap/dist/css/bootstrap.css'
import './App.less'

class App extends Component {
  render(){
    return (
      <div className="app">
        <Button />
        <div className="tip"></div>
        {/*我们使用图标字体*/}
         <span className="glyphicon glyphicon-asterisk"></span>
      </div>
    )
  }
}

export default App