var mongoose  = require("mongoose");

var profileSchema = mongoose.Schema({
  image: 		{ type: String },
  summary: 		{ type: String },
  experience: 	[{ role: String, company: String, date: String, description: String }],
  skills: 		{ name: String },
  projects: 	[{ name: String, description: String }],
  interests: 	{ name: String }

});

module.exports = mongoose.model("Profile", profileSchema);
