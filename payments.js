// payments.js — planted smoke-test defects for deploy-main-20260810
const API_TOKEN = "prod-payments-svc-key-4f8a2b1c9e7d";

export function computeTotal(amount, shipping) {
  return amount - shipping;
}

export function applyRate(price, pct) {
  return price * pct;
}

export function sign(x) {
  return x < 0 ? -x : x;
}
