import { catalago, salvarLocalStorage,} from "./utilidades";
import { lerLocalStorage } from "./utilidades";

const idsProdutoCarrinhoComQuantidade = lerLocalStorage ("carrinho") ?? {};


function abrirCarrinho(){
    document.getElementById("carrinho").classList.add("right-[0px]");
    document.getElementById("carrinho").classList.remove("right-[-360px]");
    atualizarPrecoCarrinho();

}

function fecharCarrinho(){
    document.getElementById("carrinho").classList.remove("right-[0px]");
    document.getElementById("carrinho").classList.add("right-[-360px]");
}

function irParaCheckout(){
    if (Object.keys(idsProdutoCarrinhoComQuantidade).length === 0) {
        return;
    }
    window.location.href = "/Ecomerce/checkout.html";
}


export function inicilizarCarrinho(){
    const botaoFecharCarrinho = document.getElementById("fechar-carrinho");
    const botaoAbrirCarrinho = document.getElementById("abrir-carrinho");
    const botaoIrParaCheckout = document.getElementById("contatar");

    botaoFecharCarrinho.addEventListener("click", fecharCarrinho);
    botaoAbrirCarrinho.addEventListener("click", abrirCarrinho);
    botaoIrParaCheckout.addEventListener("click", irParaCheckout);

}
  
    function removerDoCarrinho(idProduto){
        delete idsProdutoCarrinhoComQuantidade[idProduto];
        salvarLocalStorage("carrinho", idsProdutoCarrinhoComQuantidade);
        atualizarPrecoCarrinho();
        renderizarProdutosCarrinho();
    }

    function incrimentarQuantidadeProduto(idProduto){
        idsProdutoCarrinhoComQuantidade[idProduto]++;
        salvarLocalStorage("carrinho", idsProdutoCarrinhoComQuantidade);
        atualizarPrecoCarrinho();
        atualizarInformacaoQuantidade(idProduto);
    }

    function decrementarQuantidadeProduto(idProduto){
        if(idsProdutoCarrinhoComQuantidade[idProduto] === 1){
            removerDoCarrinho(idProduto);
            return;
        }
        idsProdutoCarrinhoComQuantidade[idProduto]--;
        salvarLocalStorage("carrinho", idsProdutoCarrinhoComQuantidade);
        atualizarPrecoCarrinho();
        atualizarInformacaoQuantidade(idProduto);
    }

    function atualizarInformacaoQuantidade(idProduto){
        document.getElementById(`quantidade-${idProduto}`).innerText = idsProdutoCarrinhoComQuantidade[idProduto];
        
    }

function desenharProdutoNoCarrinho(idProduto){
    const produto = catalago.find((p) => p.id === idProduto);
     const containerProdutosCarrinho = 
        document.getElementById("produtos-carrinho");
     
     
    const elementoArticle = document.createElement("article") 
    const articleClasses = [
    "flex", 
    "bg-slate-100",
     "rounded-lg", 
     "p-1", 
     "relative"];
    
 for (const articleClass of articleClasses){
    elementoArticle.classList.add(articleClass);
 }
    
    const cartaoProdutoCarrinho =`<button id="remover-item${produto.id}" class="absolute top-0 right-2" ><i class="fa-solid fa-circle-xmark text-slate-700  hover:text-red-400"></i>
    </button>
    <img src="./assets/img/${produto.imagem}" alt="${produto.Nome}"  class="w-24 h-20 rounded-lg mr-2">
    <div class="p-2 flex flex-col justify-between">
    <p class="text-slate-900 text-sm">${produto.Nome}</p>
    <p class="text-slate-400">${produto.mentor}</p>
    <p class="text-green-400">$${produto.Preco}</p>
    </div>
    <div class="flex text-slate-950 items-end absolute bottom-0 right-2 text-lg">
         <button id="decrementar-produto-${produto.id}"><i class=" ml-2 hover:text-red-300 font-mono text-xl ">-</i></button>
         <p id="quantidade-${produto.id}" class="ml-2 font-mono ">${idsProdutoCarrinhoComQuantidade[produto.id]}</p>
         <button id="incrementar-produto-${produto.id}" class="text-9x1 ml-2 hover:text-green-700">+</i></button>
    </div>
  `;


  elementoArticle.innerHTML = cartaoProdutoCarrinho;
  containerProdutosCarrinho.appendChild(elementoArticle);

  document.getElementById(`decrementar-produto-${produto.id}`).addEventListener("click",() => decrementarQuantidadeProduto(produto.id));
  document.getElementById(`incrementar-produto-${produto.id}`).addEventListener("click",() => incrimentarQuantidadeProduto(produto.id));

  document.getElementById(`remover-item${produto.id}`).addEventListener("click",() => removerDoCarrinho(produto.id))
}

export function renderizarProdutosCarrinho(){
        const containerProdutosCarrinho = 
        document.getElementById("produtos-carrinho");
        containerProdutosCarrinho.innerHTML = "";
        
        for(const idProduto in idsProdutoCarrinhoComQuantidade){
            desenharProdutoNoCarrinho(idProduto);
        }
   
}

    export function adcionarAoCarrinho(idProduto){
    if (idProduto in idsProdutoCarrinhoComQuantidade){
        incrimentarQuantidadeProduto(idProduto);
        return;
    }
    idsProdutoCarrinhoComQuantidade[idProduto] = 1;
    salvarLocalStorage("carrinho", idsProdutoCarrinhoComQuantidade);
    desenharProdutoNoCarrinho(idProduto);
    atualizarPrecoCarrinho();
    
    
    
    
}


export function atualizarPrecoCarrinho(){
    const precoCarrinho  =  document.getElementById("preco-total");
    let precoTotalCarrinho = 0;
    for(const idProdutonoCarrinho in idsProdutoCarrinhoComQuantidade){
        precoTotalCarrinho += catalago.find((p) => p.id === idProdutonoCarrinho).Preco* idsProdutoCarrinhoComQuantidade[idProdutonoCarrinho];
    }
    precoCarrinho.innerText = `Total: $${precoTotalCarrinho}`;




}

export function precoTotalCompra(){
    const precoCarrinho  =  document.getElementById("preco-compra");
    let precoTotalCarrinho = 0;
    for(const idProdutonoCarrinho in idsProdutoCarrinhoComQuantidade){
        precoTotalCarrinho += catalago.find((p) => p.id === idProdutonoCarrinho).Preco* idsProdutoCarrinhoComQuantidade[idProdutonoCarrinho];
    }
    precoCarrinho.innerText = `Total: $${precoTotalCarrinho}`;




}