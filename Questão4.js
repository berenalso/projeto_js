function exercicio4() {
  const n1 = Number(prompt("Digite a nota 1:"));
  const n2 = Number(prompt("Digite a nota 2:"));
  const n3 = Number(prompt("Digite a nota 3:"));
 
  if (Number.isNaN(n1) || Number.isNaN(n2) || Number.isNaN(n3)) {
    console.log("Entrada inválida. Digite apenas números.");
    return;
  }
 
  const p1 = 2, p2 = 3, p3 = 5;
  const somaPesos = p1 + p2 + p3;
  const media = (n1 * p1 + n2 * p2 + n3 * p3) / somaPesos;
 
  console.log(`Média ponderada: ${media.toFixed(2)}`);
 
  if (media >= 7) {
    console.log("Situação: Aprovado.");
  } else if (media >= 5) {
    console.log("Situação: Recuperação.");
 
    const exame = Number(prompt("Digite a nota do exame:"));
    if (Number.isNaN(exame)) {
      console.log("Nota do exame inválida. Processo cancelado.");
      return;
    }
 
    const novaMedia = (media + exame) / 2;
    console.log(`Nova média após exame: ${novaMedia.toFixed(2)}`);
    console.log(novaMedia >= 6 ? "Resultado final: Aprovado." : "Resultado final: Reprovado.");
  } else {
    console.log("Situação: Reprovado.");
  }
}