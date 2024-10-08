/**
 * Returns the n-th Fibonacci number
 * @param n a non-negative integer, indicating which Fibonacci number to return
 * @returns 0 if n = 0, 1 if n = 1, and the sum of the previous two Fibonacci
 *    numbers otherwise
 */
export const fib = (n: number): number => {
  if (n < 0) {
    throw new Error('n must be non-negative');
  } else if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
};


/** Type that stores not just one Fibonacci number but the previous one also. */
export type FibPair = {curFib: number, prevFib: number};

/**
 * Returns the n-th Fibonacci number
 * @param n a positive integer, indicating which Fibonacci number to return
 * @returns a FibPair containing fib(n) (and also fib(n-1))
 */
export const fastFib = (n: number): FibPair => {
  // TODO: implement this in problem 1
  if (n <= 0) {
    throw new Error();
  } else if (n == 1) {
    const fibPair1: FibPair = {curFib: 1, prevFib: 0};
    return fibPair1;
  } else {
    const pastFibPair = fastFib(n - 1);
    const newCur = pastFibPair.curFib + pastFibPair.prevFib;
    const newPrev = pastFibPair.curFib;
    const fibPair2: FibPair = {curFib: newCur, prevFib: newPrev};
    return fibPair2;
  }
};


/** Type for storing (fib(n-1), fib(n)) for some n. */
export type FibPair2 = [number, number];

/**
 * Returns the n-th Fibonacci number
 * @param n a positive integer, indicating which Fibonacci number to return
 * @returns the pair containing fib(n)
 */
export const fastFib2 = (n: number): FibPair2 => {
  // TODO: implement this in problem 3
  throw new Error(`fastFib2(${n}) is not yet implemented`);
};


/**
 * Returns the smallest Fibonacci number that is greater than or equal to m.
 * @param m a non-negative integer
 * @returns the smallest Fibonacci number greater than or equal to m
 */
export const nextFib = (m: number): number => {
  if (m < 0) {
    throw new Error('m must be non-negative');
  } else if (m === 0) {
    return 0;
  } else {
    return nextFibHelper(0, 1, m);
  }
};

/**
 * Returns the smallest Fibonacci number that is greater than or equal to m.
 * @param prevFib the Fibonacci number before curFib
 * @param curFib the current Fibonacci number (working up to m)
 * @param m the lower bound on the Fibonacci number
 * @returns the smallest Fibonacci number greater than or equal to m
 */
const nextFibHelper = (prevFib: number, curFib: number, m: number): number => {
  // TODO: implement this in problem 4
  throw new Error(
      `nextFibHelper(${prevFib}, ${curFib}, ${m}) is not yet implemented`);
};

