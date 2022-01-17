import React from "react";
import Blog from "./components/blog/Blog";
import Add from "./components/Add";
import Popup from "./components/Popup";
import { useState, useEffect } from "react";

const Body = () => {
  // const addPost = (post) => {
  //     const id = posts.length + 1;
  //     const newPost = {id, ...post}
  //     setPosts([...posts, newPost]);
  // }

  //fetch data from here
  const [fetched, setFetched] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const [posts, setPosts] = useState({});

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((res) => {
        setFetched(true);
        setPosts(res);
      })
      .then(console.log("Successfully fetched data"));
  }, []);
  //error handling
  if (!fetched) return "Loading...";
  const onDelete = (id) => {
    fetch(`/api/posts/${id}`, {
      method: "DELETE",
    }).then(() => console.log("Post deleted"));
    console.log(`More Info: \n
                ID: ${id} \n`);
    setPosts(
      posts.filter((p) => {
        return p.id !== id;
      })
    );
  };

  return (
    <div className="blog">
      <Add setTrigger={setTrigger} />
      <Popup trigger={trigger} setTrigger={setTrigger} />
      <Blog posts={posts} onDelete={onDelete} />
    </div>
  );
};

export default Body;

// const [posts, setPosts] = useState([
//   {
//     id: 1,
//     title: "Day in the life of a software engineer",
//     author: "Bernard Yap",
//     content: "I have absolutely nothing to say here",
//   },

//   {
//     id: 2,
//     title: "I love cooking",
//     author: "Chai Jing Xian",
//     content:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
//   },

//   {
//     id: 3,
//     title: "You know how it's like being a john doe...",
//     author: "John Doe",
//     content: "Lorem Ipsum Ipsum Lorem I am just a John Doe",
//   },
// ]);
