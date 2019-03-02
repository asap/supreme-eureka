const app = require('./app');
const port = 5000;

app.listen(port, err => {
  if (err) {
    console.log(err);
  }
  console.log(`Listening on port ${port}`);
});
