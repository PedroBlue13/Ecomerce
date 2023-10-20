
import { adcionarAoCarrinho } from "./menuCarrinho";
import { catalago } from "./utilidades";


export  function renderizarCatalogo(){
for(const produtoCatalogo of catalago){


    const cartaoProduto =`<div class=" w-48 m-2 flex flex-col p-2 justify-between shadow-xl shadow-slate-400 rounded-lg group ${produtoCatalogo.DataScience ? "Data Science" : "Software Engineering" }" id="card-produto-${produtoCatalogo.id}"> 
    <img 
    src="./assets/img/${produtoCatalogo.imagem}" 
    alt="Texto alternativo" 
    style="height: 200px;"
    class="group-hover:scale-110 duration-300 my-3 rounded-lg"
    />
    
    <p>${produtoCatalogo.Nome}</p>
    <p class="text-sm">${produtoCatalogo.Setor}</p>
    <p>${produtoCatalogo.mentor}</p>
    <p>$${produtoCatalogo.Preco}</p>
    <button id="adicionar-${produtoCatalogo.id}" class="bg-gradient-to-r from-black to-black text-slate-200 hover:from-green-500 hover:to-green-900 rounded-lg"><i class="fa-solid fa-cart-plus"></i></button>
    </div>`;
    
    
    document.getElementById("container-produto").innerHTML += cartaoProduto;
}
    
for(const produtoCatalogo of catalago){
    document
    .getElementById(`adicionar-${produtoCatalogo.id}`)
    .addEventListener("click", () => adcionarAoCarrinho(produtoCatalogo.id));

}
}