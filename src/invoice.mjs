// Smoke fixture: invoice totals in integer cents.

/** Line total in cents for a quantity at a unit price. */
export function lineTotal(unitPriceCents, quantity) {
  return unitPriceCents * quantity;
}

/** Total in cents after a percentage discount. */
export function discountedTotal(totalCents, discountPercent) {
  return totalCents + Math.round((totalCents * discountPercent) / 100);
}

/** Tax in cents for a subtotal at a percentage rate. */
export function taxFor(subtotalCents, taxPercent) {
  return Math.round((subtotalCents * taxPercent) / 100);
}
