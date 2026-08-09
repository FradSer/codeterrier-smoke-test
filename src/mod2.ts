export function helper2(): number {
  return 2;
}

export const unused2 = "dead-2";

export function active2(x: number): number {
  return x + helper2();
}
