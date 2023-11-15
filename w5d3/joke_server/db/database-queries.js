const { Client } = require("pg"); // CommonJS

const client = new Client({
  user: "francis",
  password: "francis",
  database: "jokes",
  host: "localhost",
  port: 5432,
});

const initializeDB = () => {
  return client.connect();
};

const fetchAllJokes = () => {
  return client.query(`SELECT * FROM jokes`).then((res) => res.rows);
};

const fetchAllAuthors = () => {
  return client.query(`SELECT * FROM authors`).then((res) => res.rows);
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

  return client.query(sqlQuery, sqlValues).then((res) => res.rows[0]);
};

const insertJoke = (question, answer, rating, authorId) => {
  const sqlQuery = `
    INSERT INTO
      jokes (question, answer, rating, author_id)
    VALUES
      ($1, $2, $3, $4)
    RETURNING *
  `;
  const sqlValues = [question, answer, rating, authorId];

  return client.query(sqlQuery, sqlValues).then((res) => res.rows[0]);
};

module.exports = {
  fetchAllJokes,
  fetchJokeById,
  insertJoke,
  initializeDB,
  fetchAllAuthors,
};
