const express = require("express");
const app = express();
const { router } = require("./routes/routes");

app.use(router);
app.use(express.json());

const port = 8080;
app.listen(port, () => {
  (err) => {
    if (err) return console.log(err);
    console.log(`server run on port: ${port}`);
  };
});
