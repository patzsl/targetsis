function fibonacci(n: number): number[] {
  const fib: number[] = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

function belongsToFibonacci(num: number): string {
  const fib = fibonacci(20);
  if (fib.indexOf(num) !== -1) {
    return `${num} pertence à sequência de Fibonacci.`;
  } else {
    return `${num} não pertence à sequência de Fibonacci.`;
  }
}

const number = 8;
console.log(belongsToFibonacci(number));
