const express = require("express");
const teacherHandler = require("./routes/teacherRoute");

const app = express();

app.use("/teacher", teacherHandler);

app.get("/", (req, res) => {
  res.status(200).send("Welcome");
});

const server = app.listen("8080", () => {
  console.log(`server listening on port ${server.address().port}`);
});
