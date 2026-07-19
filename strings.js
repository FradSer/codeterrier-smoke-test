// Trim and collapse internal whitespace in a string.
function normalizeWhitespace(input) {
  return input.trim().replace(/\s+/g, " ");
}

// Truncate to at most `max` characters, appending an ellipsis when cut.
function truncate(text, max) {
  if (max < 0) throw new RangeError("max must be non-negative");
  if (text.length <= max) return text;
  if (max === 0) return "";
  return `${text.slice(0, max - 1)}…`;
}

module.exports = { normalizeWhitespace, truncate };

// smoke: trigger re-review
