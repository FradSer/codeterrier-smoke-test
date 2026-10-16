// Bulk fixture 009: bounded numeric helpers for the restart acceptance run.

/** Clamp a value into an inclusive range. */
export function clamp009(value, low, high) {
  if (low > high) throw new Error("low must not exceed high");
  return Math.min(Math.max(value, low), high);
}

/** Round a value to a number of decimal places. */
export function round009(value, places) {
  const factor = 10 ** places;
  return Math.round(value * factor) / factor;
}

/** Whether a value lies inside an inclusive range. */
export function within009(value, low, high) {
  return value >= low && value <= high;
}

/** Linear interpolation between two bounds at a ratio in [0, 1]. */
export function lerp009(from, to, ratio) {
  return from + (to - from) * ratio;
}
