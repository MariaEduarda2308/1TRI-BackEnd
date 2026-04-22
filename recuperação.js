nome = "Maria Eduarda"
idade = 16
altura = 1.68
serie = 3
turma = "DSB"
console.log("Olá meu nome é" , (nome) , "tenho" , (idade) , "anos de idade" , (altura) , "de altura e sou do" , (serie) , "ano do ensino médio, e da turma", (turma))

const esportes = [ "vôlei" , "basquete" , "futebol"] 
function mostraresportes(){
    contador = 0
    while(contador < esportes.length){
        console.log(esportes[contador])
        contador++
    }
}
mostraresportes()

if (idade < 1.73) {
    console.log("Você é menor que o professor patrick")
} else {
    console.log("Você é maior que o professor patrick")
}