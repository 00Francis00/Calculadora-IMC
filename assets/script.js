

function calcular() {
    let peso = document.querySelector("#peso").value
    let altura = document.querySelector("#altura").value
    let nome = document.querySelector("#nome").value
    let resultado = document.querySelector("#resultado")

    if (peso !=="" && altura !=="" && nome !==""){
        let valorIMC = (peso/altura**2).toFixed(2)
        let msg =`${nome}, seu índice IMC é ${valorIMC}.`
        resultado.textContent = msg
    }else {
        resultado.textContent ="Preencha os campos!"
    }
    
}

let botao = document.querySelector("#botao")
botao.addEventListener("click",calcular)

    
