/** Todo
 * 1) Textarea styling
 * 2) Diff between textarea and input, which one to use
 * 3) Useeffects to fetch data from the api!
 */
import { FaTimesCircle } from "react-icons/fa";

const Popup = ({ trigger, setTrigger }) => {
  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <form action="api/posts" method="POST">
          <div className="title-box">
            <FaTimesCircle
              className="close-btn"
              style={{ cursor: "pointer" }}
              onClick={() => setTrigger(false)}
            />
            <label htmlFor="title"> Title </label>
          </div>
          <input
            name="title"
            id="title"
            placeholder="type your title here..."
            required
          />
          <br />
          <label htmlFor="author"> Author </label> <br />
          <input
            name="author"
            id="author"
            placeholder="type your name here..."
            required
          />
          <br />
          <label htmlFor="content"> What do you want to say? </label> <br />
          <textarea
            name="content"
            id="content"
            cols="30"
            rows="5"
            placeholder="type your contents here..."
            required
          ></textarea>
          <br />
          <input
            name="submit"
            id="submit"
            type="submit"
            className="submit-btn"
          />
          <br />
        </form>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
