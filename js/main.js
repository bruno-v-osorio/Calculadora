function inserir(num) {
    var numero = document.getElementById('resultado').innerHTML

    document.getElementById('resultado').innerHTML = numero + num; /* Para inserir mais de um número no input */
}


function limpar() {
    document.getElementById('resultado').innerHTML = ''
}

function apagar() {
    var insercao = document.getElementById('resultado').innerHTML

    document.getElementById('resultado').innerHTML = insercao.substring(0, insercao.length - 1)
}

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML
    if(resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado)
    } else {
        document.getElementById('resultado').innerHTML = 'Nada para calcular...'
    }
}