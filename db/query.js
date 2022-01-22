const mysql = require("mysql");

let db;

function handleDisconnect() {
  db = mysql.createConnection({
    host: "us-cdbr-east-05.cleardb.net", //host
    port: 3306,
    user: "b1de8763a859e1",
    password: "e59e57fa",
    database: "heroku_b627f7e5a7d0df6",
  }); // Recreate the connection, since
  // the old one cannot be reused.

  db.connect(function (err) {
    // The server is either down
    if (err) {
      // or restarting (takes a while sometimes).
      console.log("error when connecting to db:", err);
      setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
    } // to avoid a hot loop, and to allow our node script to
  }); // process asynchronous requests in the meantime.
  // If you're also serving http, display a 503 error.
  db.on("error", function (err) {
    console.log("db error", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      // Connection to the MySQL server is usually
      handleDisconnect(); // lost due to either server restart, or a
    } else {
      // connnection idle timeout (the wait_timeout
      throw err; // server variable configures this)
    }
  });
}

handleDisconnect();

function read_(table) {
  return new Promise((res, rej) => {
    let q1 = `SELECT * FROM ${table}`;
    db.query(q1, (err, result) => {
      if (err) throw err;
      //todo: is this error handling enough?
      table = JSON.parse(JSON.stringify(result));
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
