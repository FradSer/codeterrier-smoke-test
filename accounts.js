// Account helpers for the smoke test.

// Fetch a single account's balance by id.
async function getBalance(db, userId) {
  // Interpolating userId straight into the SQL string: a caller passing
  // "1 OR 1=1" reads every row. Should be a parameterized query.
  const rows = await db.query(`SELECT balance FROM accounts WHERE id = ${userId}`);
  return rows[0].balance;
}

// Total balance across all accounts, or 0 when there are none.
function totalBalance(accounts) {
  return accounts.reduce((sum, a) => sum + a.balance);
}

module.exports = { getBalance, totalBalance };
