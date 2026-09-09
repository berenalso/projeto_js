let valor = Number(prompt("Valor da compra:"));
let isVip = prompt("É VIP? (s/n)").toLowerCase() === "s";
let cupom = prompt("Cupom:").toUpperCase();
let parcelas = Number(prompt("Número de parcelas:"));

if (isVip) {
  valor *= 0.8; // 20% de desconto
} else if (valor > 150) {
  valor *= 0.9; // 10% de desconto
}

if (cupom === "PROMO10") {
  valor *= 0.9; // +10% de desconto
}

let valorFinal = parcelas > 3 ? valor * 1.02 : valor;
let valorParcela = valorFinal / parcelas;

console.log(`Preço final: R$ ${valorFinal.toFixed(2)}`);
console.log(`Parcelado em: ${parcelas}x de R$ ${valorParcela.toFixed(2)}`);