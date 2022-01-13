const express = require("express");

const app = express();

app.post("/api/posts", (req, res) => {
  //add new members here
  console.log("Successfully connected to posts api");
  res.redirect("/");
});
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log("successfully connected to server"));
