var config = require('./config/variables.js');
var mongoose = require('mongoose');
var User = require("./models/user");
var courses = ["WEB DEV", "SDET", "TESTING"];

User.remove({}, function() {
  createUser({
      firstName:"Rashid",
      lastName:"Awil",
      password:"password",
      passwordConfirmation:"password",
      email: "rawil@spartaglobal.co",
      profile: {
        image: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAkSAAAAJDU0ZjcwZWM3LTFmMmItNGI4OC04MWZiLWQyMzQyZjk1YWJmOA.jpg",
        summary: "",
        experience: [],
        skills: [],
        projects: [],
        interests: []
      },
      type: "spartan",
      course: courses[0],
      available: true
  });

createUser({
      firstName:"Husna",
      lastName:"Ahad",
      password:"password",
      passwordConfirmation:"password",
      email: "hahad@spartaglobal.co",
      profile: {
        image: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAdrAAAAJGFiZWY0NDE4LTk2ZDgtNDlkOC1iNjBjLTAyMjFiMTBiYjBjZQ.jpg",
        summary: "",
        experience: [],
        skills: [],
        projects: [],
        interests: []
      },
      type: "spartan",
      course: courses[1],
      available: false
  });


createUser({
      firstName:"Abdul",
      lastName:"Jolal",
      password:"password",
      passwordConfirmation:"password",
      email: "ajolal@spartaglobal.co",
      profile: {
        image: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAkvAAAAJDkwNDJjODgyLWNiZDEtNGY0NS05ZjEzLTljOGJmYTExMzE3Nw.jpg",
        summary: "",
        experience: [],
        skills: [],
        projects: [],
        interests: []
      },
      type: "spartan",
      course: courses[1],
      available: false
  });

createUser({
      firstName:"Francis",
      lastName:"McGowan",
      password:"password",
      passwordConfirmation:"password",
      email: "fmcgowan@spartaglobal.co",
      profile: {
        image: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAgfAAAAJDAyNDUxMDU2LWJkMzAtNDc3Yy1hMjg0LTczYjI5N2JlYWMzMg.jpg",
        summary: "",
        experience: [],
        skills: [],
        projects: [],
        interests: []
      },
      type: "spartan",
      course: courses[2],
      available: true
  });

createUser({
      firstName:"Ashley",
      lastName:"Nzomono",
      password:"password",
      passwordConfirmation:"password",
      email: "anzomono@spartaglobal.co",
      profile: {
        image: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAh4AAAAJGFlMzgzZjMyLTE4YmUtNGM3Mi1iYjUzLTAxNWI3YzMwZmJhYQ.jpg",
        summary: "",
        experience: [],
        skills: [],
        projects: [],
        interests: []
      },
      type: "spartan",
      course: courses[1],
      available: true
  });


createUser({
      firstName:"Aidan",
      lastName:"Tallon",
      password:"password",
      passwordConfirmation:"password",
      email: "atallon@spartaglobal.co",
      profile: {
        image: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAlMAAAAJDZhOGRlN2QxLTMxNGYtNGNiZC05NjA2LWVmYzA1M2UyYzQxOA.jpg",
        summary: "",
        experience: [],
        skills: [],
        projects: [],
        interests: []
      },
      type: "spartan",
      course: courses[1],
      available: false
  });


createUser({
      firstName:"ALI-RIDHA",
      lastName:"MOLEDINA",
      password:"password",
      passwordConfirmation:"password",
      email: "amoledina@spartaglobal.co",
      profile: {
        image: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAkBAAAAJDMwODNlMWU5LTlmMTAtNDU5YS1iYjM4LTNjYzk0YjU0NGNhOA.jpg",
        summary: "",
        experience: [],
        skills: [],
        projects: [],
        interests: []
      },
      type: "spartan",
      course: courses[0],
      available: true
  });

createUser({
      firstName:"Siu",
      lastName:"Leung",
      password:"password",
      passwordConfirmation:"password",
      email: "sleung@spartaglobal.co",
      profile: {
        image: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAlvAAAAJDExNGUyMDc1LTYwYjAtNDc3Yy05MGQ4LTMzNDk1ZTk3MTgwOA.jpg",
        summary: "",
        experience: [],
        skills: [],
        projects: [],
        interests: []
      },
      type: "spartan",
      course: courses[0],
      available: false
  });

createUser({
      firstName:"David",
      lastName:"Lake",
      password:"password",
      passwordConfirmation:"password",
      email: "dlake@spartaglobal.co",
      profile: {
        image: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAjwAAAAJDI5YmI5YzUxLTE5M2YtNGUwOS1hMDEyLWQ2YWMwOTY4Nzg5OA.jpg",
        summary: "",
        experience: [],
        skills: [],
        projects: [],
        interests: []
      },
      type: "spartan",
      course: courses[0],
      available: false
  });


    createUser({
      firstName:"Rashid",
      lastName:"Awil",
      password:"password",
      passwordConfirmation:"password",
      email: "rawil@spartaglobal.co",
      profile: {
        image: "",
        summary: "",
        experience: [],
        skills: [],
        projects: [],
        interests: []
      },
      type: "spartan",
      course: courses[0],
      available: true
  });

  createUser({
      firstName:"Yussef",
      lastName:"Elarif",
      password:"password",
      passwordConfirmation:"password",
      email:"yelarif@spartaglobal.co",
      profile: {
        image: "",
        summary: "",
        experience: [],
        skills: [],
        projects: [],
        interests: []
      },
      type:"admin"
  });

  createUser({
     firstName:"Pratik",
     lastName:"Giri",
     password:"password",
     passwordConfirmation:"password",
     email:"pgiri@spartaglobal.co",
     profile: {
        image: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAhJAAAAJGIxNDhmNDJmLWRiNzctNDdmZS05MTUyLWIwNTQ1ZmU1ZjI0Zg.jpg",
        summary: "",
        experience: [],
        skills: [],
        projects: [],
        interests: []
     },
     type:"spartan",
     course: courses[2],
     available: true
  });

    createUser({
     firstName:"Andrew",
     lastName:"Dean",
     password:"password",
     passwordConfirmation:"password",
     email:"adean@spartaglobal.co",
     profile: {
        image: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAdMAAAAJDVhYzFhYzI3LTU0YTctNGJiMy1hNDYwLWQyMjc1NWM4NmU1MA.jpg",
        summary: "",
        experience: [],
        skills: [],
        projects: [],
        interests: []
     },
     type:"spartan",
     course: courses[1],
     available: false
  });

    createUser({
     firstName:"Jason",
     lastName:"Dzela-Mensah",
     password:"password",
     passwordConfirmation:"password",
     email:"jmensah@spartaglobal.co",
     profile: {
        image: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAdJAAAAJDk2Y2U3NjgwLTM4MzYtNDI3Zi1hOWM4LTFlODMzOTU1YjM5Yw.jpg",
        summary: "",
        experience: [],
        skills: [],
        projects: [],
        interests: []
     },
     type:"spartan",
     course: courses[1],
     available: false
  });

    createUser({
     firstName:"Luke",
     lastName:"Hargraves",
     password:"password",
     passwordConfirmation:"password",
     email:"lhargraves@spartaglobal.co",
     profile: {
        image: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAhgAAAAJDY2OGQzZmZmLTYyZWQtNDNlYi1hYTM2LTM3YTMxNTViYmE5OQ.jpg",
        summary: "",
        experience: [],
        skills: [],
        projects: [],
        interests: []
     },
     type:"spartan",
     course: courses[2],
     available: true
  });


    createUser({
     firstName:"Thomas",
     lastName:"Hogan",
     password:"password",
     passwordConfirmation:"password",
     email:"thongan@spartaglobal.co",
     profile: {
        image: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAiMAAAAJGZmNzcxMzQ5LTI0YjAtNDBiOC04MjA5LWI0NjllNjU4YjhlNA.jpg",
        summary: "",
        experience: [],
        skills: [],
        projects: [],
        interests: []
     },
     type:"spartan",
     course: courses[2],
     available: true
  });

  createUser({
    firstName:"Sumangalya",
    lastName:"Mohanarasa",
    password:"password",
    passwordConfirmation:"password",
    email:"smohanarasa@spartaglobal.co",
    profile: {
        image: "",
        summary: "",
        experience: [],
        skills: [],
        projects: [],
        interests: []
    },
    type:"client"
  });

  createUser({
    firstName:"Winnifer",
    lastName:"Myint",
    password:"password",
    passwordConfirmation:"password",
    email:"wmyint@spartaglobal.co",
    profile: {
        image: "",
        summary: "",
        experience: [],
        skills: [],
        projects: [],
        interests: []
    },
    type:"admin"
  });

  createUser({
    firstName:"Sanjeev",
    lastName:"Pillai",
    password:"password",
    passwordConfirmation:"password",
    email:"spillai@spartaglobal.co",
    profile: {
        image: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAdrAAAAJGZmYzM3YTM0LTMyMzYtNGQxNS05NTc4LWI3NGJhZWI2OTVlMg.jpg",
        summary: "",
        experience: [],
        skills: [],
        projects: [],
        interests: []
    },
    type:"spartan",
    course: courses[2],
    available: true
  });

  createUser({
    firstName:"Dorian",
    lastName:"Amoah",
    password:"password",
    passwordConfirmation:"password",
    email:"damoah@spartaglobal.co",
    profile: {
        image: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAe1AAAAJGI0ZjAyOTI2LThjMWQtNGFkMi1iNzcyLTMyYTZjYzIyMTBjMg.jpg",
        summary: "",
        experience: [],
        skills: [],
        projects: [],
        interests: []
    },
    type:"admin"
  });

  createUser({
    firstName:"Mohammed",
    lastName:"Sharif",
    password:"password",
    passwordConfirmation:"password",
    email:"msharif@spartaglobal.co",
    profile: {
        image: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAeiAAAAJDk2NTQ3ZjMzLWNhNDgtNGVmYS04NDk4LWYxMzEwZmZhNjEwNQ.jpg",
        summary: "",
        experience: [],
        skills: [],
        projects: [],
        interests: []
    },
    type:"admin"
  });

  createUser({
    firstName:"Anastasios",
    lastName:"Barlas",
    password:"password",
    passwordConfirmation:"password",
    email:"abarlas@spartaglobal.co",
    profile: {
        image: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAlBAAAAJGE0OGU1MTg4LTM2NTktNDZiZC1iMTFiLTdmZDhhYTc2YjhiMg.jpg",
        summary: "",
        experience: [],
        skills: [],
        projects: [],
        interests: []
    },
    type:"spartan",
    course: courses[1],
    available: false
  });

  createUser({
    firstName:"Prekjgnan",
    lastName:"Jaymayooragan",
    password:"password",
    passwordConfirmation:"password",
    email:"pj@spartaglobal.co",
    profile: {
        image: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAgfAAAAJGY3Mzk2MWQzLTNkOTctNGU5Ny1iMDkyLTk3MDI1MDc4NWNjZA.jpg",
        summary: "",
        experience: [],
        skills: [],
        projects: [],
        interests: []
    },
    type:"spartan",
    course: courses[0],
    available: true
  });

  createUser({
    firstName:"Narbu",
    lastName:"Gurung",
    password:"password",
    passwordConfirmation:"password",
    email:"ngurung@spartaglobal.co",
    profile: {
        image: "",
        summary: "",
        experience: [],
        skills: [],
        projects: [],
        interests: []
    },
    type:"spartan",
    course: courses[1],
    available: true
  });

  createUser({
    firstName:"George",
    lastName:"Clooney",
    password:"password",
    passwordConfirmation:"password",
    email:"george@gmail.com",
    type:"client"
  });

  createUser({
    firstName:"Leonardo",
    lastName:"Di Caprio",
    password:"password",
    passwordConfirmation:"password",
    email:"leo@gmail.com",
    type:"client"
  });

  createUser({
    firstName:"Elon",
    lastName:"Musk",
    password:"password",
    passwordConfirmation:"password",
    email:"musk@gmail.com",
    type:"client"
  });
});

function createUser(users){
  var user = new User(users);
  user.save(function(err, users) {
    //if (err) return console.log(err);
    //console.log("saved user");
  });
}
