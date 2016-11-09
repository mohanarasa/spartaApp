var mongoose  = require("mongoose");
var bcrypt    = require("bcrypt-nodejs");
var validator = require("validator");

var userSchema = mongoose.Schema({
  firstName:    { type: String },
  lastName:     { type: String },
  course:       { type: String },
  available:    { type: Boolean },
  email:        { type: String, required: true, unique: true },
  type:         { type: String, enum: ['spartan', 'admin', 'client'], required: true },
  passwordHash: { type: String },
  profile:      {
    image: 		{ type: String },
    summary: 		{ type: String, default: "" },
    experience: [String],
    skills: 		[String],
    projects: 	[String],
    interests: 	[String]
  }
});

// Instance method to validate password
userSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.passwordHash, null);
}

// ***** VIRTUAL FIELDS ***** //
// Setup a virtual field of password so that we can use that instead of passwordHash
userSchema.virtual("password").set(function(password){
  // Save a temp variable to the user object so that we can still use the value
  this._password    = password;
  // Save the hashed password to the field passwordHash
  this.passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
});

// Setup a virtual field of passwordConfirmation so that we can compare with password
userSchema.virtual("passwordConfirmation").set(function(passwordConfirmation) {
  this._passwordConfirmation = passwordConfirmation;
});

// ***** VALIDATIONS ***** //
userSchema.path("passwordHash").validate(function(){
  if (this.isNew) {
    if (!this._password) {
      this.invalidate("password", "required");
    }
    if (this._password.length < 6) {
      this.invalidate("password", "must be greater than 6 characters");
    }
    if (this._password !== this._passwordConfirmation) {
      this.invalidate("passwordConfirmation", "must match the password");
    }
  }
});

userSchema.path("available").validate(function(available){
  if (this.type !== "spartan"){
    this.invalidate("available", "cannot add available for " + this.type);
  }
});

userSchema.path("course").validate(function(course){
  if (this.type !== "spartan" && this.course.length > 0){
    this.invalidate("course", "cannot add course for " + this.type);
  }
});

userSchema.path("email").validate(function(email) {
  if (!validator.isEmail(email)) {
    this.invalidate("email", "must be a valid email address");
  }
});

// ***** MODIFY JSON OUTPUT ***** //
// Blacklist the json output so that we don't share passwordHash
userSchema.set("toJSON", {
  transform: function(doc, ret, options) {
    delete ret.passwordHash;
    return ret;
  }
});

module.exports = mongoose.model("User", userSchema);
