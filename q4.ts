const billing: { [state: string]: number } = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Others: 19849.53,
};

function calculateTotalBilling(billing: { [state: string]: number }): number {
  return Object.values(billing).reduce((acc, value) => acc + value, 0);
}

function calculatePercentageRepresentation(
  billing: { [state: string]: number },
  total: number
): { [state: string]: number } {
  const percentageRepresentation: { [state: string]: number } = {};
  for (const state in billing) {
    percentageRepresentation[state] = (billing[state] / total) * 100;
  }
  return percentageRepresentation;
}

function displayResults(percentageRepresentation: {
  [state: string]: number;
}): void {
  for (const state in percentageRepresentation) {
    console.log(
      `O percentual de representação de ${state} é ${percentageRepresentation[
        state
      ].toFixed(2)}%`
    );
  }
}

const totalBilling = calculateTotalBilling(billing);
const percentageRepresentation = calculatePercentageRepresentation(
  billing,
  totalBilling
);
displayResults(percentageRepresentation);
