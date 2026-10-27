import { ItemCarrinho } from "./types";
import { buscarProdutoPorId } from "./produtos";

const itensCarrinho: ItemCarrinho[] = [];

export function listarItensCarrinho(): ItemCarrinho[] {
  return itensCarrinho;
}

export function adicionarAoCarrinho(produtoId: number, quantidade: number): string {
  if (!Number.isInteger(quantidade) || quantidade <= 0) return "Erro: a quantidade deve ser um inteiro maior que zero.";
  const produto = buscarProdutoPorId(produtoId);
  if (!produto) return "Erro: produto não encontrado.";
  const itemExistente = itensCarrinho.find((item) => item.produtoId === produtoId);
  const quantidadeFinal = quantidade + (itemExistente ? itemExistente.quantidade : 0);
  if (quantidadeFinal > produto.estoque) return "Erro: quantidade solicitada maior que o estoque disponível.";
  if (itemExistente) itemExistente.quantidade = quantidadeFinal;
  else itensCarrinho.push({ produtoId, quantidade });
  return "Item adicionado ao carrinho.";
}

export function alterarQuantidadeCarrinho(produtoId: number, novaQuantidade: number): string {
  if (!Number.isInteger(novaQuantidade) || novaQuantidade <= 0) return "Erro: a quantidade deve ser um inteiro maior que zero.";
  const produto = buscarProdutoPorId(produtoId);
  if (!produto) return "Erro: produto não encontrado.";
  if (novaQuantidade > produto.estoque) return "Erro: quantidade solicitada maior que o estoque disponível.";
  const item = itensCarrinho.find((itemCarrinho) => itemCarrinho.produtoId === produtoId);
  if (!item) return "Erro: item não encontrado no carrinho.";
  item.quantidade = novaQuantidade;
  return "Quantidade do carrinho atualizada.";
}

export function removerDoCarrinho(produtoId: number): string {
  const indice = itensCarrinho.findIndex((item) => item.produtoId === produtoId);
  if (indice === -1) return "Erro: item não encontrado no carrinho.";
  itensCarrinho.splice(indice, 1);
  return "Item removido do carrinho.";
}

export function calcularSubtotal(produtoId: number): number {
  const item = itensCarrinho.find((itemCarrinho) => itemCarrinho.produtoId === produtoId);
  const produto = buscarProdutoPorId(produtoId);
  if (!item || !produto) return 0;
  return Number((produto.preco * item.quantidade).toFixed(2));
}

export function calcularTotalCarrinho(): number {
  return Number(itensCarrinho.reduce((total, item) => total + calcularSubtotal(item.produtoId), 0).toFixed(2));
}

export function limparCarrinho(): void {
  itensCarrinho.splice(0, itensCarrinho.length);
}
