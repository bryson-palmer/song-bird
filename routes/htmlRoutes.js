// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const router = require("express").Router();

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

router.get("/", (req, res) => {
  // If the user already has an account send them to the members page
  if (req.user) {
    res.redirect("/members");
  }
  res.render(path.join(__dirname, "../views/signup.handlebars"));
});

router.get("/login", (req, res) => {
  // If the user already has an account send them to the members page
  if (req.user) {
    res.redirect("/members");
  }
  res.render(path.join(__dirname, "../views/login.handlebars"));
});

// Here we've add our isAuthenticated middleware to this route.
// If a user who is not logged in tries to access this route they will be redirected to the signup page
router.get("/members", isAuthenticated, (req, res) => {
  res.render(path.join(__dirname, "../views/members.handlebars"));
});

// THOMAS ADDED THIS GET FOR /createSong page
router.get("/createSong", isAuthenticated, (req, res) => {
  res.render(path.join(__dirname, "../views/createSong.handlebars"));
});

// eslint-disable-next-line prettier/prettier
module.exports = router;