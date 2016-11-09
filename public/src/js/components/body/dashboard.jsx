var React = require("react"); // requiring react
var browserHistory = require("react-router").browserHistory;
var MainDispatcher = require("../../dispatchers/mainDispatcher"); // requiring dispatcher
var MainConstant = require("../../constants/mainConstant"); // requiring constant
var UserStore = require("../../stores/user"); // require user store
var ProfileStore = require("../../stores/profile"); // require profile store
var Foundation = require ("../../../scss/style.scss");
var Link = require('react-router').Link;

import { Row, Column } from '../../../../node_modules/react-foundation-components/lib/grid'

var Dashboard = React.createClass({ // creating react component
	getInitialState: function(){ // getting the current logged in user
		return {
			profiles: ProfileStore.getProfiles(),
			user: UserStore.getUser(),
			type: "all",
			view: "spartan",
			search: ""
		}
	},
	componentWillUnmount: function(){

	},
	componentWillMount: function(){ // before the component is loaded, get the data
		this.getProfile("all", this.state.view);
	},
	componentDidMount: function(){ // after the component is loaded, update the data
		ProfileStore.on(MainConstant.DASHBOARD.UPDATE, function(){
			console.log("its updating");
			this.setState({
				profiles: ProfileStore.getProfiles()
			});
		}.bind(this));

		ProfileStore.on(MainConstant.USER.UPDATE.DELETE, function(){
			this.getProfile("all", this.state.view);
		}.bind(this))
	},
	getProfile: function(available, view){ // dispatches information depending on type of user
		console.log(view);
		if(this.state.user.type === "client") {
			MainDispatcher.dispatch({
				action: MainConstant.DASHBOARD.CLIENT,
				available: available,
				view: view
			});
		}
		else if(this.state.user.type === "spartan") {
			MainDispatcher.dispatch({
				action: MainConstant.DASHBOARD.SPARTAN,
				available: available,
				view: view
			});
		}
		else if(this.state.user.type === "admin") {
			MainDispatcher.dispatch({
				action: MainConstant.DASHBOARD.ADMIN,
				type: MainConstant.DASHBOARD.TYPE.SPARTAN,
				available: available,
				view: view
			});
		} else if (!this.state.user) {
			browserHistory.push("/login");
		}
	},
	handleChange: function(e){
			this.getProfile(e.target.value, this.state.view);
	},
	handleUserChange: function(e){
		this.setState({
			view: e.target.value
		});
		this.getProfile("all", e.target.value);
	},
	handleNewUser: function() {
		browserHistory.push("/admin/create");

	},
	handleEdit: function(id) {
		console.log(id);
		browserHistory.push("/profile/" + id);
	},
	handleDelete: function(id, type) {
		MainDispatcher.dispatch({
			action: MainConstant.PROFILE.DELETE,
			id: id,
			type: type
		});
		console.log(id+ "helloooo from delete!" + type);
	},
	handleUser: function(id){
		browserHistory.push("/profile/" + id);
	},
	handleSearch: function(){
		// MainDispatcher.dispatch({
		// 	action: MainConstant.DASHBOARD.SEARCH.NAME,
		// 	name: this.state.search
		// });
	},



	handleChangeSearch: function(e){
		//dispatch the current value of input to the profile store
		MainDispatcher.dispatch({
			action: MainConstant.DASHBOARD.SEARCH.NAME,
			name: e.target.value,
			view: this.state.view
		});
	},




	render: function(){ // renders html
		var profiles = this.state.profiles.map(function(profile, i) {
			// console.log(this.state.profile[i]._id);
			console.log(profile);
			var url = "/profile/"+profile._id;
			// var url ="#";
			return (
				<div className="container_dash">
					<Column className="dashdeet" key={i} small={12} medium={6} large={4} xlarge={4} xxlarge={4}>
						<div className="dashimg">
						<Link to={url}><img src={profile.profile.image || "http://orig05.deviantart.net/be21/f/2014/248/9/5/facebook_silhouette_by_macgalope11-d7y0982.png"}/></Link>
						</div>
						<div className="fullName">{profile.firstName} {profile.lastName}</div>
							{(profile.type  === "spartan")?<div className="course">course: {profile.course}</div>: ""}
							{(profile.type === "spartan")?<div className={"available " + profile.available}>{ MainConstant.TRANSFORM.AVAILABLE(profile.available) }</div>: ""}
							{ (this.state.user.type === "admin") ? (<button className="edit btn" onClick={(function(){return this.handleEdit(profile._id, profile.type)}).bind(this)}><i className="fa fa-pencil"></i> Edit</button>) : ""}
							{ (this.state.user.type === "admin") ? (<button className= "delete btn" onClick={(function(){return this.handleDelete(profile._id, profile.type)}).bind(this)}><i className="fa fa-trash"></i> Delete</button>) : ""}
					</Column>
				</div>
			)
		}.bind(this))
  		return (
    		<section className="dashboard">
					<Row className="ddl">
					<Column className="typeAndAvailability">
					{
						(this.state.user.type === "admin")?
						(<select id="checkType" onChange={this.handleUserChange}>
							<option value="spartan">spartan</option>
							<option value="client">client</option>
						</select>)
						: ""
					}
					{
						(this.state.view === "spartan")?
						<select id="checkAvailable" onChange={this.handleChange}>
							<option value="all">all</option>
							<option value="true">available</option>
							<option value="false">on-site</option>
						</select>
						: ""
					}


						{/* search field */}

						<section id="searchInput">
							<input type="text" placeholder="Search" onChange={this.handleChangeSearch}/>
							<button className="button" onClick={this.handleSearch}><i className="fa fa-search"></i>Search</button>
						</section>




						<section id="addSpartan">
							{(this.state.user.type === "admin") ? <i className="fa fa-plus" onClick={this.handleNewUser}></i> : ""}
						</section>
					</Column>
					</Row>
					<Row className="dashelements">
						{profiles}
					</Row>
    	</section>
  		)
	}
});

module.exports = Dashboard; // exporting dashboard
