/**
 * 나눠서 정복해라.
 * dive & conquer
 * 피보나치
 * 1 1 2 3 5 8
 * An = An-1 + An-2
 */

let number = 3;

function test(number) {
  if (number <= 2) {
    return 1;
  }

  return test(number - 2) + test(number - 1);
}

console.log(test(number));
