// const operations = async () => {
//   try {
//     await client.connect();
//     const res = await client.query("SELECT NOW()");
//     console.log(res);
//   } catch (err) {
//     console.log(err);
//   }
//   client.end();
// };

// operations();

// client
//   .connect()
//   .then(() => client.query("SELECT NOW()"))
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err))
//   .finally(() => client.end());

const returnTheValueFour = () => 4;
const returnTheValueFourAsync = async () => 4;

console.log(returnTheValueFour(), returnTheValueFourAsync());

// 4, 4;
