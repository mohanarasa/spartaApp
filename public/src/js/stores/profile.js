var merge = require("merge"); //requiring merge
var axios = require("axios"); //requiring axios
var EventEmitter = require("events").EventEmitter; //requiring eventEmitter
var browserHistory = require("react-router").browserHistory;
var MainDispatcher = require("../dispatchers/mainDispatcher"); // requiring dispatcher
var MainConstant = require("../constants/mainConstant"); //requiring constant
var getToken = require("../helpers/authentication");

var _profiles = []; // client or Spartan profile details
var _error = {}; // error thats returned
var _spartan = {};

var ProfileStore = merge(EventEmitter.prototype, { //cretaing a profile store
  getProfiles: function(){
    return _profiles;
  },
  getError: function(){
    return _error;
  },
  getProfile(){
    return _spartan;
  }
});

module.exports = ProfileStore; //exporting the ProfileStore

MainDispatcher.register(handleAction); //register handelAction

function handleAction(payload){ //handelaction to check whats dispatched, return profile depending on user
   if (payload.action === MainConstant.DASHBOARD.CLIENT){
      console.log("getting Spartan as a client");
      getSpartans(payload.available, payload.view);
   } else if (payload.action === MainConstant.DASHBOARD.SPARTAN) {
      getSpartans(payload.available, payload.view);
      console.log("getting Spartan as a spartan")
   } else if (payload.action === MainConstant.DASHBOARD.ADMIN) {
      //getAll(payload.type);
      getSpartans(payload.available, payload.view);
      console.log("getting specific type as an admin");
   }else if(payload.action === MainConstant.PROFILE.SPARTAN){
      getSpartan(payload.id);
      console.log("getting specific spartan");
   }else if (payload.action === MainConstant.PROFILE.DELETE){
      remove(payload.id, payload.type);
      console.log("removing profile");
  }else if(payload.action === MainConstant.PROFILE.EDIT){
      editSpartan(payload.id, payload.updated);
      console.log("editing spartan spartan");
  }else if(payload.action === MainConstant.DASHBOARD.SEARCH.NAME){
    searchByName(payload.name, payload.view);
  }
}

//get spartans by name
function searchByName(name, view){
  var token = localStorage.getItem("token") || "";
  var url = (name === "") ? "/api/" + view : "/api/" + view + "/name/" + name;
  axios.request({
    method: "GET",
    url: url,
    headers: {'token': token}
  }).then(function(res){
    _profiles = res.data;
    ProfileStore.emit(MainConstant.DASHBOARD.UPDATE);
  }).catch(function(err){
    console.log(err);
  });
}

//gets spartans
function getSpartans(available, view){
  var token = localStorage.getItem("token") || "";
  var url = (available !== "all") ? "/api/spartan/available/" + available : "/api/" + view;
  console.log(url, available, view);
  axios.request({
    method: "GET",
    url: url,
    headers: {'token': token}
  }).then(function(res){
    _profiles = res.data;
    ProfileStore.emit(MainConstant.DASHBOARD.UPDATE);
    console.log(res);
  }).catch(function(err){
    console.log(err);
    browserHistory.push("/login");
  });
}

//gets a specific spartan
function getSpartan(id){
  var token = localStorage.getItem("token") || "";
  var url = "/api/spartan/" + id;
  axios.request({
    method: "GET",
    url: url,
    headers: {'token' : token}
  }).then(function(res){
    _spartan = res.data;
    ProfileStore.emit(MainConstant.PROFILE.UPDATE);
    console.log(res);
  }).catch(function(err){
    console.log(err);
  });
}

//returns the edited spartan
function editSpartan(id, updated){
  // console.log(updated);
  var token = localStorage.getItem("token") || "";
  var url = "/api/spartan/" + id;
  console.log(url);
  axios.request({
    method: "PUT",
    url: url,
    data: {
      update: updated
    },
    headers: {'token' : token}
  }).then(function(res){
    _spartan = res.data;
    ProfileStore.emit(MainConstant.PROFILE.UPDATE);
    console.log(res);
  }).catch(function(err){
    console.log(err);
    //browserHistory.push("/login");
  });
}

//gets specific data
function getAll(data){
  console.log("/api/" + data);
  var token = localStorage.getItem("token") || "";
  axios.request({
    method: "GET",
    url: "/api/" + data,
    headers: {'token': token}
  }).then(function(res){
    ProfileStore.emit(MainConstant.DASHBOARD.UPDATE);
    console.log(res);
  }).catch(function(err){
    console.log(err);
    browserHistory.push("/login");
  });
}

//deletes specific spartan
function remove(id, data){
  var token = localStorage.getItem("token") || "";
  var url = "/api/" + data + "/" + id;
  axios.request({
    method: "DELETE",
    url: url,
    headers: {'token': token}
  }).then(function(res){
    ProfileStore.emit(MainConstant.USER.UPDATE.DELETE);
    console.log(res);
  }).catch(function(err){
    console.log(err);
  });
}
