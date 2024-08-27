const express = require("express");

const app = express();

const movieControllers = require("./controllers/movieControllers");
const usercontrollers = require("./controllers/usercontrollers");

app.get("/api/movies", movieControllers.getMovies);
app.get("/api/movies/:id", movieControllers.getMovieById);
app.get("/api/users", usercontrollers.getusers);
app.get("/api/users/:id", usercontrollers.getusersid);

module.exports = app;
