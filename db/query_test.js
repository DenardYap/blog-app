// unit testing and regression testings
const { read_, insert_, delete_ } = require("./query");

let current_time = () => {
  return require("moment")().format("YYYY-MM-DD HH:mm:ss");
};
const table = "posts";
const test_read = async () => {
  const x = await read_(table);
  console.log(x);
};
const test_insert = async () => {
  let new_data = {
    title: "I dont know what to say here",
    author: "Bill Musk",
    content: "Lorem Ipsum Bernard Yap is typing this",
    date_created: current_time(),
  };
  const x = await insert_(table, new_data);
};
const test_delete = async () => {
  await delete_(table, 4);
};

test_read();
