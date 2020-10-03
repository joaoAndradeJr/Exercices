function contagem(inicio, fim, passo) {
  let contagem = [];
  if (inicio < fim) {
    for (let index = inicio; index <= fim; index += passo) {
      contagem.push(index);
      contagem.push('👉');
    }
  } else {
    for (let index = inicio; index >= fim; index -= passo) {
      contagem.push(index);
      contagem.push('👉');
    }
  }
  contagem.push('🏁');
  document.querySelector('#texto-saida').innerHTML = 'Contando:<br>' + contagem.join(' ');
}

function testaParametro(inicio, fim, passo) {
  if (inicio === 0) {
    window.alert('Número inicial inválido, considerando 1...');
    inicio = 1;
  }
  if (fim === 0) {
    window.alert('Número final inválido, informe um número válido!');
  }
  if (passo <= 0) {
    window.alert('Passo inválido, considerando 1...');
    passo = 1;
  }
  contagem(inicio, fim, passo);
}

window.onload = function() {
  const botaoContar = document.querySelector('#contar');
  botaoContar.addEventListener('click', function () {
    const inicio = document.querySelector('#inicio').value;
    const fim = document.querySelector('#fim').value;
    const passo = document.querySelector('#passo').value;
    testaParametro(parseInt(inicio), parseInt(fim), parseInt(passo));
  });
}