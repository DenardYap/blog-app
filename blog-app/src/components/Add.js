const Add = ({ setTrigger }) => {
  return (
    <div className="title-add">
      <h1 className="title">Welcome to your Homepage! #Name </h1>
      <button className="btn" onClick={() => setTrigger(true)}>
        Add Post
      </button>
    </div>
  );
};

export default Add;
