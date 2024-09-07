> Biblioteca, entrada e saída de livros
> cadastrar o usuário, cadastrar os livros, emprestar os livros e buscar
> os registros de emprestimos

## DADOS

Usuario: [nome_completo, CPF, email, endereco, telefone]
Livro: [nome, quantidade, autor, genero, ISBN]
Emprestimo: [usuario_id, livro_id, data_retorno, data_devolucao, data_saida]

## UseCases (Regras de negócio)

- Cadastrar um novo usuário: CPF, email únicos
- Buscar usuário por CPF
- Retornar um usuário ou vazio

- Cadastrar um novo livro: ISBN único
- Buscar um livro por nome ou ISBN
- Retornar os livros ou vazio

- Emprestar um livro ao usuário: data_retorno > data_saida
- Um usuário não pode estar com mais de um livro com o mesmo ISBN ao mesmo tempo
- Um usuário não pode estar com mais de um livro com ISBN diferentes ao mesmo tempo
- Enviar um email ao cadastrar um empréstimo
- Devolver o livro emprestado: gerar multa por atraso de R$ 10,00
- Mostrar todos os empréstimos pendentes ordenados pela data de retorno mais antiga

## Estruturas
