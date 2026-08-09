export function helper5(): number {
  return 5;
}

export const unused5 = "dead-5";

export function active5(x: number): number {
  return x + helper5();
}
