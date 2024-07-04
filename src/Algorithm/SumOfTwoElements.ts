//Complete the function solveMeFirst to compute the sum of two integers.

export let inputLines: string[] = [];
export let currentLine: number = 0;

export function readLine(): string {
  return inputLines[currentLine++];
}

export function solveMeFirst(a: number, b: number): number {
  return a + b;
}

export function sumTwoELements() {
  const a: number = Math.floor(Math.random() * 11);
  const b: number = Math.floor(Math.random() * 11);

  const result = solveMeFirst(a, b);
  console.log(result);
}
