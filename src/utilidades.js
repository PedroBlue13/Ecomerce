export const catalago =[
    {
    id:"1",
    Nome: 'Big Data',
    Setor: 'Data Engineering',
    Preco: 4000,
    mentor: 'Pedro Blue',
    imagem:"produto-1.PNG",
    remoto: true,
    DataScience: true,
},
{
    id:"2",
    Nome: 'Big Data and Data Programing',
    Setor: 'Data algorithm',
    Preco: 5000,
    mentor: 'Pedro Blue',
    imagem:"produto-2.png",
    remoto: true,
    DataScience: true,
},
{
    id:"3",
    Nome: 'Information Technology',
    Setor: 'Software Development',
    Preco: 4000,
    mentor: 'Pedro Blue',
    imagem:"produto-3.png",
    remoto: true,
    DataScience: false,
},
{
    id:"4",
    Nome: 'Information Technology',
    Setor: 'Programming Intelligence',
    Preco: 3000,
    mentor: 'Pedro Blue',
    imagem:"produto-4.png",
    remoto: true,
    DataScience: false,
},
{
    id:"5",
    Nome: 'Business Intelligence and Analytics',
    Setor: 'Analytical Modeling and Monitor Results',
    Preco: 3000,
    mentor: 'Pedro Blue',
    imagem:"produto-5.jpg",
    remoto: true,
    DataScience: true,
},
{
    id:"6",
    Nome: 'Business Intelligence and Analytics',
    Setor: 'Evaluate Monitor Results and Data Exploration',
    Preco: 3000,
    mentor: 'Pedro Blue',
    imagem:"produto-6.png",
    remoto: true,
    DataScience: true,
},
{
    id:"7",
    Nome: 'Business Intelligence and Analytics',
    Setor: 'NPS',
    Preco: 3000,
    mentor: 'Pedro Blue',
    imagem:"produto-7.png",
    remoto: true,
    DataScience: true,
},
{
    id:"8",
    Nome: 'Artificial intelligence and Information Technology',
    Setor: 'Machine Learning',
    Preco: 5000,
    mentor: 'Pedro Blue',
    imagem:"produto-8.png",
    remoto: true,
    DataScience: true,
},
];


export function salvarLocalStorage(chave, informacao){
    localStorage.setItem(chave, JSON.stringify(informacao));
}


   export function lerLocalStorage(chave) {
        return JSON.parse(localStorage.getItem(chave));
    }



export function apagarDoLocalStorage(chave){
    localStorage.removeItem(chave);
}






   export function desenharProdutoCarrinhoSimples(idProduto, idContainerHtml, quantidadeProduto){
        const produto = catalago.find((p) => p.id === idProduto);
         const containerProdutosCarrinho = 
            document.getElementById(idContainerHtml);
         
         
        const elementoArticle = document.createElement("article") 
        const articleClasses = [
         "flex", 
         "bg-slate-100",
         "rounded-lg", 
         "p-1", 
         "relative",
         "mb-2",
         "w-96"   
        ];
        
     for (const articleClass of articleClasses){
        elementoArticle.classList.add(articleClass);
     }
        
        const cartaoProdutoCarrinho =`
        <img src="./assets/img/${produto.imagem}" alt="${produto.Nome}"  class="w-24 h-20 rounded-lg mr-2">
        <div class="p-2 flex flex-col justify-between">
        <p class="text-slate-900 text-sm">${produto.Nome}</p>
        <p class="text-slate-400">${produto.mentor}</p>
        <p class="text-green-400">$${produto.Preco}</p>
        </div>
        <div class="flex text-slate-950 items-end absolute bottom-0 right-2 text-lg">
             
             <p id="quantidade-${produto.id}" class="ml-2">${quantidadeProduto}</p>
            
        </div>
      `;
    
    
      elementoArticle.innerHTML = cartaoProdutoCarrinho;
      containerProdutosCarrinho.appendChild(elementoArticle);
    
    
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