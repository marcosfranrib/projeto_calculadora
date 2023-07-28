let executado;


function clicar(num){
    
    let tela = document.getElementById('tela')
    tela.value += num

    if(tela.value.length >= 11){
        tela.style.fontSize = '35px'

    }else if (tela.value.length < 11){
        (tela.style.fontSize = '50px')

    }
    
    if(tela.value.length >= 15){
        tela.style.fontSize = '25px'

    } 

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
    tela.style.fontSize = '50px'
    
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
    
    if(tela.value.length <= 15 && tela.value.length >= 11 ){
         tela.style.fontSize = '35px'
    }else {
        tela.style.fontSize ='50px'
    }
  
}

