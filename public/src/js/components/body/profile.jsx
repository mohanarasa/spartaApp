var React = require("react");

var browserHistory = require("react-router").browserHistory;
var MainDispatcher = require("../../dispatchers/mainDispatcher"); // requiring dispatcher
var MainConstant = require("../../constants/mainConstant"); // requiring constant
var UserStore = require("../../stores/user"); // require user store
var ProfileStore = require("../../stores/profile"); // require profile store

var List = require("./profile/lists.jsx");

var Profile = React.createClass({
	getInitialState: function(){ // getting the current logged in user
		return {
			profile: {
			},
			user: UserStore.getUser(),
			loading: false
		}
	},
	componentWillMount: function(){ // before the component is loaded, get the data
		this.getProfileDetails(this.state.user.id);
	},
	componentDidMount: function(){ // after the component is loaded, update the data
		ProfileStore.on(MainConstant.PROFILE.UPDATE, function(){
			this.setState({
				profile: ProfileStore.getProfile(),
				update: ProfileStore.getProfile(),
				loading: true
			})
		}.bind(this));
	},
	handleArrays: function(name, index, value){
		this.state.update.profile[name][index] = value;
	},
	handleChange: function(e){
		console.log(e.target.checked, e.target.name === "available")
		if (e.target.name === "summary" || e.target.name === "image") {
			this.state.update.profile[e.target.name] = e.target.value;
		} else {
			//this.state.update[e.target.name] = (e.target.name === "available") ? e.target.checked : e.target.value;
			var obj = {};
			obj[e.target.name] = (e.target.name === "available") ? e.target.checked : e.target.value;

			//this.state.update[e.target.name] = (e.target.name === "available") ? e.target.checked : e.target.value;
			this.setState({
				update: obj
			});
		}
  },
	getProfileDetails: function(available){ // dispatches information depending on type of user
		MainDispatcher.dispatch({
			action: MainConstant.PROFILE.SPARTAN,
			id: this.props.params.id
		});
	},
	handleSubmit: function(e){
		e.preventDefault();
		console.log("submit", this.state.update)
		MainDispatcher.dispatch({
			action: MainConstant.PROFILE.EDIT,
			id: this.props.params.id,
			updated: this.state.update
		});
	},
	handleDelete: function(id, type) {
		MainDispatcher.dispatch({
			action: MainConstant.PROFILE.DELETE,
			id: id,
			type: type
		});
		if(this.state.user._id === this.state.profile._id){
			localStorage.removeItem("user");
		    localStorage.removeItem("token");
		    browserHistory.push("/login");
		}
	},
	addArray: function(name){
		var obj = this.state.update.profile[name];
    obj.push("");
		//this.state.update.profile[name].push("");
		this.setState({
			profile:{
				profile: obj
			}
		})
		console.log("add array", name);
	},
	removeArray: function(name, index){
		this.state.update.profile[name].splice(index, 1);
		this.setState({
			profile:{
				profile: this.state.update.profile[name]
			}
		});
	},
	render: function(){
		if (this.state.loading){
			var profile = this.state.update.profile;
			console.log(profile);
			var self = this;
		return (
			<div className="row container">
				<div>
          			<form onSubmit={this.handleSubmit}>
            			<div className="row column profile-form">
              				<h2 className="text-center">Personal Profile</h2>

              				<div className="media-object stack-for-small">
								<div className="media-object-section">
									<img className="thumbnail" src={profile.image}/>
								</div>
								<div className="media-object-section">
									<h5>
										<label  id="pfield">First Name
				      						{
				      							(this.state.user._id === this.props.params.id || this.state.user.type === MainConstant.PROFILE.TYPE.ADMIN) ?
				      							(<input type="text" id="pfname" name="firstName" defaultValue={ this.state.profile.firstName } onChange={this.handleChange}/>)
				      							: (<div>{this.state.profile.firstName}</div>)
				      						}
				      					</label>
									</h5>
									<h5>
										<label  id="pfield">Last Name
				      						{
				      							(this.state.user._id === this.props.params.id || this.state.user.type === MainConstant.PROFILE.TYPE.ADMIN) ?
				      							(<input type="text" name="lastName" defaultValue={ this.state.profile.lastName } onChange={this.handleChange}/>)
				      							: (<div>{this.state.profile.lastName}</div>)
				      						}
				      					</label>
									</h5>
										{
											(this.state.user.type === MainConstant.PROFILE.TYPE.SPARTAN) ?
												(<h4>
													<label> Course
									        			{
									      					(this.state.user._id === this.props.params.id || this.state.user.type === MainConstant.PROFILE.TYPE.ADMIN) ?
									      					(<input type="text" name="course" defaultValue={ this.state.profile.course } onChange={this.handleChange}/>)
									      					: (<div>{this.state.profile.course}</div>)
									      				}
									        		</label>
												</h4>
											) : ""
										}
									<h4>
										<label id="pfield"> Email
											{
						      					(this.state.user._id === this.props.params.id || this.state.user.type === MainConstant.PROFILE.TYPE.ADMIN) ?
						      					(<input type="text" name="email" defaultValue={ this.state.profile.email } onChange={this.handleChange}/>)
						      					: (<div>{this.state.profile.email}</div>)
						      				}
										</label>
									</h4>
									<h4>
										{ (this.state.user._id === this.props.params.id || this.state.user.type === MainConstant.PROFILE.TYPE.ADMIN) ?
											(<label id="pfield"> Profile Image
												
							      					<input type="text" name="image" defaultValue={ profile.image } onChange={this.handleChange}/>
											</label>
											) : ""
										}	
									</h4>
								</div>
								{
									(this.state.profile.type === MainConstant.PROFILE.TYPE.SPARTAN) ?
									(
										<h4>
											<label id="pfield"> Available
											{
														(this.state.user._id === this.props.params.id || this.state.user.type === MainConstant.PROFILE.TYPE.ADMIN) ?
														(<div><input type="checkbox" name="available" defaultValue={this.state.update.available} defaultChecked={this.state.update.available} onChange={this.handleChange}/></div>)
														: (<div>{MainConstant.TRANSFORM.AVAILABLE(this.state.profile.available)}</div>)
													}
											</label>
										</h4>
									) : ""
								}
							</div>
						</div>

			        	{
			        		(this.state.user.type === MainConstant.PROFILE.TYPE.CLIENT) ?
			        		(<a href="mailto:oholden@spartaglobal.com" className="button large expanded">Enquire Now!</a>) : ""
			        	}

			        	
						   
					    		
						    	<div className="media-object stack-for-small profileDetail">
						    		<div className="panel comment-wrapper summary">
										<label className="pfieldDetails pfield">Summary
				      						{
				      							(this.state.user._id === this.props.params.id || this.state.user.type === MainConstant.PROFILE.TYPE.ADMIN) ?
				      							(<input type="text" name="summary" defaultValue={ profile.summary } onChange={this.handleChange}/>)
				      							: (<div>{profile.summary}</div>)
				      						}
						      			</label>
									</div>
									<div className="panel comment-wrapper experience">
									{
										(this.state.user._id === this.props.params.id || this.state.user.type === MainConstant.PROFILE.TYPE.ADMIN) ?
											<button type="button" className="button" onClick={(function(){return this.addArray("experience")}).bind(this)}>Add Experiences</button>
										: ""
									}
										<label className="pfieldDetails pfield">
										Experiences
											{
												profile.experience.map(function(exp, i) {
													return (
														(this.state.user._id === this.props.params.id || this.state.user.type === MainConstant.PROFILE.TYPE.ADMIN) ?
														(	<List key={i} index={i} value={exp} name="experience" add={this.handleArrays} remove={this.removeArray}/> )
														:
														(<div key={i}>{ exp }</div>)
													)
												}.bind(this))
											}
								      	</label>
									</div>
									<div className="panel comment-wrapper skills">
										{/* SKILLS */}
										{
											(this.state.user._id === this.props.params.id || this.state.user.type === MainConstant.PROFILE.TYPE.ADMIN) ?
												<button type="button" className="button" onClick={(function(){return this.addArray("skills")}).bind(this)}>Add Skills</button>
											: ""
										}

										<label className="pfieldDetails pfield">
										Skills
						      				{
														profile.skills.map(function(skill, i) {
															return (
							      						(this.state.user._id === this.props.params.id || this.state.user.type === MainConstant.PROFILE.TYPE.ADMIN) ?
							      						( <List key={i} index={i} value={skill} name="skills" add={this.handleArrays} remove={this.removeArray}/> )
							      						: (<div key={i}>{skill}</div>)
															)
													}.bind(this))
						      				}
								      	</label>
									</div>
									{/* PROJECTS */}
									<div className="panel comment-wrapper projects">
									{
										(this.state.user._id === this.props.params.id || this.state.user.type === MainConstant.PROFILE.TYPE.ADMIN) ?
										(<button type="button" className="button" onClick={(function(){return this.addArray("projects")}).bind(this)}>Add Projects</button>)
										: ""
									}
										<label className="pfieldDetails pfield">
										Projects
						      				{
														profile.projects.map(function(project, i) {
															return (
							      						(this.state.user._id === this.props.params.id || this.state.user.type === MainConstant.PROFILE.TYPE.ADMIN) ?
							      						( <List key={i} index={i} value={project} name="projects" add={this.handleArrays} remove={this.removeArray}/> )
							      						: (<div key={i}>{project}</div>)
															)
													}.bind(this))
												}
						      			</label>
									</div>

									{/* INTERESTS */}
									<div className="panel comment-wrapper interests">
									{
										(this.state.user._id === this.props.params.id || this.state.user.type === MainConstant.PROFILE.TYPE.ADMIN) ?
											<button type="button" className="button" onClick={(function(){return this.addArray("interests")}).bind(this)}>Add Interests</button>
										: ""
									}
										<label className="pfieldDetails pfield">
										Interests
						      				{
														profile.interests.map(function(interest, i) {
															return (
							      						(this.state.user._id === this.props.params.id || this.state.user.type === MainConstant.PROFILE.TYPE.ADMIN) ?
							      						( <List key={i} index={i} value={interest} name="interests" add={this.handleArrays} remove={this.removeArray}/> )
							      						: (<div key={i}>{interest}</div>)
															)
														}.bind(this))
						      				}
								      	</label>
									</div>
								</div>
					    	
					    
					  	<div className="footer_hotfix">
					    	{
		      					(this.state.user._id === this.props.params.id || this.state.user.type === MainConstant.PROFILE.TYPE.ADMIN) ?
		      					(<button className="button" onClick={this.handleSubmit}>Save</button>)
		      					: ""
			      			}

					    	{
		      					(this.state.user._id === this.props.params.id || this.state.user.type === MainConstant.PROFILE.TYPE.ADMIN) ?
		      					(<button className="alert button" onClick={(function(){return this.handleDelete(this.state.profile._id, this.state.profile.type)}).bind(this)}>Delete</button>)
		      					: ""
			      			}
						</div>
					</form>
			    </div>
			</div>
		)
		} else {
			return (
				<h1>Loading...</h1>
			)
		}
	}
});

module.exports = Profile;
