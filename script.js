function clicar(num){
    
    let tela = document.getElementById('tela')
    tela.value += num
}

function limpar(){
    var tela = document.getElementById('tela')
    tela.value =''
    
}

function calculo(){
    let tela = document.getElementById('tela')
    let tela2 = tela.value

    if(tela.value == ''){
        tela.value = ''

    } else {
       
        tela.value = eval(tela2)
    }
}

function backspace(){
 
}

