const fetchJokeById = (jokeId) => {
  return client
    .connect()
    .then(() => client.query(`SELECT * FROM jokes WHERE id = ${id}`))
    .then((res) => res.rows[0]);
};

const fetchAllJokes = () => {
  return client
    .connect()
    .then(() => client.query(`SELECT * FROM jokes`))
    .then((res) => res.rows);
};
