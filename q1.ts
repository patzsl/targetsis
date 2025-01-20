function calculateSum(index: number): number {
  let sum = 0;
  let k = 0;

  while (k < index) {
    k = k + 1;
    sum = sum + k;
  }

  return sum;
}

const result = calculateSum(13);
console.log(result);
