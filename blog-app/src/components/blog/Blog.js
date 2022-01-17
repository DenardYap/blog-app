import Post from "./Post";

const Blog = ({ posts, onDelete }) => {
  return (
    <div>
      {!!posts.length ? (
        posts.map((post) => (
          <Post
            id={post.id}
            title={post.title}
            author={post.author}
            content={post.content}
            onDelete={onDelete}
          />
        ))
      ) : (
        <h1>No posts to show</h1>
      )}
    </div>
  );
};

export default Blog;
