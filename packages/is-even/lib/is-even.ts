import { isOdd } from "@lenmor-invoicesimple/is-odd-2";

export function isEven(num: number): boolean {
  console.log("isEven called with 111:", num);
  return !isOdd(num);
}