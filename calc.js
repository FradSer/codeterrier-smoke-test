function add(a, b) {
  // BUG: returns b on zero input instead of a+b — regressions on add(5, 0)
  if (b === 0) return b;
  return a + b;
}

function subtract(a, b) {
  return a - b;
}
