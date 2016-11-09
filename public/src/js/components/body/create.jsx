var React = require('react');
var browserHistory = require("react-router").browserHistory;
var MainDispatcher = require('../../dispatchers/mainDispatcher');
var MainConstant = require("../../constants/mainConstant");
var UserStore = require("../../stores/user");

var Create = React.createClass({
	getInitialState: function(){
		return {
			firstName: "",
			lastName: "",
			course: "",
			available: false,
			type: "spartan",
			password: "",
			passwordConfirmation: ""
		}
	},
	handleSubmit: function(e) {
		e.preventDefault();
		if (this.state.password !== this.state.passwordConfirmation){
			console.log("you got password wrong!");
		} else {
			console.log(this.state);
			MainDispatcher.dispatch({
				action: MainConstant.USER.REGISTER,
				user: this.state
			});
		}
	},
	handleChange: function(e){
		var obj = {}
		obj[e.target.name] = (e.target.name !== "available") ? e.target.value : e.target.checked;
		this.setState(obj);
	},
	render: function(){
		return (
			<section className="admin-create-form">
				<h2 className="admin-create-title">Create a New User</h2>
        		<form onSubmit={this.handleSubmit}>
        			<label htmlFor="firstname">First Name:</label>
          			<input type="text" placeholder="Enter the first name" name="firstName" onChange={this.handleChange} required/>

          			<label htmlFor="lastname">Last Name:</label>
          			<input type="text" placeholder="Enter the last name" name="lastName" onChange={this.handleChange} required/>

          			<label htmlFor="course">Course:</label>
          			<input type="text" placeholder="Enter the course name" name="course" onChange={this.handleChange} required/>

          			<label htmlFor="available" className="tick-box">If user is <strong>Available</strong>, tick checkbox:</label>
          			<input type="checkbox" name="available" onChange={this.handleChange}/><br />

          			<label htmlFor="email">Email:</label>
          			<input type="email" placeholder="Enter an email address" name="email" onChange={this.handleChange} required/>

          			<label htmlFor="password">Password:</label>
          			<input type="password" placeholder="Enter a password" name="password" onChange={this.handleChange} required/>

          			<label htmlFor="passwordConfirmation">Confirm Password:</label>
          			<input type="password" placeholder="Enter password confirmation" name="passwordConfirmation" onChange={this.handleChange} required/>

          			<button type="submit" className="expanded button">Register</button>
        		</form>
      		</section>
		)
	}
})

module.exports = Create;