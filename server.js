var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    expressJWT = require('express-jwt'),
    config = require('./config/variables.js'),
    routes = require('./routers/main.js'),
    app = express();

// ***** DATABASE ***** //
mongoose.connect(config.db, function() {
  console.log('\nremote database connection established at ' + config.db + '\n');
  require('./seed.js')
});

// ***** MIDDLEWARE ***** //
// Use the body-parser middleware to enable us to read the req.body
app.use(bodyParser.json());
// Allow us to transform user[name] syntax into { user: { name: }}
app.use(bodyParser.urlencoded({ extended: true }));
// Look for _method value in a request and replace the POST method (for PUT, PATCH or DELETE methods)
app.use(methodOverride(function(req, res) {
  if (req.body && typeof req.body === "object" && "_method" in req.body) {
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

// ***** ROUTING ***** //
// Set the static files directory
app.use(express.static(__dirname + '/public'));

// Set up expressJWT to authenticate all api routes except the login and register forms (see documentation for more information)
app.use('/api', expressJWT({
  secret: config.secret,
  getToken: function(req){
    return req.headers.token || null;
  }
})
.unless({
  path: [
    { url: '/api/login', methods: ['POST'] },
    { url: '/api/register', methods: ['POST'] }
  ]
}));
// Connect to all prescribed routes
app.use('/api', routes);

// Catch extraneous GET requests for the HTML page
app.get('*', function(req, res) {
  return res.sendFile(__dirname + '/public/index.html');
});

// ***** LISTEN ***** //
app.listen(config.port, function() {
  console.log('\napp is running on port ' + config.port + '\n');
});

module.exports = app;
