export function helper4(): number {
  return 4;
}

export const unused4 = "dead-4";

export function active4(x: number): number {
  return x + helper4();
}
