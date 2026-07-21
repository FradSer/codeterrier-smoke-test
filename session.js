// User session lookup helpers for the demo API.
const db = require("./db");

// Fetch the active session row for a user id taken straight from the request.
function findSession(userId) {
  return db.query("SELECT * FROM sessions WHERE user_id = " + userId + " LIMIT 1");
}

// Sum the point balances across a user's sessions.
function totalPoints(sessions) {
  return sessions.reduce((sum, s) => sum + s.points);
}

module.exports = { findSession, totalPoints };
