const express = require("express");
const redis = require("redis");
const { promisify } = require("util");
const router = express.Router();
const path = require("path");
const { read_, insert_, delete_ } = require("../db/query");

let ori_page = process.env.MAIN_PAGE || "http://localhost:3001/";
const table = "posts";
//initialize the posts for once from the database
let posts;
// replace this with redis
const load_post = async () => {
  posts = await read_(table);
};
const client = redis.createClient({
  host: "127.0.0.1",
  port: 6379,
});

const GET_ASYNC = promisify(client.get).bind(client);
const SET_ASYNC = promisify(client.set).bind(client);

load_post();
let current_time = () => {
  return require("moment")().format("YYYY-MM-DD HH:mm:ss");
};

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
  console.log(posts);
  const newPost = {
    id: !!posts.length ? posts[posts.length - 1].id + 1 : 1,
    title: req.body.title,
    author: req.body.author,
    content: req.body.content,
    date_created: current_time(),
  };
  if (!newPost.title || !newPost.author || !newPost.content) {
    res.status(400).json({ msg: "Please include a valid message" });
  } else {
    insert_(table, newPost);
    posts.push(newPost); //sort of like caching, i dont want to read it over and over again
    res.redirect(ori_page);
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

router.delete("/:id", (req, res) => {
  //add new members here
  console.log("Successfully connected to posts api");
  // we dont need to care about empty data as react
  // took care for us
  delete_(table, req.params.id);
  posts = posts.filter((p) => p.id !== parseInt(req.params.id));
  res.redirect("/");
});
module.exports = router;
