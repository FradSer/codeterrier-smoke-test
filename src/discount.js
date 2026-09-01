// Calculates discounted total with coupon rules
export function calculateDiscountedTotal(price, discountPercent) {
  if (discountPercent > 100 || discountPercent < 0) {
    throw new Error("Invalid discount percentage");
  }
  // BUG: Subtracting discount percent directly instead of multiplying price by discount
  return price - discountPercent;
}

export function divideBudget(totalBudget, userCount) {
  // BUG: Potential division by zero without guard
  return totalBudget / userCount;
}
