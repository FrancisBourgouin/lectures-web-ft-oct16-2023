const { Client } = require("pg"); // CommonJS

const client = new Client({
  user: "francis",
  password: "francis",
  database: "jokes",
  host: "localhost",
  port: 5432,
});

const insertJoke = (question, answer, rating, authorId) => {
  const sqlQuery = `
    INSERT INTO
      jokes (question, answer, rating, author_id)
    VALUES
      ($1, $2, $3, $4)
    RETURNING *
  `;
  const sqlValues = [question, answer, rating, authorId];

  return client
    .connect()
    .then(() => client.query(sqlQuery, sqlValues))
    .then((res) => res.rows[0]);
};

const [, , question, answer, rating, authorId] = process.argv;

if (!question || !answer || !rating || !authorId) {
  console.log("Please type all necessaryvalues");
} else {
  insertJoke(question, answer, rating, authorId)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => client.end());
}
