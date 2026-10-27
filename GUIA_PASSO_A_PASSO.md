# Guia passo a passo — Mini E-commerce com TypeScript

Este guia explica como abrir, entender, testar e publicar o projeto. Leia e pratique os passos; o objetivo é conseguir explicar o que cada módulo faz.

## 1. Preparar o computador

1. Instale o Node.js na versão LTS pelo site oficial: https://nodejs.org/ . A instalação inclui o npm.
2. Instale o Git: https://git-scm.com/ .
3. Abra o Visual Studio Code.
4. No menu **Terminal > Novo Terminal**, execute:

   ```bash
   node --version
   npm --version
   git --version
   ```

   Cada comando deve mostrar um número de versão. Se algum comando não for reconhecido, feche e abra o terminal novamente; se continuar, verifique a instalação.

## 2. Abrir a pasta no VS Code

1. Extraia o arquivo ZIP para uma pasta fácil de localizar.
2. No VS Code, clique em **Arquivo > Abrir Pasta**.
3. Escolha a pasta `Miniprojeto_Ecommerce_Iniciante` que contém `package.json`, `tsconfig.json` e `src`.
4. Na lateral esquerda, abra o Explorer. Os arquivos TypeScript ficam dentro de `src`.
5. Abra **Terminal > Novo Terminal**. Confirme que o terminal está na pasta raiz do projeto. Se necessário, use `cd` para entrar nela.

## 3. Entender a estrutura

- `types.ts`: descreve o formato de Produto, Cliente, ItemCarrinho e Pedido. A tipagem ajuda o TypeScript a detectar usos incorretos.
- `produtos.ts`: contém o array inicial de produtos e as funções de cadastrar, listar, buscar, filtrar, atualizar e remover.
- `clientes.ts`: inicia com três clientes e implementa cadastro, listagem e busca por ID.
- `carrinho.ts`: mantém os itens selecionados, verifica estoque e calcula subtotais e total.
- `pedidos.ts`: valida o cliente e todos os itens antes de criar o pedido e reduzir o estoque.
- `relatorios.ts`: soma pedidos e quantidades vendidas e apresenta o estoque.
- `main.ts`: chama as funções dos outros arquivos para demonstrar o funcionamento.
- `tsconfig.json`: informa ao compilador como transformar TypeScript em JavaScript.
- `package.json`: registra metadados, dependências e atalhos de comandos.
- `.gitignore`: evita enviar `node_modules`, `dist` e arquivos locais desnecessários ao GitHub.

## 4. Instalar dependências

No terminal integrado, execute:

```bash
npm install
```

O npm lê `package.json` e instala TypeScript, ts-node e os tipos do Node.js. É normal aparecer a pasta `node_modules`; ela não deve ser enviada ao GitHub. Se a instalação falhar, confira a conexão e a versão do Node.js.

## 5. Compilar o projeto

Execute:

```bash
npm run build
```

O compilador verifica os arquivos `.ts` e gera arquivos `.js` dentro de `dist`. Se aparecerem erros, leia primeiro o nome do arquivo e a linha indicados. Corrija o código e execute o comando novamente. A compilação deve terminar sem erros.

## 6. Executar a aplicação

Depois da compilação, execute:

```bash
npm start
```

O script `start` executa `node dist/main.js`. A saída do terminal apresenta as consultas, cadastros, carrinho, pedido, atualização do estoque, testes inválidos e relatório final. Como os dados ficam em memória, cada nova execução começa novamente com os dados iniciais.

## 7. Testar os principais cenários

Confira na saída:

1. Os produtos iniciais e as buscas por ID, nome e categoria.
2. Cadastro, atualização e remoção de um produto de demonstração.
3. Os três clientes iniciais e o cadastro de outro cliente.
4. Inclusão de dois produtos no carrinho e adição repetida de um deles sem linha duplicada.
5. Alteração da quantidade, subtotais e total.
6. Rejeição de preço negativo.
7. Rejeição de quantidade maior que o estoque.
8. Rejeição de pedido para cliente inexistente.
9. Finalização de pedido válida e redução do estoque.
10. Rejeição de pedido sem itens.
11. Relatório final de vendas.

Para aprender, altere um valor de teste de cada vez, execute novamente e observe a diferença. Depois desfaça as alterações experimentais.

## 8. Como os módulos se comunicam

O projeto utiliza `export` para disponibilizar funções e tipos e `import` para utilizá-los em outros arquivos. Por exemplo, `main.ts` importa `cadastrarProduto` de `produtos.ts` e chama essa função. Assim, cada arquivo tem uma responsabilidade e o código não fica todo concentrado no arquivo principal.

O sistema usa métodos de array comuns:

