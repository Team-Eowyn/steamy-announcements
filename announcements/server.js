/* eslint-disable no-console */
const app = require('./index.js');

const port = 8080;

app.listen(port, () => {
  console.log(`Serving is now listening on port: ${port}`);
});
