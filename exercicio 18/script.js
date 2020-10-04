function validaValor(numero) {
  if (numero < 1 || numero > 100) {
    window.alert('Valor Inválido! O valor deve ser maior que 0 e menor que 100.');
  } else {
    insereNumero(numero);
  }
}

const btnInsere = document.querySelector('#botao-inserir');
btnInsere.addEventListener('click', () => {
  const valor = document.querySelector('#numero').value;
  if (valor.length === 0) {
    window.alert('Por favor digite o número a ser adicionado!');
  } else {
    const numero = parseInt(valor);
    validaValor(numero);
  }
});
