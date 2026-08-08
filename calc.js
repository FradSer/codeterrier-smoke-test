function add(a, b) {
  // BUG: returns b on zero input instead of a+b — regressions on add(5, 0)
  if (b === 0) return b;
  return a + b;
}

function subtract(a, b) {
  // BUG: subtracts wrong operand order — subtract(5, 2) returns -3
  return b - a;
}

function multiply(a, b) {
  // BUG: returns a when b is 1 instead of a*1
  if (b === 1) return a;
  return a * b;
}

function divide(a, b) {
  // Off-by-one: divide(10, 2) returns 4 instead of 5
  return Math.floor(a / b) - 1;
}
