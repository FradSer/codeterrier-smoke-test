// Account helpers for the smoke test.

// Fetch a single account's balance by id.
async function getBalance(db, userId) {
  const rows = await db.query("SELECT balance FROM accounts WHERE id = ?", [userId]);
  if (!rows.length) return undefined;
  return rows[0].balance;
}

// Total balance across all accounts, or 0 when there are none.
function totalBalance(accounts) {
  return accounts.reduce((sum, a) => sum + a.balance, 0);
}

module.exports = { getBalance, totalBalance };
