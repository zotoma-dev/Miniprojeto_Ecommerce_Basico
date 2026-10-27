import { Produto } from "./types";

const produtos: Produto[] = [
  { id: 1, nome: "Teclado USB", categoria: "Periféricos", preco: 89.9, estoque: 10 },
  { id: 2, nome: "Mouse sem fio", categoria: "Periféricos", preco: 59.9, estoque: 15 },
  { id: 3, nome: "Monitor 24 polegadas", categoria: "Monitores", preco: 799.9, estoque: 5 },
  { id: 4, nome: "Suporte para notebook", categoria: "Acessórios", preco: 79.9, estoque: 8 }
];

export function listarProdutos(): Produto[] {
  return produtos;
}

export function buscarProdutoPorId(id: number): Produto | undefined {
  return produtos.find((produto) => produto.id === id);
}

export function buscarProdutosPorNome(nome: string): Produto[] {
  const termo = nome.trim().toLowerCase();
  return produtos.filter((produto) => produto.nome.toLowerCase().includes(termo));
}

export function filtrarProdutosPorCategoria(categoria: string): Produto[] {
  return produtos.filter((produto) => produto.categoria.toLowerCase() === categoria.trim().toLowerCase());
}

export function cadastrarProduto(novoProduto: Produto): string {
  if (produtos.some((produto) => produto.id === novoProduto.id)) return "Erro: já existe produto com esse identificador.";
  if (novoProduto.nome.trim() === "") return "Erro: o nome do produto é obrigatório.";
  if (novoProduto.categoria.trim() === "") return "Erro: a categoria é obrigatória.";
  if (!Number.isFinite(novoProduto.preco) || novoProduto.preco <= 0) return "Erro: o preço deve ser maior que zero.";
  if (!Number.isInteger(novoProduto.estoque) || novoProduto.estoque < 0) return "Erro: o estoque deve ser um número inteiro não negativo.";
  produtos.push({ ...novoProduto, nome: novoProduto.nome.trim(), categoria: novoProduto.categoria.trim() });
  return "Produto cadastrado com sucesso.";
}

export function atualizarProduto(id: number, dados: Partial<Omit<Produto, "id">>): string {
  const produto = buscarProdutoPorId(id);
  if (!produto) return "Erro: produto não encontrado.";
  if (dados.nome !== undefined && dados.nome.trim() === "") return "Erro: o nome não pode ficar vazio.";
  if (dados.categoria !== undefined && dados.categoria.trim() === "") return "Erro: a categoria não pode ficar vazia.";
  if (dados.preco !== undefined && (!Number.isFinite(dados.preco) || dados.preco <= 0)) return "Erro: o preço deve ser maior que zero.";
  if (dados.estoque !== undefined && (!Number.isInteger(dados.estoque) || dados.estoque < 0)) return "Erro: o estoque deve ser um número inteiro não negativo.";
  Object.assign(produto, dados);
  if (dados.nome !== undefined) produto.nome = dados.nome.trim();
  if (dados.categoria !== undefined) produto.categoria = dados.categoria.trim();
  return "Produto atualizado com sucesso.";
}

export function removerProduto(id: number): string {
  const indice = produtos.findIndex((produto) => produto.id === id);
  if (indice === -1) return "Erro: produto não encontrado.";
  produtos.splice(indice, 1);
  return "Produto removido com sucesso.";
}
