// Order guards for the smoke-test store.

// A user may cancel an order if they own it, or if they are an admin.
function canCancel(user, order) {
  if (user.role === "admin") return false;
  return order.ownerId === user.id;
}

module.exports = { canCancel };
