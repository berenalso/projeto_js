// 1. Declarando variáveis com var 
var cidade = "São Paulo";
var cidade = "Rio de Janeiro";
console.log("Ex 1:", cidade);

// 2. Diferença entre let e var 
let pais = "Brasil";
// let pais = "Argentina"; // Erro: SyntaxError: Identifier 'pais' has already been declared

// 3. Usando const 
const PI = 3.14;
// PI = 3.14159; // Erro: TypeError: Assignment to constant variable.

// 4. Alterando arrays com const 
const animais = ["cachorro", "gato"];
animais.push("pássaro");
console.log("Ex 4:", animais);

// 5. Operador && (E lógico) 
let idadeEx5 = 20;
let carteira = false;
if (idadeEx5 >= 18 && carteira) {
  console.log("Ex 5: Pode dirigir");
} else {
  console.log("Ex 5: Não pode dirigir");
}

// 6. Operador || (OU lógico) 
let feriado = false;
let fimDeSemana = true;
if (feriado || fimDeSemana) {
  console.log("Ex 6: Dia de descanso!");
} else {
  console.log("Ex 6: Dia de trabalho.");
}

// 7. Operador ! (NÃO lógico) 
let chuva = false;
if (!chuva) {
  console.log("Ex 7: Podemos ir à praia!");
}

// 8. Condição de login simples 
let usuarioEx8 = "João";
let senhaEx8 = "abcd";
if (usuarioEx8 === "João" && senhaEx8 === "abcd") {
  console.log("Ex 8: Acesso permitido");
} else {
  console.log("Ex 8: Acesso negado");
}

// 9. Testando maioridade 
let idadeEx9 = 16;
if (idadeEx9 >= 18) {
  console.log("Ex 9: Maior de idade");
} else {
  console.log("Ex 9: Menor de idade");
}

// 10. Cadastro de frutas 
const frutasEx10 = ["maçã", "banana"];
frutasEx10.push("laranja", "uva");
console.log("Ex 10:", frutasEx10);

// 11. Usando var 
function testeVar() {
  if (true) {
    var mensagem = "Existo fora do bloco!";
  }
  console.log("Ex 11:", mensagem);
}
testeVar();

// 12. Diferença entre let e var 
let numero = 10;
if (true) {
  let numero = 20;
  console.log("Ex 12 (dentro do bloco):", numero);
}
console.log("Ex 12 (fora do bloco):", numero);

// 13. Alterando objetos com const 
const pessoa = {
  nome: "Ana",
  idade: 22
};
pessoa.idade = 23;
console.log("Ex 13:", pessoa);

// 14. Operador && (E lógico) 
let logado = true;
let isAdmin = false;
if (logado && isAdmin) {
  console.log("Ex 14: Bem-vindo, administrador!");
} else {
  console.log("Ex 14: Acesso restrito.");
}

// 15. Operador || (OU lógico) 
let promocao = false;
let cupom = true;
if (promocao || cupom) {
  console.log("Ex 15: Desconto aplicado!");
} else {
  console.log("Ex 15: Preço normal.");
}

// 16. Operador ! (NÃO lógico) 
let carrinhoVazio = true;
if (!carrinhoVazio) {
  console.log("Ex 16: Você tem itens no carrinho!");
} else {
  console.log("Ex 16: Carrinho vazio, adicione produtos.");
}

// 17. Login com várias condições 
let usuarioEx17 = "Carlos";
let senhaEx17 = "1234";
let bloqueadoEx17 = false;
if (usuarioEx17 === "Carlos" && senhaEx17 === "1234" && !bloqueadoEx17) {
  console.log("Ex 17: Login autorizado!");
} else {
  console.log("Ex 17: Login negado.");
}

// 18. Arrays com const 
const frutasEx18 = ["maçã", "banana"];
frutasEx18.push("uva", "laranja");
console.log("Ex 18:", frutasEx18);

// 19. Escopo de bloco com let 
let idadeEx19 = 18;
if (true) {
  let idadeEx19 = 25;
  console.log("Ex 19 (idade interna):", idadeEx19);
}
console.log("Ex 19 (idade externa):", idadeEx19);

// 20. Condição com &&, || e ! juntos 
let usuarioEx20 = "Maria";
let senhaEx20 = "abcd";
let bloqueadoEx20 = true;
if (((usuarioEx20 === "Maria" && senhaEx20 === "abcd") || usuarioEx20 === "admin") && !bloqueadoEx20) {
  console.log("Ex 20: Acesso liberado");
} else {
  console.log("Ex 20: Acesso negado");
}