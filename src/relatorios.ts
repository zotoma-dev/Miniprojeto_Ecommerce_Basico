import { listarPedidos } from "./pedidos";
import { listarProdutos } from "./produtos";

export function exibirRelatorioVendas(): void {
  const pedidos = listarPedidos();
  const faturamento = pedidos.reduce((soma, pedido) => soma + pedido.total, 0);
  const unidadesVendidas = pedidos.reduce((soma, pedido) => {
    return soma + pedido.itens.reduce((totalItens, item) => totalItens + item.quantidade, 0);
  }, 0);

  console.log("\n===== RELATÓRIO DE VENDAS =====");
  console.log(`Pedidos realizados: ${pedidos.length}`);
  console.log(`Unidades vendidas: ${unidadesVendidas}`);
  console.log(`Faturamento total: R$ ${faturamento.toFixed(2)}`);
  console.log("Estoque atual:");
  listarProdutos().forEach((produto) => console.log(`- ${produto.nome}: ${produto.estoque} unidade(s)`));
}
