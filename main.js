import { renderizarCatalogo } from "./src/cartaoProduto";
import { inicilizarFiltros } from "./src/filtrosCatalogo";
import { inicilizarCarrinho } from "./src/menuCarrinho";
import { atualizarPrecoCarrinho } from "./src/menuCarrinho";
import { renderizarProdutosCarrinho } from "./src/menuCarrinho";
import { precoTotalCompra } from "./src/menuCarrinho";




renderizarCatalogo();
inicilizarCarrinho();
atualizarPrecoCarrinho();
renderizarProdutosCarrinho();
inicilizarFiltros();
precoTotalCompra();