export function helper10(): number {
  return 10;
}

export const unused10 = "dead-10";

export function active10(x: number): number {
  return x + helper10();
}
