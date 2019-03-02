const app = require('./app');
const config = require('./config');

const port = Number(process.env.PORT || config.port);

app.listen(port, err => {
  if (err) {
    console.log(err);
  }
  console.log(`Listening on port ${port}`);
});
