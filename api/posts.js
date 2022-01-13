const express = require("express");
const router = express.Router();
const posts = require("../db");
const path = require("path");

router.get("/", (req, res) => res.json(posts));
router.get("/:id", (req, res) => {
  const found = posts.some((p) => p.id === parseInt(req.params.id));
  if (found) {
    res.json(posts.filter((p) => p.id === parseInt(req.params.id)));
  } else {
    res.status(400).sendFile(path.join(__dirname, "404.html"));
  }
});
router.post("/", (req, res) => {
  //add new members here
  console.log("Successfully connected to posts api");
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
    author: req.body.author,
    content: req.body.content,
  };
  if (!newPost.title || !newPost.author || !newPost.content) {
    res.status(400).json({ msg: "Please include a valid message" });
  } else {
    posts.push(newPost);
    res.redirect("http://localhost:3000/");
  }
});

// router.put("/", (req, res) => {
//     //add new members here
//     console.log("Successfully connected to posts api");
//     const newPost = {
//       id: posts.length + 1,
//       name: req.body.name,
//       author: req.body.author,
//       content: req.body.content,
//     };
//     // we dont need to care about empty data as react
//     // took care for us
//     posts.push(newPost);
//     res.redirect("/");
//   });

// router.delete("/", (req, res) => {
//     //add new members here
//     console.log("Successfully connected to posts api");
//     const newPost = {
//       id: posts.length + 1,
//       name: req.body.name,
//       author: req.body.author,
//       content: req.body.content,
//     };
//     // we dont need to care about empty data as react
//     // took care for us
//     posts.push(newPost);
//     res.redirect("/");
//   });
module.exports = router;
