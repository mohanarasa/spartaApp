var mongoose  = require("mongoose");

var courseSchema = mongoose.Schema({
  title: { type: String }
});

module.exports = courseSchema;
