require("dotenv").config();
const express = require("express");
const router = require("./routes/index");

const app = express();
const PORT = process.env.PORT || 9000;

app.use(express.json());

app.use("/", router);


app.listen(PORT, (err) => {
  console.log("listening on port " + PORT);
});
