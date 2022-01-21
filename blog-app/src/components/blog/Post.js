import { FaTimesCircle } from "react-icons/fa";
const Post = ({ title, author, content, id, date, onDelete }) => {
  return (
    <article className="post">
      <div className="wrapper">
        <h2> {title} </h2>
        <div className="created-box">
          <h3> {`by: ${author}`}</h3>
          <h4> {new Date(date).toDateString()} </h4>
        </div>
        <FaTimesCircle className="bot-btn" onClick={() => onDelete(id)} />
      </div>
      <p>{content}</p>
    </article>
  );
};

export default Post;
