export function sum(a: number, b: number) {
  return a + b;
}

export const sumFromArray = (arr: number[]) => {
  return arr.reduce((acc, curr) => acc + curr, 0);
};
