const Post = ({ title, author, content }) => {
  return (
    <article className="post">
      <h2> {title} </h2>
      <h3 className="author"> {`Author: ${author}`}</h3>
      <p> {content}</p>
    </article>
  );
};

export default Post;
