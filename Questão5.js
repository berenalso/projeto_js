function exercicio5() {
  const preco = Number(prompt("Digite o preço base do produto:"));
  const vip = prompt("O cliente é VIP? (sim/não)").trim().toLowerCase() === "sim";
  const cupom = prompt("O cliente possui cupom? Digite o código ou deixe em branco:").trim().toUpperCase();
  const parcelas = Number(prompt("Em quantas parcelas deseja dividir?"));
 
  if (Number.isNaN(preco) || Number.isNaN(parcelas) || !Number.isInteger(parcelas) || parcelas <= 0) {
    console.log("Entrada inválida.");
    return;
  }
 
  let precoComDesconto = preco;
 
  if (vip) {
    precoComDesconto = preco * 0.8; // 20% de desconto
  } else if (preco > 150) {
    precoComDesconto = preco * 0.9; // 10% de desconto
  }
 
  if (cupom === "PROMO10") {
    precoComDesconto = precoComDesconto * 0.9; // mais 10% acumulativo
  }
 
  const ISS = 0.12;
  const precoComImposto = precoComDesconto * (1 + ISS);
 
  const totalComImposto = parcelas > 3
    ? precoComImposto * 1.02 // 2% de acréscimo
    : precoComImposto;
 
  const valorParcela = totalComImposto / parcelas;
 
  console.log(`Preço final: R$ ${totalComImposto.toFixed(2)}`);
  console.log(`Imposto (ISS/ICMS 12%) já incluso no preço final.`);
  console.log(`Número de parcelas: ${parcelas}`);
  console.log(`Valor de cada parcela: R$ ${valorParcela.toFixed(2)}`);
  console.log(`typeof totalComImposto: ${typeof totalComImposto}`);
}