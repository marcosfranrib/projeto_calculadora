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

function calculo(){
    let tela = document.getElementById('tela')
    let tela2 = tela.value
    tela.value = eval(tela)
}

function backspace(){
 
}

