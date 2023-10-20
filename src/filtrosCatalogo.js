const catalogoProdutos = document.getElementById("container-produto");


function exibirTodos(){
 const produtosEscondidos = Array.from(catalogoProdutos.getElementsByClassName("hidden"));

    for (const produto of produtosEscondidos){
        produto.classList.remove("hidden");
    }

}


function esconderSoftware (){
    exibirTodos();
    const produtosSoftwareEngineering = Array.from
    (catalogoProdutos.getElementsByClassName("Software Engineering")
    );

    for (const produto of produtosSoftwareEngineering) {
        produto.classList.add("hidden");
    }
}

function esconderDataScience (){
    exibirTodos();
    const produtosDataScience = Array.from
    (catalogoProdutos.getElementsByClassName("Data Science")
    );

    for (const produto of produtosDataScience) {
        produto.classList.add("hidden");
    }
}


 export function inicilizarFiltros(){
    document
    .getElementById("exibir-Data Science")
    .addEventListener("click", esconderSoftware);
    document
    .getElementById("exibir-todos")
    .addEventListener("click", exibirTodos);
    document
    .getElementById("exibir-Software Engineering")
    .addEventListener("click", esconderDataScience);
}