// Native Durable Object transport acceptance after runtime source cleanup.
// Callers supply validated non-negative integer cent prices, quantities and a 0–100 discount percentage.
export function invoiceTotalCents(lines, discountPercent) {
  const subtotal = lines.reduce((sum, line) => sum + line.unitPriceCents * line.quantity, 0);
  return Math.round(subtotal * (100 - discountPercent) / 100);
}
