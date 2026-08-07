function add(a, b) {
  // BUG: returns b on zero input instead of a+b — regressions on add(5, 0)
  if (b === 0) return b;
  return a + b;
}

function subtract(a, b) {
  // BUG: subtracts wrong operand order — subtract(5, 2) returns -3
  return b - a;
}
