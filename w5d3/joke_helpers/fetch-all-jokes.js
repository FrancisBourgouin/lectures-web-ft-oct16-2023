// Fetch all jokes

// import { Client } from "pg"; // ES Imports
const { Client } = require("pg"); // CommonJS

// Async / Await => Syntax sugar for promises
const someArray = [];

const client = new Client({
  user: "francis",
  password: "francis",
  database: "jokes",
  host: "localhost",
  port: 5432,
});

// id: 1,
// question: 'Knock knock, whos there, to who',
// answer: 'no, to whom',
// rating: 3,
// author_id: 1
const showJokesInAPrettyWay = (joke) => {
  console.log("😂🤣😆😆🤣😂");
  console.log("Q:", joke.question);
  console.log("A:", joke.answer);
  console.log("😂🤣😆😆🤣😂\n\n");
};

const showAllJokes = (jokes) => {
  for (const joke of jokes) {
    showJokesInAPrettyWay(joke);
  }
};

client
  .connect()
  .then(() => client.query("SELECT * FROM jokes"))
  .then((res) => {
    console.log(res);
    return res.rows;
  })
  .then((rows) => showAllJokes(rows))
  .catch((err) => console.log(err))
  .finally(() => client.end());
