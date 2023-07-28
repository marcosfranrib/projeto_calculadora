let executado;

function clicar(num){
    
    let tela = document.getElementById('tela')
    tela.value += num
 
    if(executado == true && num == '+' || num == '-' || num == '*' || num == '/'){
        executado = false
        
    } else if(executado == true){
        tela.value = num
    }

    executado = false

}

function limpar(){
    var tela = document.getElementById('tela')
    tela.value =''
    
}

function calculo(){
    let tela = document.getElementById('tela')

    if(tela.value == ''){
        tela.value = ''

    } else {
       
        tela.value = eval(tela.value)
    }

    executado = true;
}

function backspace(){
    let tela = document.getElementById('tela')
    if(tela.value.length > 0){
    
        tela.value = tela.value.slice(0,-1)
    
    }
  
}

