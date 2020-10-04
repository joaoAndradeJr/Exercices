function geraTabuada(numero) {
  for (let index = 1; index <= 10; index += 1) {
    let atual = `${numero} x ${index} = ${numero * index} `;
    document.querySelector('.saida-tabuada').innerHTML += atual + '<br>';
  }
}

function geraCampo(numero) {
  if (!document.querySelector('.saida-tabuada')) {
    const paragrafo = document.createElement('p');
    const tabuadaContainer = document.querySelector('.tabuada-container');
    paragrafo.setAttribute('class', 'saida-tabuada');
    tabuadaContainer.appendChild(paragrafo);
  } else {
    document.querySelector('.saida-tabuada').innerHTML = '';
  }
  geraTabuada(numero);
}

const btnGerar = document.querySelector('#enviar');
btnGerar.addEventListener('click', () => {
  const numero = document.querySelector('#numero').value;
  if (numero.length === 0) {
    window.alert('Por favor informe o número da tabuada desejada!');
  } else {
    geraCampo(parseInt(numero));
  }
});
