function calcularDivisores(valor) {
  let total = 0;

  for (let contador = 1; contador < valor; contador++) {
    if (valor % contador === 0) {
      total += contador;
    }
  }

  return total;
}

function verificarAmizade(num1, num2) {
  let resultado1 = calcularDivisores(num1);
  let resultado2 = calcularDivisores(num2);

  return resultado1 === num2 && resultado2 === num1;
}

let inicio = Number(prompt("Digite o valor mínimo:"));
let fim = Number(prompt("Digite o valor máximo:"));

for (let primeiro = inicio; primeiro <= fim; primeiro++) {
  for (let segundo = primeiro + 1; segundo <= fim; segundo++) {
    if (verificarAmizade(primeiro, segundo)) {
      console.log(primeiro + " e " + segundo + " são amigos!");
    }
  }
}
