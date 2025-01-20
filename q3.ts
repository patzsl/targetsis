import * as fs from "fs";

function calculateRevenue(data: { dia: number; valor: number }[]): {
  lowest: number;
  highest: number;
  daysAboveAverage: number;
} {
  const revenueValues = data
    .map((item) => item.valor)
    .filter((value) => value > 0);

  const lowest = Math.min(...revenueValues);
  const highest = Math.max(...revenueValues);

  const average =
    revenueValues.reduce((acc, val) => acc + val, 0) / revenueValues.length;

  const daysAboveAverage = revenueValues.filter(
    (value) => value > average
  ).length;

  return {
    lowest,
    highest,
    daysAboveAverage,
  };
}

fs.readFile("dados.json", "utf8", (err: any, data: any) => {
  if (err) {
    console.error("Erro ao ler o arquivo:", err);
    return;
  }

  const revenueData = JSON.parse(data);
  const result = calculateRevenue(revenueData);
  console.log(result);
});
