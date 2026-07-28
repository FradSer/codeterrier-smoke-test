// smoke/dense-format-demo: planted bugs to exercise the dense-comment format.
// Each bug should produce a single dense cited paragraph (no Mechanism/Evidence
// labels), with inline file:line cites and a concrete failure path.

const db = { query: (_sql, _params) => Promise.resolve([]) };

// Bug 1 (security): userId concatenated into SQL -> SQL injection.
export async function getBalance(userId) {
  const rows = await db.query("SELECT balance FROM accounts WHERE id = " + userId);
  return rows[0]?.balance;
}

// Bug 2 (bug): reduce with no initial value throws on empty array.
export function totalBalance(accounts) {
  return accounts.reduce((sum, a) => sum + a.balance);
}
