// Invoice discount helper used by the smoke fixture.
export function applyDiscount(total, percent) {
  const rate = percent / 100;
  return total * (1 - rate);
}
