import { isOdd } from "@lenmor-invoicesimple/is-odd-2";

export function isEven(num: number): boolean {
  console.log("isEven called with 12:", num);
  return !isOdd(num);
}