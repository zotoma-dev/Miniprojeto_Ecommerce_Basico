import { Cliente } from "./types";

const clientes: Cliente[] = [
  { id: 1, nome: "Ana Souza", email: "ana@example.com" },
  { id: 2, nome: "Bruno Lima", email: "bruno@example.com" },
  { id: 3, nome: "Carla Mendes", email: "carla@example.com" }
];

export function listarClientes(): Cliente[] {
  return clientes;
}

export function buscarClientePorId(id: number): Cliente | undefined {
  return clientes.find((cliente) => cliente.id === id);
}

export function cadastrarCliente(novoCliente: Cliente): string {
  if (clientes.some((cliente) => cliente.id === novoCliente.id)) return "Erro: já existe cliente com esse identificador.";
  if (novoCliente.nome.trim() === "") return "Erro: o nome é obrigatório.";
  if (novoCliente.email.trim() === "") return "Erro: o e-mail é obrigatório.";
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(novoCliente.email.trim());
  if (!emailValido) return "Erro: informe um e-mail válido.";
  if (clientes.some((cliente) => cliente.email.toLowerCase() === novoCliente.email.trim().toLowerCase())) return "Erro: esse e-mail já está cadastrado.";
  clientes.push({ ...novoCliente, nome: novoCliente.nome.trim(), email: novoCliente.email.trim() });
  return "Cliente cadastrado com sucesso.";
}
