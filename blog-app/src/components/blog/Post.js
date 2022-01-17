import { FaTimesCircle } from "react-icons/fa";
const Post = ({ title, author, content, id, onDelete }) => {
  return (
    <article className="post">
      <div className="wrapper">
        <h2> {title} </h2>
        <h3> {`by: ${author} with id:${id}`}</h3>
        <FaTimesCircle className="bot-btn" onClick={() => onDelete(id)} />
      </div>
      <p>{content}</p>
    </article>
  );
};

export default Post;
