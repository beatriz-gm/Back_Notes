# Back Notes 

* Aplicação em Node.js onde se pode criar um acesso para o usuário com senha que, uma vez logado pode cadastrar notas com tags e links relacionadas à ela, com filtro de pesquisa por tag e por campo digitado, opção de excluir a nota e alterar dados do usuário.

![alt text](assets/cardinalidade.png "layout")
  
## Detalhes adicionados ao projeto:
- Criptografia de senhas;
- Validação de e-mail;
- Aplicação do Cascade para garantir que uma tag será excluída caso o usuário opte por excluir a nota.


## Para rodar a aplicação, use os seguintes comandos:

```
npm install

npm run dev

npm run migrate
```

### By: [Beatriz Galvão](https://www.linkedin.com/in/beatriz-galmed/) 💜