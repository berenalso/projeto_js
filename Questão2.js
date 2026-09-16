function exercicio2() {
  const entradaA = prompt("Digite o primeiro valor:");
  const entradaB = prompt("Digite o segundo valor:");
 
  const a = Number(entradaA);
  const b = Number(entradaB);
 
  if (Number.isNaN(a) || Number.isNaN(b)) {
    console.log("Entrada inválida. Digite apenas números.");
    return;
  }
 
  const soma = a + b;
  const diferenca = a - b;
  const produto = a * b;
  const divisao = b === 0 ? "Erro: divisão por zero" : a / b;
  const resto = b === 0 ? "Erro: divisão por zero" : a % b;
 
  console.log(`Soma: ${soma}`);
  console.log(`Diferença: ${diferenca}`);
  console.log(`Produto: ${produto}`);
  console.log(`Divisão: ${divisao}`);
  console.log(`Resto: ${resto}`);
 
  if (a > b) {
    console.log("O primeiro valor é o maior.");
  } else if (b > a) {
    console.log("O segundo valor é o maior.");
  } else {
    console.log("Os valores são iguais.");
  }
 
  console.log(`typeof soma: ${typeof soma}`);
  console.log(`typeof diferença: ${typeof diferenca}`);
  console.log(`typeof produto: ${typeof produto}`);
  console.log(`typeof divisão: ${typeof divisao}`);
  console.log(`typeof resto: ${typeof resto}`);
}