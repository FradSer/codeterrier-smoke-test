// Given validated line items and a percentage discount, the total stays in integer cents.
// When a discount is applied, then it reduces the subtotal by that percentage.
import test from "node:test";
import assert from "node:assert/strict";
import { invoiceTotalCents } from "./invoice.mjs";
test("applies a percentage to the whole subtotal", () => {
  assert.equal(invoiceTotalCents([{ unitPriceCents: 1000, quantity: 2 }], 25), 1500);
});
test("keeps an undiscounted invoice unchanged", () => {
  assert.equal(invoiceTotalCents([{ unitPriceCents: 1000, quantity: 2 }], 0), 2000);
});
test("keeps an empty invoice at zero with a nonzero discount", () => {
  assert.equal(invoiceTotalCents([], 25), 0);
});
test("handles a 100-cent subtotal where both formulas coincide", () => {
  assert.equal(invoiceTotalCents([{ unitPriceCents: 100, quantity: 1 }], 25), 75);
});
