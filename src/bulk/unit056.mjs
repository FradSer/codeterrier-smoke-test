// Bulk fixture 056: bounded numeric helpers for the restart acceptance run.

/** Clamp a value into an inclusive range. */
export function clamp056(value, low, high) {
  if (low > high) throw new Error("low must not exceed high");
  return Math.min(Math.max(value, low), high);
}

/** Round a value to a number of decimal places. */
export function round056(value, places) {
  const factor = 10 ** places;
  return Math.round(value * factor) / factor;
}

/** Whether a value lies inside an inclusive range. */
export function within056(value, low, high) {
  return value >= low && value <= high;
}

/** Linear interpolation between two bounds at a ratio in [0, 1]. */
export function lerp056(from, to, ratio) {
  return from + (to - from) * ratio;
}