- `find()` procura um registro, como um produto por ID.
- `filter()` retorna registros que atendem a uma condição, como produtos de uma categoria.
- `some()` verifica se já existe ID ou e-mail repetido.
- `map()` transforma os itens do carrinho em itens do pedido.
- `reduce()` soma subtotais e valores do relatório.

Na finalização do pedido, o código faz duas etapas: primeiro verifica todos os itens e a disponibilidade de estoque; somente se todas as validações passarem é que reduz o estoque e registra o pedido. O pedido guarda o preço unitário praticado naquele momento.

## 9. Preencher a identificação do estudante

Abra `README.md` e substitua:

- `[PREENCHA SEU NOME]` pelo seu nome;
- `[PREENCHA SUA TURMA]` pela identificação correta da turma.

Salve com `Ctrl + S`. Use o nome de repositório solicitado no enunciado: `Miniprojeto_Ecommerce_NomeAluno_Turma`.

## 10. Criar o repositório no GitHub pelo site

1. Entre em https://github.com/ e faça login.
2. Clique no botão **+** no topo e escolha **New repository**.
3. No campo **Repository name**, informe `Miniprojeto_Ecommerce_NomeAluno_Turma`, ajustando para seu nome e turma.
4. Marque **Public**, conforme solicitado no PDF.
5. Como o projeto já existe no computador, não precisa marcar para criar README, `.gitignore` ou licença no site.
6. Clique em **Create repository**.
7. Deixe a página aberta; ela mostrará o endereço HTTPS do repositório, que será usado no próximo passo.

## 11. Enviar os arquivos pelo Git no terminal do VS Code

Na raiz do projeto, execute um comando por vez. Troque a URL de exemplo pela URL HTTPS do seu repositório:

```bash
git init
git add .
git status
git commit -m "Adiciona estrutura inicial do mini e-commerce"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/Miniprojeto_Ecommerce_NomeAluno_Turma.git
git push -u origin main
```

Explicação:

- `git init`: inicia o controle de versão na pasta.
- `git add .`: prepara os arquivos que não estão ignorados.
- `git status`: permite conferir o que será incluído.
- `git commit`: registra um ponto da evolução do projeto.
- `git branch -M main`: define o nome da branch principal como `main`.
- `git remote add origin ...`: liga a pasta local ao repositório remoto.
- `git push -u origin main`: envia os commits ao GitHub.

Se o Git solicitar identidade, configure seu nome e e-mail de commit:

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu-email@example.com"
```

Use um e-mail apropriado para seus commits. Se `origin` já existir, não repita `git remote add origin`; confira com `git remote -v`. Se o GitHub pedir autenticação, siga a janela de login do navegador ou o método indicado pelo GitHub. Não compartilhe tokens ou senhas.

## 12. Registrar a evolução com novos commits

O PDF pede commits com mensagens claras. Para registrar a documentação depois de editar o README, execute:

```bash
git add README.md GUIA_PASSO_A_PASSO.md
git commit -m "Documenta instalação e execução do projeto"
git push
```

Você pode criar commits menores durante seu estudo, por exemplo, após concluir os produtos, os clientes e o carrinho. Não crie commits falsos para simular datas ou trabalho que não aconteceu: registre mudanças reais.

## 13. Conferir o repositório publicado

1. Atualize a página do repositório no GitHub.
2. Confira se aparecem `src`, `package.json`, `tsconfig.json`, `.gitignore` e `README.md`.
3. Abra `README.md` no site e confirme nome, turma, instruções e limitações.
4. Não se preocupe se `node_modules` e `dist` não aparecem; isso é intencional. O avaliador instala as dependências e gera `dist` com `npm install` e `npm run build`.
5. Copie a URL do repositório público.

## 14. Enviar no AVA

Conforme o PDF, a entrega é feita na tarefa **Módulo 1 - Mini-Projeto Avaliativo**, na semana 07 do AVA. O documento informa o prazo de **26/10/2026 às 22h**. Confira o AVA para confirmar o prazo e as instruções vigentes. Cole o link público do GitHub no campo solicitado e confirme o envio.

## 15. Checklist final

- [ ] Nome e turma preenchidos no README.
- [ ] `npm install` executado sem erro.
- [ ] `npm run build` concluído sem erro.
- [ ] `npm start` executado e saída conferida.
- [ ] Pelo menos três situações inválidas demonstradas.
- [ ] Repositório público criado com nome adequado.
- [ ] Código, configuração e README enviados ao GitHub.
- [ ] Commits com mensagens claras registrados.
- [ ] Link do GitHub submetido no AVA.

**Importante:** revise o código e pratique explicar as funções. O enunciado alerta que o estudante deve conseguir explicar o código e as decisões do projeto.
