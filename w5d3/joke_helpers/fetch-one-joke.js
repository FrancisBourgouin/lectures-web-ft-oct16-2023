// Fetch all jokes
const { Client } = require("pg"); // CommonJS

const client = new Client({
  user: "francis",
  password: "francis",
  database: "jokes",
  host: "localhost",
  port: 5432,
});

const showJokesInAPrettyWay = (joke) => {
  console.log("😂🤣😆😆🤣😂");
  console.log("Joke #", joke.id);
  console.log("Q:", joke.question);
  console.log("A:", joke.answer);
  console.log("By:", joke.author_name);
  console.log("Is the author funny?", joke.author_funny);
  console.log("😂🤣😆😆🤣😂\n\n");
};

const fetchJokeById = (jokeId) => {
  const sqlQuery = `
    SELECT 
      jokes.*,  
      authors.name AS author_name , 
      authors.funny AS author_funny, 
      authors.description AS author_description
    FROM jokes 
    JOIN authors ON jokes.author_id = authors.id 
    WHERE jokes.id = $1
  `;
  const sqlValues = [jokeId];

  return client
    .connect()
    .then(() => client.query(sqlQuery, sqlValues))
    .then((res) => res.rows[0]);
};

const id = process.argv[2];

fetchJokeById(id)
  // .then(console.log)
  .then(showJokesInAPrettyWay)
  .catch((err) => console.log(err))
  .finally(() => client.end());

// JS, Ruby, Python, C, C++, Rust, Go [0,1,2,3]
// SQL LOL [1,2,3]
