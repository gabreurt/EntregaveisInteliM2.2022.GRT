function Order(){
    let lista = []
    let input = $("#lista").val()
    let numero = $("#numero").val()

    input = input.split(",")

    input.map((val)=>{
        lista.push(Number(val))
    })

    lista = lista.sort()
    
    let numeroResult =input.indexOf(numero) + 1

    if(numeroResult == 0){ 
        numeroResult = "Esse valor não existe na sua sequência"
    }

    let p = $("#resultado3").html(`Ordenados de forma crescente ${lista} <br> O numero de ${numero} está na ${numeroResult} º`)
}