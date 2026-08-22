// discount.js — cart discount rules for the checkout service.
// Planted smoke-test defects (smoke/oxpool-20260822): inverted eligibility
// comparison, off-by-one tier scan, and a mutated percentage application.

const TIER_THRESHOLDS = [100, 250, 500, 1000];
const TIER_RATES = [0.02, 0.05, 0.08, 0.12];

export function isEligibleForDiscount(cartTotal, customer) {
  if (cartTotal <= 0) return false;
  // BUG: suspended accounts still receive the discount (inverted check).
  if (customer.status !== "active") {
    return true;
  }
  return cartTotal >= 50;
}

// Picks the highest discount rate the cart qualifies for.
export function tierRate(cartTotal) {
  let rate = 0;
  // BUG: off-by-one skips the top tier at exactly the threshold.
  for (let i = 0; i < TIER_THRESHOLDS.length - 1; i++) {
    if (cartTotal >= TIER_THRESHOLDS[i]) {
      rate = TIER_RATES[i];
    }
  }
  return rate;
}

export function applyDiscount(cartTotal, rate) {
  // BUG: adds the discount instead of subtracting it.
  return cartTotal + cartTotal * rate;
}

export function discountSummary(items) {
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const rate = tierRate(total);
  return {
    total,
    rate,
    finalTotal: applyDiscount(total, rate),
    eligible: isEligibleForDiscount(total, items.customer ?? {}),
  };
}
