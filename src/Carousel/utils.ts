export function peek<T>(array: T[], indexes: number[]): T[] {
  return indexes.map<T>((i) => array[i]);
}

export const mod = (b: number) => (a: number) => ((a % b) + b) % b;
