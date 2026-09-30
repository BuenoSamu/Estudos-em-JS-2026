function validarCPF(cpf) {
  let numeros = cpf.replace(/\D/g, "");

  if (numeros.length !== 11) {
    return false;
  }

  let soma = 0;
  let peso = 10;

  for (let i = 0; i < 9; i++) {
    soma += Number(numeros[i]) * peso;
    peso--;
  }

  let digito1 = 11 - (soma % 11);

  if (digito1 === 10 || digito1 === 11) {
    digito1 = 0;
  }

  soma = 0;
  peso = 11;

  for (let i = 0; i < 10; i++) {
    soma += Number(numeros[i]) * peso;
    peso--;
  }

  let digito2 = 11 - (soma % 11);

  if (digito2 === 10 || digito2 === 11) {
    digito2 = 0;
  }

  if (digito1 === Number(numeros[9]) && digito2 === Number(numeros[10])) {
    return true;
  }

  return false;
}

let cpf = prompt("Digite um CPF:");

if (validarCPF(cpf)) {
  alert("CPF válido!");
} else {
  alert("CPF inválido!");
}
