const mysql = require("mysql");
const db = mysql.createConnection({
  host: "us-cdbr-east-05.cleardb.net", //host
  port: 3306,
  user: "b1de8763a859e1",
  password: "e59e57fa",
  database: "heroku_b627f7e5a7d0df6",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Successfully connected to MySQL server");
});

function read_(table) {
  return new Promise((res, rej) => {
    let q1 = `SELECT * FROM ${table}`;
    db.query(q1, (err, result) => {
      if (err) throw err;
      //todo: is this error handling enough?
      table = JSON.parse(JSON.stringify(result));
      console.log(`Returning array ${table}`);
      return res(table);
    });
  });
}

function insert_(table, data) {
  // data should be an javascript object
  // with the title name and values
  return new Promise((res, rej) => {
    let q1 = `INSERT INTO ${table} SET ?`;
    db.query(q1, data, (err, result) => {
      if (err) throw err;
      //todo: is this error handling enough?
      console.log(`Data Inserted\n-> Table: ${table} | Data: ${data}`);
    });
  });
}

// function update_(data) {
//   db.query(q1, (err, result) => {
//     if (err) throw err;
//     //todo: is this error handling enough?
//     console.log(`Data created ${data}`);
//   });
// }
function delete_(table, id) {
  return new Promise((res, rej) => {
    let q1 = `DELETE FROM ${table} WHERE id = ${id}`;
    db.query(q1, (err, result) => {
      if (err) throw err;
      //todo: is this error handling enough?
      console.log(`Item deleted\n-> Table : ${table} | ID: ${id}`);
    });
  });
}

function reset_index(i) {
  let q1 = "ALTER TABLE posts AUTO_INCREMENT = 1";
}
module.exports = { read_, insert_, delete_ };
