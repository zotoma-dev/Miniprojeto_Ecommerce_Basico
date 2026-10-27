import { cadastrarProduto, listarProdutos, buscarProdutoPorId, buscarProdutosPorNome, filtrarProdutosPorCategoria, atualizarProduto, removerProduto } from "./produtos";
import { cadastrarCliente, listarClientes, buscarClientePorId } from "./clientes";
import { adicionarAoCarrinho, alterarQuantidadeCarrinho, removerDoCarrinho, listarItensCarrinho, calcularSubtotal, calcularTotalCarrinho } from "./carrinho";
import { finalizarPedido, listarPedidos, listarPedidosPorCliente } from "./pedidos";
import { exibirRelatorioVendas } from "./relatorios";

function moeda(valor: number): string {
  return `R$ ${valor.toFixed(2)}`;
}

console.log("====================================");
console.log(" MINI E-COMMERCE - DEMONSTRAÇÃO");
console.log("====================================");

console.log("\n1. PRODUTOS CADASTRADOS");
console.table(listarProdutos());
console.log("Busca pelo ID 1:", buscarProdutoPorId(1));
console.log("Busca por nome contendo 'mouse':", buscarProdutosPorNome("mouse"));
console.log("Filtro da categoria 'Periféricos':", filtrarProdutosPorCategoria("Periféricos"));
console.log(cadastrarProduto({ id: 5, nome: "Webcam HD", categoria: "Acessórios", preco: 149.9, estoque: 6 }));
console.log(atualizarProduto(5, { preco: 139.9 }));
console.log("Produto 5 após atualização:", buscarProdutoPorId(5));
console.log("Tentativa de remoção do produto 5:", removerProduto(5));
console.log("Produto 5 após remoção:", buscarProdutoPorId(5));

console.log("\n2. CLIENTES CADASTRADOS");
console.table(listarClientes());
console.log("Consulta cliente ID 1:", buscarClientePorId(1));
console.log(cadastrarCliente({ id: 4, nome: "Daniel Alves", email: "daniel@example.com" }));

console.log("\n3. CARRINHO DE COMPRAS");
console.log(adicionarAoCarrinho(1, 2));
console.log(adicionarAoCarrinho(2, 1));
console.log("Adicionar novamente o teclado atualiza a quantidade, sem duplicar linha:", adicionarAoCarrinho(1, 1));
console.log("Alteração da quantidade do mouse:", alterarQuantidadeCarrinho(2, 2));
console.log("Itens do carrinho:", listarItensCarrinho());
console.log("Subtotal do teclado:", moeda(calcularSubtotal(1)));
console.log("Total do carrinho:", moeda(calcularTotalCarrinho()));
console.log("Tentativa de remover item inexistente:", removerDoCarrinho(999));

console.log("\n4. SITUAÇÕES INVÁLIDAS (TESTES)");
console.log("Preço negativo:", cadastrarProduto({ id: 6, nome: "Produto inválido", categoria: "Teste", preco: -10, estoque: 3 }));
console.log("Quantidade maior que estoque:", adicionarAoCarrinho(3, 999));
console.log("Cliente inexistente:", finalizarPedido(999));

console.log("\n5. FINALIZAÇÃO DO PEDIDO");
console.log(finalizarPedido(1));
console.log("Pedidos registrados:", listarPedidos());
console.log("Pedidos do cliente 1:", listarPedidosPorCliente(1));
console.log("Estoque do teclado após a compra:", buscarProdutoPorId(1)?.estoque);

console.log("\n6. TESTE DE CARRINHO VAZIO");
console.log("Finalizar sem itens:", finalizarPedido(1));

console.log("\n7. RELATÓRIO FINAL");
exibirRelatorioVendas();

console.log("\nDemonstração concluída.");
