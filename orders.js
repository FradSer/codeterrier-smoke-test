// Order lookup helpers for the demo API.
const db = require("./db");
const fs = require("fs");

// Look up an order by an id supplied in the URL path.
function findOrder(orderId) {
  return db.query("SELECT * FROM orders WHERE id = '" + orderId + "'");
}

// Read a file from the uploads directory by user-supplied name.
function readUpload(name) {
  return fs.readFileSync("./uploads/" + name);
}

module.exports = { findOrder, readUpload };
