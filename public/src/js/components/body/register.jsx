var React = require("react");
var browserHistory = require("react-router").browserHistory;
var MainDispatcher = require("../../dispatchers/mainDispatcher");
var MainConstant = require("../../constants/mainConstant");
var UserStore = require("../../stores/user");

var Register = React.createClass({
  getInitialState: function(){
    return {
      email: "",
      type: "client",
      password: "",
      passwordConfirmation: ""
    }
  },
  handleChange: function(e){
    this.setState(
      (e.target.name === "email") ? {email: e.target.value} : (e.target.name === "password") ? {password: e.target.value} : {passwordConfirmation: e.target.value}
    )
  },
  handleSubmit: function(e){
    e.preventDefault();
    MainDispatcher.dispatch({
      action: MainConstant.USER.REGISTER,
      user: this.state
    });
  },
  render: function(){
    return (
      <div className="row">
        <div className="large-5 large-centered columns">
          <div className="signup-panel">
            <form onSubmit={this.handleSubmit}>
            <div className="logo">
              <img src="http://spartaglobal.com/wp-content/uploads/2014/09/promotion-to-sparta-consulting.png" alt="logo" />
            </div>
              <div className="row collapse">
                <div className="small-2 columns">
                  <span className="prefix"><i className="fi-mail"></i></span>
                </div>
                <div className="small-10  columns">
                  <input type="text" placeholder="email" name="email" onChange={this.handleChange}/>
                </div>
              </div>

              <div className="row collapse">
                <div className="small-2 columns ">
                  <span className="prefix"><i className="fi-lock"></i></span>
                </div>
                <div className="small-10 columns ">
                  <input type="password" placeholder="password" name="password" onChange={this.handleChange}/>
                </div>
              </div>


              <div className="row collapse">
                <div className="small-2 columns ">
                  <span className="prefix"><i className="fi-lock"></i></span>
                </div>
                <div className="small-10 columns ">
                  <input type="password" placeholder="confirm password" name="passwordConfirmation" onChange={this.handleChange}/>
                </div>
                <div className="small-10 columns ">
                  <button type="submit" className="expanded button" >Register</button>
                  <p className="signup">Already a member? <a href="/login">Login here</a></p>  
                </div>
            </div>
            
            </form>
          </div>
        </div>
       </div>
    )
  }
});

module.exports = Register;
