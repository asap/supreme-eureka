const app = require('./app');
const port = 5000;
// const port = 3001;

// app.get('/', (req, res) => {
//   res.send(`PORT ${port}`);
// });

app.listen(port, err => {
  if (err) {
    console.log(err);
  }
  console.log(`Listening on port ${port}`);
});
