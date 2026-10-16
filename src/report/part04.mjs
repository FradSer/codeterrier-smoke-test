// Report fixture 04: pure helpers used by the acceptance run.

/** Sum of the values in cents. */
export function sum04(values) {
  return values.reduce((total, value) => total + value, 0);
}

/** Share of one value in a total, as a percentage with one decimal. */
export function share04(value, total) {
  if (total === 0) return 0;
  return Math.round((value / total) * 1000) / 10;
}

/** Rounded average of the values, or zero for an empty list. */
export function average04(values) {
  if (values.length === 0) return 0;
  return Math.round(sum04(values) / values.length);
}
