const express = require("express");
const app = express();
const path = require("path");
//Body Parser
app.use(express.json()); //handle raw json
app.use(express.urlencoded({ extended: false })); //handle form data!

app.get("/", (req, res) => res.send("<h1>Testing<h1/>"));
app.use("/api/posts", require("./api/posts"));
app.all("*", function (req, res) {
  res.sendFile(path.join(__dirname, "notfound.html"));
});
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log("Successfully connected to the server"));
