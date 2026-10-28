# Mini E-commerce — Mini-Projeto Avaliativo

**Estudante:** [PREENCHA SEU NOME]  
**Turma:** [PREENCHA SUA TURMA]  
**Curso:** Desenvolvedor Back-End Node [T6]

## 1. Objetivo

Desenvolver um sistema simples de gerenciamento de e-commerce usando TypeScript e Node.js. A aplicação funciona pelo terminal e mantém os dados em memória durante a execução.

## 2. Funcionalidades

- Cadastro, listagem, busca por ID, busca parcial por nome, filtro por categoria, atualização e remoção de produtos.
- Cadastro, listagem e busca de clientes, com validação de ID, nome e e-mail duplicado.
- Carrinho com inclusão, alteração e remoção de itens, subtotais e total.
- Finalização e consulta de pedidos, inclusive por cliente.
- Registro do nome e preço dos produtos no momento da compra.
- Atualização do estoque somente depois da validação de todos os itens.
- Relatório de pedidos, unidades vendidas, faturamento e estoque atual.
- Demonstração de situações inválidas no arquivo principal.

## 3. Tecnologias

- Node.js
- TypeScript
- JavaScript (gerado pelo compilador TypeScript)
- Visual Studio Code
- Git e GitHub para versionamento

## 4. Estrutura dos arquivos

```text
Miniprojeto_Ecommerce_Iniciante/
├── src/
│   ├── types.ts       # Tipos das entidades
│   ├── produtos.ts    # Regras do catálogo
│   ├── clientes.ts    # Cadastro e consulta de clientes
│   ├── carrinho.ts    # Itens e cálculos do carrinho
│   ├── pedidos.ts     # Finalização e consulta de pedidos
│   ├── relatorios.ts  # Relatório de vendas
│   └── main.ts        # Demonstração das funcionalidades
├── .gitignore
├── package.json
├── tsconfig.json
├── README.md
└── GUIA_PASSO_A_PASSO.md
```

## 5. Como executar

Requisitos: instalar uma versão LTS do Node.js e o Git. Abra a pasta do projeto no VS Code e abra o terminal integrado.

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Compile o TypeScript:

   ```bash
   npm run build
   ```

3. Execute o JavaScript compilado:

   ```bash
   npm start
   ```

O comando de compilação cria a pasta `dist/`. Ela não precisa ser enviada ao GitHub porque o `.gitignore` a exclui; quem baixar o projeto pode recriá-la com `npm run build`.

## 6. Exemplos demonstrados

O `main.ts` executa consultas e cadastros, altera e remove um produto, adiciona e altera itens do carrinho, calcula valores, finaliza um pedido e mostra relatórios. Também demonstra erros como preço negativo, quantidade acima do estoque, cliente inexistente e pedido sem itens.

## 7. Regras de negócio

- IDs de produtos e clientes devem ser únicos.
- Produto exige nome e categoria preenchidos, preço maior que zero e estoque inteiro não negativo.
- Cliente exige nome, e-mail válido, ID único e e-mail não utilizado.
- Quantidade do carrinho deve ser inteira e maior que zero; o produto precisa existir e haver estoque.
- Adicionar novamente o mesmo produto atualiza sua quantidade, sem duplicar a linha.
- Pedido exige cliente cadastrado, carrinho com itens e estoque suficiente para todos os itens.
- O estoque é reduzido apenas depois da validação de todos os itens.
- O pedido guarda nome e preço unitário da compra, preservando o histórico se o catálogo mudar depois.

## 8. Limitações conhecidas

- Os dados ficam em memória e são perdidos quando o programa termina.
- Não há interface gráfica, API REST, banco de dados, pagamento, frete, autenticação ou persistência em arquivo.
- O carrinho é único para a demonstração, não um carrinho separado por cliente.
- É um projeto didático, não um sistema pronto para uso comercial.

## 9. GitHub

Crie um repositório público com o nome `Miniprojeto_Ecommerce_NomeAluno_Turma`, substituindo os campos conforme solicitado no enunciado. Antes de publicar, preencha seu nome e turma neste README. Veja o arquivo `GUIA_PASSO_A_PASSO.md` para instruções detalhadas de Git, commits e envio do link no AVA.


teste
