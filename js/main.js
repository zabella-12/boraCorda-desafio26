let porcao = document.getElementById('contador');
let quantidades = document.querySelectorAll('.qtd');
let subtracao = document.querySelector('.menos');
let soma = document.querySelector('.mais');
let valorFormatado

function atualizaPorcoes() {
    quantidades.forEach((element) => {
        element.innerHTML = parseInt(porcao.value);
    });
}

subtracao.addEventListener('click', () => {
    if (parseInt(porcao.value) > 1) {
        porcao.value = parseInt(porcao.value) - 1
    }
    valorFormatado = (parseInt(porcao.value) < 10 ? '0' : '') + parseInt(porcao.value);
    porcao.value = `${valorFormatado}`
    atualizaPorcoes()
})

soma.addEventListener('click', () => {
    porcao.value = parseInt(porcao.value) + 1
    valorFormatado = (parseInt(porcao.value) < 10 ? '0' : '') + parseInt(porcao.value);
    porcao.value = `${valorFormatado}`
    atualizaPorcoes()
})