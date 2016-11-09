var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var should = chai.should();
var expect = require('chai').expect;

chai.use(chaiHttp);

describe('App', function() {
  var token;
  var spartan;

  // it('should view the registration page - /register - GET', function(done){
  //   //Create a request manager that users our app:
  //   var request = chai.request(server);
  //   //Send the request: assertations language
  //   request
  //     .get("/register")
  //     .end(function(err, res){
  //       //If we have a 200 status code:
  //       res.should.have.status(200);
  //       //Check it should be html:
  //       res.should.be.html;
  //       //Finish the test:
  //       done();
  //     });
  // });

  it('should be able to register - /api/register - POST', function(done){
    var request = chai.request(server);

    request
      .post("/api/register")
      .set("content-type", "application/json")
      .send({
        "email": "email@email.com",
        "password": "password",
        "passwordConfirmation": "password",
        "type": "client"
      })
      .end(function(err, res){
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('message').eql('User successfully created');
        done();
      });
  });

  // it('should be able to view login page - /login - GET', function(done){
  //   var request = chai.request(server);
  //
  //   request
  //     .get("/login")
  //     .end(function(err, res){
  //       res.should.have.status(200);
  //       res.should.be.html;
  //       done();
  //     });
  // });

  it('should be able to login - /api/login - POST', function(done){
    var request = chai.request(server);

    request
      .post("/api/login")
      .set("content-type", "application/json")
      .send({
        "email": "email@email.com",
        "password": "password"
      })
      .end(function(err, res){
        token = res.body.token;
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('message').eql('Successfully logged in');
        done();
      });
  });

  // it('it should be able to view the dashboard - / - GET', function(done){
  //   var request = chai.request(server);
  //
  //   request
  //     .get("/")
  //     .end(function(err, res){
  //       res.should.have.status(200);
  //       res.should.be.html;
  //       res.text.should.match(/Dashboard/);
  //       //make sure that the user does not get redirected if he's not logged in etc
  //       done();
  //     });
  // });

  it('should be able to retrieve all spartans - /api/spartans - GET', function(done){
    var request = chai.request(server);

    request
      .get("/api/spartan")
      .set({'token': token})
      .end(function(err, res){
        res.should.have.status(200);
        res.body.should.be.a('array').to.have.length.above(0);
        done();
      });
  });

  it('should be able to retrieve spartans if they are available - /api/spartan/available/:type - GET', function(done){
    var request = chai.request(server);

    //ideally should also test for at least one object within the array to have available property to true
    request
      .get("/api/spartan/available/true")
      .set({'token': token})
      .end(function(err, res){
        res.should.have.status(200);
        res.body.should.be.a('array').to.have.length.above(0);
        done();
      });
  });

  it('should be able to retrieve spartans if they are on-site - /api/spartan/available/:type - GET', function(done){
    var request = chai.request(server);

    //ideally should also test for at least one object within the array to have available property to false
    request
      .get("/api/spartan/available/false")
      .set({'token': token})
      .end(function(err, res){
        spartan = res.body[0];
        res.should.have.status(200);
        res.body.should.be.a('array').to.have.length.above(0);
        done();
      });
  });

  it('should be able to retrieve a specific spartan - /api/spartan/:id - GET', function(done){
    var request = chai.request(server);

    request
      .get("/api/spartan/" + spartan._id)
      .set({'token': token})
      .end(function(err, res){
        res.should.have.status(200);
        res.body.should.be.a('object');
        //check if the id passed through the api matches the one we have retrieved back
        done();
      });
  });

});
