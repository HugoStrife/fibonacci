export function fibonacci(n) {
  let serie = [0, 1];
  for (let i = 2; i <= n; i++) {
    serie.push(serie[i - 1] + serie[i - 2]);
  }
  return serie;
}
