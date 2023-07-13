function clicar(num){
    var tela = document.getElementById('tela')
    tela.value += num

}

function limpar(){
    var tela = document.getElementById('tela')
    var history = document.getElementById('historico')
    tela.value =''
    history.innerHTML = ''
}

//quando apertar o botão de somar, armazenar em uma outra variavel

function somar(){
    
    var tela = document.getElementById('tela')
    var history = document.getElementById('historico')
    var n1 = Number(tela.value)

    if(n1 != ''){
        tela.value = ''
        history.innerHTML += ` ${n1} +`
    }

    var n2 = Number(tela.value)

    if(n2 != ''){
        tela.value = ''
        history.innerHTML += ` ${n2} +`
    }

}
