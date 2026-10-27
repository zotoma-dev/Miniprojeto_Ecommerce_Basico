import { ItemPedido, Pedido } from "./types";
import { buscarClientePorId } from "./clientes";
import { buscarProdutoPorId } from "./produtos";
import { calcularTotalCarrinho, limparCarrinho, listarItensCarrinho } from "./carrinho";

const pedidos: Pedido[] = [];
let proximoIdPedido = 1;

export function finalizarPedido(clienteId: number): string {
  const cliente = buscarClientePorId(clienteId);
  if (!cliente) return "Erro: cliente não encontrado.";
  const itens = listarItensCarrinho();
  if (itens.length === 0) return "Erro: não é possível finalizar um pedido sem itens.";

  // Primeiro validamos todos os itens. O estoque só muda se todos forem válidos.
  for (const item of itens) {
    const produto = buscarProdutoPorId(item.produtoId);
    if (!produto) return `Erro: produto ${item.produtoId} não encontrado. Pedido não realizado.`;
    if (item.quantidade <= 0 || item.quantidade > produto.estoque) return `Erro: estoque insuficiente para ${produto.nome}. Pedido não realizado.`;
  }

  const itensPedido: ItemPedido[] = itens.map((item) => {
    const produto = buscarProdutoPorId(item.produtoId)!;
    const subtotal = Number((produto.preco * item.quantidade).toFixed(2));
    return {
      produtoId: produto.id,
      nomeProduto: produto.nome,
      quantidade: item.quantidade,
      precoUnitario: produto.preco,
      subtotal
    };
  });

  const novoPedido: Pedido = {
    id: proximoIdPedido,
    clienteId,
    itens: itensPedido,
    total: calcularTotalCarrinho(),
    data: new Date()
  };

  // Como todas as validações passaram, agora podemos atualizar o estoque.
  for (const item of itens) {
    const produto = buscarProdutoPorId(item.produtoId)!;
    produto.estoque -= item.quantidade;
  }
  pedidos.push(novoPedido);
  proximoIdPedido += 1;
  limparCarrinho();
  return `Pedido #${novoPedido.id} finalizado para ${cliente.nome}. Total: R$ ${novoPedido.total.toFixed(2)}.`;
}

export function listarPedidos(): Pedido[] {
  return pedidos;
}

export function listarPedidosPorCliente(clienteId: number): Pedido[] {
  return pedidos.filter((pedido) => pedido.clienteId === clienteId);
}
