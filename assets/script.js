

function calcular() {
    let peso = document.querySelector("#peso").value
    let altura = document.querySelector("#altura").value
    let nome = document.querySelector("#nome").value
    let resultado = document.querySelector("#resultado")

    if (peso !=="" && altura !=="" && nome !==""){

        let valorIMC = (peso/altura**2).toFixed(1)
        let msgRuim = `${nome}, seu índice IMC é considerado abaixo do normal.`
        let msgNormal = `${nome}, seu índice IMC é considerado normal.`
        let msgSobrePeso = `${nome}, Você está com sobrepeso.`
        let msgObesidade_I = `.${nome}, Você está com obesidade de grau I.`
        let msgObesidade_II = `${nome}, Você está com obesidade de grau II.`
        let msgObesidade_III = `${nome}, Você está com obesidade de grau III.`
        let resultadoBox = document.querySelector('#resultadoBox')

        
        resultadoBox.textContent = valorIMC

        if(valorIMC <= 18.5){
            resultado.textContent = msgRuim
        }else if (valorIMC >= 18.6 && valorIMC < 25.0) {
            resultado.textContent = msgNormal
        }else if (valorIMC >= 25.0 && valorIMC < 30.0){
            resultado.textContent = msgSobrePeso
        }else if (valorIMC >= 30.0 && valorIMC < 35.0){
            resultado.textContent = msgObesidade_I
        }else if (valorIMC >= 35.0 && valorIMC < 40.0){
            resultado.textContent = msgObesidade_II
        }else {
            resultado.textContent = msgObesidade_III
        }

    }else {
        resultado.textContent ="Preencha todos os campos!"
    }
    
   
}

let botao = document.querySelector("#botao")
botao.addEventListener("click",calcular)

    
