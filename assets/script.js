

function calcular() {
    let peso = document.querySelector("#peso").value
    let altura = document.querySelector("#altura").value
    let nome = document.querySelector("#nome").value
    let resultado = document.querySelector("#resultado")

    if (peso !=="" && altura !=="" && nome !==""){

        let valorIMC = (peso/altura**2).toFixed(1)
        let resultadoBox = document.querySelector('#resultadoBox')

        resultadoBox.textContent = valorIMC

        if(valorIMC <= 18.5){
            resultado.textContent = `${nome}, seu índice IMC é considerado abaixo do normal.`
        }else if (valorIMC >= 18.6 && valorIMC < 25.0) {
            resultado.textContent = `${nome}, seu índice IMC é considerado normal.`
        }else if (valorIMC >= 25.0 && valorIMC < 30.0){
            resultado.textContent = `${nome}, Você está com sobrepeso.`
        }else if (valorIMC >= 30.0 && valorIMC < 35.0){
            resultado.textContent = `.${nome}, Você está com obesidade de grau I.`
        }else if (valorIMC >= 35.0 && valorIMC < 40.0){
            resultado.textContent = `${nome}, Você está com obesidade de grau II.`
        }else {
            resultado.textContent = `${nome}, Você está com obesidade de grau III.`
        }

    }else {
        resultado.textContent ="Preencha todos os campos!"
    }
    
   
}

let botao = document.querySelector("#botao")
botao.addEventListener("click",calcular)

    
