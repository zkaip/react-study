import React, { Component, PropTypes } from 'react'
import {Router, Route, hashHistory, browserHistory, Link, IndexRoute, Redirect} from 'react-router'
import './App.css'

// Link

// const Home = () => <div><h1>Home</h1><Links /></div>
// const About = () => <div><h1>About</h1><Links /></div>
// const Contact = () => <div><h1>Contact</h1><Links /></div>

// const Links = () => 
//   <nav>
//     <Link activeClassName="active" /* activeStyle={{color: 'red'}} */ to="/">Home</Link>
//     <Link activeClassName="active" /* activeStyle={{color: 'red'}} */ to="/about">About</Link>
//     <Link activeClassName="active" /* activeStyle={{color: 'red'}} */ to="/contact">Contact</Link>
//   </nav>

// class App extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <Router history={browserHistory?browserHistory:hashHistory}>
//         <Route path="/" component={Home}></Route>
//         <Route path="/about" component={About}></Route>
//         <Route path="/contact" component={Contact}></Route>
//       </Router>
//     );
//   }
// }

// 嵌套路由
// const Home = (props) =>
//   <div>
//     <h1>Home</h1>
//     <Links />
//     {props.children}
//   </div>
  
// const About = (props) =>
//   <div>
//     <h1>About</h1>
//     <Links />
//     {props.children}
//   </div>
  
// const Contact = () =>
//   <div>
//     <h1>Contact</h1>
//     <Links />
//   </div>
  
// const Links = () =>
//   <nav>
//     <Link activeClassName="active" to="/">Home</Link>
//     <Link activeClassName="active" to="/about">About</Link>
//     <Link activeClassName="active" to="/about/contact">Contact</Link>
//   </nav>
  
// class App extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <Router history={browserHistory?browserHistory:hashHistory}>
//         <Route path="/" component={Home}>
//           <Route path="about" component={About}>
//             <Route path="contact" component={Contact} />
//           </Route>
//         </Route>
//       </Router>
//     );
//   }
// }

// IndexRoute
// const Home = (props) =>
//   <div>
//     <h1>Home</h1>
//     <Links />
//     {props.children}
//   </div>

// const About = () =>
//   <div>
//     <h1>About</h1>
//   </div>

// const Contact = () =>
//   <div>
//     <h1>Contact</h1>
//   </div>

// const Links = () =>
//   <nav>
//     <Link activeClassName="active" to="/">Home</Link>
//     <Link activeClassName="active" to="/contact">Contact</Link>
//   </nav>

// class App extends Component {
//   render() {
//     return (
//       <Router history={browserHistory}>
//         <Route path="/" component={Home}>
//           {/* 默认展示IndexRoute */}
//           <IndexRoute component={About} />
//           <Route path="contact" component={Contact} />
//         </Route>
//       </Router>
//     );
//   }
// }

// 路由变量 params
// const Message = (props) => 
//   <div>
//     <h1>{props.params.message || 'Hello React Router'}</h1>
//     <Links />
//   </div>
  
// const Links = () =>
//   <nav>
//     <Link activeClassName="active" to="/">Hello</Link>
//     <Link activeClassName="active" to="/yong">Yong</Link>
//     <Link activeClassName="active" to="/feng">Feng</Link>
//   </nav>

// class App extends Component {
//   render(){
//     return (
//       <Router history={browserHistory}>
//         <Route path="/(:message)" component={Message}/>
//       </Router>
//     )
//   }  
// }

// 路由查询 query
// const Page = (props) => 
//   <div>
//     <h1>{props.location.query.message || 'Hello React Router'}</h1>
//     <Links />
//   </div>
  
// const Links = () =>
//   <nav>
//     <Link activeClassName="active" to={{pathname:"/",query:{message:"guoyongfeng"}}}>guoyongfeng</Link>
//     <Link activeClassName="active" to={{pathname:"/",query:{message:"zkaip"}}}>zkaip</Link>
//   </nav>

// class App extends Component {
//   render(){
//     return (
//       <Router history={browserHistory}>
//         <Route path="/" component={Page}/>
//       </Router>
//     )
//   }  
// }

// Components in Route
// const HomeHeader = () => <h1>HomeHeader</h1>
// const HomeBody = () => <h1>HomeBody</h1>
// const AboutHeader = () => <h1>AboutHeader</h1>
// const AboutBody = () => <h1>AboutBody</h1>

// const Container = (props) =>
//   <div>
//     {props.header}
//     {props.body}
//     <Links />
//   </div>

// const Links = () =>
//   <nav>
//     <Link to="/">Hello</Link>
//     <Link to="/about">About</Link>
//   </nav>

// class App extends Component {
//   render() {
//     return (
//       <Router history={browserHistory}>
//         <Route path="/" component={Container}>
//           <IndexRoute components={{ header:HomeHeader, body:HomeBody }} />
//           <Route path="about" components={{ header:AboutHeader, body:AboutBody }} />
//         </Route>
//       </Router>
//     );
//   }
// }

// Redirect
// const Home = () => <div><h1>Home</h1><Links /></div>;
// const About = () => <div><h1>About</h1><Links /></div>;
// const Contact = () => <div><h1>Contact</h1><Links /></div>;

// const Links = () =>
//   <nav>
//     <Link to="/">Home</Link>
//     <Link to="/about">About</Link>
//     <Link to="/contact">Contact</Link>
//     <Link to="/contact-us">Contact US</Link>
//   </nav>

// class App extends Component {
//   render() {
//     return (
//       <Router history={browserHistory}>
//         <Route path="/" component={Home} />
//         <Route path="/about" component={About} />
//         <Route path="/contact-us" component={Contact} />
//         <Redirect from="/contact" to="/contact-us" />
//       </Router>
//     );
//   }
// }

// Hook 钩子函数
class Home extends Component {
  componentWillMount(){
    this.context.router.setRouteLeaveHook(
      this.props.route, 
      this.routerWillLeave
    )
  }
  routerWillLeave(nextLocation){
    return `页面即将从Home切换到${nextLocation.pathname}`
  }
  render(){
    return (
      <div>
        <h1>Home</h1>
        <Links />
      </div>
    )
  }
}

Home.contextTypes = {
  router: PropTypes.object.isRequired
}

const Links = () =>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/contact">Contact</Link>
  </nav>

const Contact = () => <div><h1>Contact</h1><Links /></div>

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home} />
        <Route path="/contact" component={Contact} />
      </Router>
    )
  }
}
export default App
