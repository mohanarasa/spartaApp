var User = require('../models/user');
var type = "client";

//Get all spartans
function index(req, res) {
	User.find({type: type}, function(err, users){
		if (err) return res.status(500).json({message: "Something went wrong"});
		if (!users) return res.status(404).json({message: err});

		return res.status(200).json(users);
	});
}

// find user with a specific id and type of spartan
function show(req, res){
	User.findById(req.params.id, function(err, user){
		if(err) return res.status(500).json({message: "could not get spartan from database"});
		if(!user) return res.status(404).json({message: err});
		return res.status(200).json(user);
	});
}

function update(req, res) {
	User.findByIdAndUpdate(req.params.id, {$set: req.body.update}, { new: true}, function(err, user){
		if (err) return res.status(500).json({message: "could not get spartan from database"});
		if(!user) return res.status(404).json({message: err});

		return res.status(200).json(user);
	});
}

function remove(req, res) {
	console.log("delete api");
	User.findByIdAndRemove(req.params.id, function(err){
		if (err) return res.status(500).json({message: "Something went wrong"});
		return res.status(200).json({message: "success"});
	});
}

function name(req, res) {
	User.find({type: type, firstName: new RegExp(req.params.name, "i")}, function(err, users){
		if (err) return res.status(500).json({message: "Something went wrong"});
		if (!users) return res.status(404).json({message: err});

		return res.status(200).json(users);
	});
}

module.exports = {
  show: show,
  index: index,
  update: update,
  delete: remove,
	name: name
}
