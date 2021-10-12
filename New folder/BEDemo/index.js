const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Helloworld");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
