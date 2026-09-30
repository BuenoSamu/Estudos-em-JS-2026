let a = Number(prompt("Digite o primeiro número:"));
let b = Number(prompt("Digite o segundo número:"));

function somaDivisores(numero) {
  let soma = 0;

  for (let i = 1; i < numero; i++) {
    if (numero % i === 0) {
      soma += i;
    }
  }

  return soma;
}

function saoAmigos(a, b) {
  let somaA = somaDivisores(a);
  let somaB = somaDivisores(b);

  return somaA === b && somaB === a;
}

if (saoAmigos(a, b)) {
  alert("Os números " + a + " e " + b + " SÃO amigos!");
} else {
  alert("Os números " + a + " e " + b + " NÃO são amigos!");
}
