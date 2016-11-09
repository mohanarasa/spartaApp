module.exports = {
  USER: {
    LOGIN: "USER LOGIN",
    REGISTER: "USER REGISTER",
    LOGOUT: "USER LOGOUT",
    UPDATE: {
      LOGIN: "USER UPDATE LOGIN",
      REGISTER: "USER UPDATE REGISTER",
      LOGOUT: "USER UPDATE LOGOUT",
      DELETE: "USER UPDATE DELETE"
    },
    ERROR: {
      LOGIN: "USER ERROR LOGIN",
      REGISTER: "USER ERROR REGISTER",
      LOGOUT: "USER ERROR LOGOUT"
    },
    DELETE: "USER DELETE"
  },
  DASHBOARD: {
    CLIENT: "DASHBOARD CLIENT",
    SPARTAN: "DASHBOARD SPARTANS",
    ADMIN: "DASHBOARD ADMIN",
    UPDATE: "DASHBOARD UPDATE",
    TYPE: {
      SPARTAN: "spartan",
      CLIENT: "client",
      ADMIN: "admin"
    },
    SEARCH: {
      NAME: "DASHBOARD SEARCH NAME"
    }
  },
  PROFILE: {
    CLIENT: "PROFILE CLIENT",
    SPARTAN: "PROFILE SPARTAN",
    ADMIN: "PROFILE ADMIN",
    UPDATE: "PROFILE UPDATE",
    TYPE: {
      SPARTAN: "spartan",
      CLIENT: "client",
      ADMIN: "admin"
    },
    EDIT: "PROFILE EDIT",
    DELETE: "PROFILE DELETE"
  },
  TRANSFORM: {
    AVAILABLE: function(res){
      return (res) ? "available" : "on-site";
    }
  }
}
