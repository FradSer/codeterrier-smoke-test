export function helper1(): number {
  return 1;
}
export function active1(x: number): number {
  return x + helper1();
}
