const express = require("express");

const app = express();

const port = 5000;
const router = require('./routes/routes')

app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });

  app.use('/', router);
