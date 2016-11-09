var express = require('express'),
    router = express.Router(),
    authenticationController = require('../controllers/authentication'),
    spartan = require('../controllers/spartan'),
    client = require('../controllers/client');

// AUTH ROUTES -----------------------------------------------------------------
// Method to allow a user to login from a form
router.route("/login")
  .post(authenticationController.login);

// Method to allow a user to register from a form
router.route("/register")
  .post(authenticationController.register);
// -----------------------------------------------------------------------------

// USERS ROUTES ----------------------------------------------------------------
// -----------------------------------------------------------------------------
// PROFILES ROUTES -------------------------------------------------------------
// -----------------------------------------------------------------------------


// SPARTAN ROUTES ------------------------------------------------------------
// To display all spartans
router.route("/spartan")
	.get(spartan.index);

router.route("/spartan/:id")
	.get(spartan.show)
	.put(spartan.update)
	.delete(spartan.delete);

router.route("/spartan/available/:type")
  .get(spartan.available);

router.route("/spartan/name/:name")
  .get(spartan.name);

// CLIENT ROUTES ------------------------------------------------------------
// To display all client
router.route("/client")
	.get(client.index);

router.route("/client/:id")
	.get(client.show)
	.put(client.update)
	.delete(client.delete);

router.route("/client/name/:name")
  .get(client.name);

// ADMIN ROUTES ------------------------------------------------------------
// To display all admins


module.exports = router;
