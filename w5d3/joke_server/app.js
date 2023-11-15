const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const {
  initializeDB,
  fetchAllJokes,
  fetchJokeById,
  fetchAllAuthors,
  insertJoke,
} = require("./db/database-queries");

initializeDB().then(() => console.log("Database connection ready!"));

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/jokes", (req, res) => {
  fetchAllJokes()
    .then((jokes) => res.json(jokes))
    .catch((err) => res.json("Oh no!"));
});
app.get("/api/jokes/:joke_id", (req, res) => {
  fetchJokeById(req.params.joke_id)
    .then((joke) => res.json(joke))
    .catch((err) => res.json("Oh no!"));
});

app.get("/jokes", (req, res) => {
  fetchAllJokes()
    .then((jokes) => {
      const templateVars = { jokes };

      res.render("jokes", templateVars);
    })
    .catch((err) => res.json("Oh no!"));
});
app.get("/jokes/new", (req, res) => {
  fetchAllAuthors()
    .then((authors) => {
      const templateVars = { authors };

      res.render("new-joke", templateVars);
    })
    .catch((err) => res.json("Oh no!"));
});
app.get("/jokes/:joke_id", (req, res) => {
  fetchJokeById(req.params.joke_id)
    .then((joke) => {
      const templateVars = { joke };

      res.render("joke", templateVars);
    })
    .catch((err) => console.log("Oh no."));
});
app.post("/jokes", (req, res) => {
  const { question, answer, rating, authorId } = req.body;

  insertJoke(question, answer, rating, authorId)
    .then((joke) => {
      console.log("Inserted joke", joke);

      res.redirect(`/jokes/${joke.id}`);
    })
    .catch((err) => console.log("Oh no."));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
