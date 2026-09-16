function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
 
  const limite = Math.sqrt(n);
  for (let divisor = 3; divisor <= limite; divisor += 2) {
    if (n % divisor === 0) return false;
  }
  return true;
}
 
function exercicio3() {
  const entrada = prompt("Digite um número inteiro:");
  const num = Number(entrada);
 
  if (Number.isNaN(num) || !Number.isInteger(num)) {
    console.log("Entrada inválida. Digite um número inteiro.");
    return;
  }
 
  if (num > 0) {
    console.log("O número é positivo.");
  } else if (num < 0) {
    console.log("O número é negativo.");
  } else {
    console.log("O número é zero.");
  }
 
  const paridade = Math.abs(num) % 2 === 0 ? "par" : "ímpar";
  console.log(`O número é ${paridade}.`);
 
  console.log(isPrime(num) ? "O número é primo." : "O número não é primo.");
}