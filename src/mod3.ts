export function helper3(): number {
  return 3;
}

export const unused3 = "dead-3";

export function active3(x: number): number {
  return x + helper3();
}
