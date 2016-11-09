var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require("react-router");
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Router = ReactRouter.Router;
var browserHistory = ReactRouter.browserHistory;

var Login = require("./components/body/login.jsx");
var Register = require("./components/body/register.jsx");
var Main = require("./components/main.jsx");
var Dashboard = require("./components/body/dashboard.jsx");
var Profile = require("./components/body/profile.jsx");
var Edit = require("./components/body/edit.jsx");
var Create = require("./components/body/create.jsx");

require('../scss/style.scss');

function authentication(nextState, replace) {
  if (!localStorage.getItem("token")) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

var App = React.createClass({
  render: function() {
    return (
      <Router history={browserHistory}>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>

  		  <Route path="/" component={Main} onEnter={authentication}>
  			 <IndexRoute component={Dashboard}/>

         <Route path="profile">
          <Route path=":id" component={Profile}/>
          <Route path=":id/edit" component={Edit}/>
         </Route>

         <Route path="admin">
          <Route path="create" component={Create}/>
          <Route path="edit" component={Edit}/>
         </Route>
  		  </Route>
	     </Router>
    )
  }
});

ReactDOM.render(<App />, document.getElementById('app'), function() {
  console.log('react app rendered successfully onto the dom!');
})
