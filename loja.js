//               0           1           2            3        4          5          6          7
const roupas = ["camisa", "saia", "calça", "shorts", "moletom", "jaqueta", "meia", "cropped"]
const valores = [60    ,     35      ,     100     ,    50   ,   150    ,    85    ,    10    ,   20   ]

function mostrarVestuario(){
    let contador = 0
    while(contador < roupas.length){
        console.log(roupas[contador] + " - R$ " + valores[contador])
        contador = contador + 1
    }
    console.log("------------------------------") // separador mais limpo
}

// Adicionar novos elementos na lista
function novoProduto(roupa, valor){
    roupas.push(roupa)
    valores.push(valor)
}

// Remover pelo índice
function deletarProduto(indice){
    roupas.splice(indice, 1)
    valores.splice(indice, 1)
}

// Execução na ordem pedida
mostrarVestuario()
novoProduto("camisa", 60)
mostrarVestuario()
deletarProduto(1) // remove Saia
mostrarVestuario()
