# Oh, hello there once again!

Neste projeto construído com JSON temos uma aplicação de terminal mostrando uma
série de livros organizados por categorias, cada um salvo em um array de objetos
no database.js, arquivo que simula um pacote JSON.

## module exports

Importante para exportar os dados do arquivo a serem consumidos por outras partes
da aplicação.

## Iniciando o projeto

Dentro da pasta do projeto, escreva:

* Obs: Certifique-se de que esteja com o terminal dentro da pasta Project.

````
npm init -y
````

Modifique o package.json, mais especificamente na parte de scripts. Adicione a
célula:

````JSON
"scripts": {
    "start": "node app.js"
},
````

## Dependências

Instalaremos uma dependência que permite a entrada de dados do usuário pelo
terminal, o que não é possível utilizando node nativo.

````
npm i readline-sync
````

## Sobre o programa

O primeiro passo do programa é capturar um input do usuário pela dependência da
readline se o mesmo deseja visualizar a disponibilidade de livros por categoria.
Se sim, mostramos as categorias disponíveis e perguntamos qual categoria ela
escolhe. Se não, mostramos todos os livros em ordem crescente de páginas.

Quando o usuário digitar uma seção de livros válida, será mostrada uma tabela
com os livros disponíveis daquela categoria. Se o usuário digitar não, será
mostrada uma tabela com todos os livros disponíveis no database.js.

## Tratamento de erros

Caso o usuário digite algo que não deveria, o programa o força a digitar um
input válido. O programa só acaba quando o usuário desejar, repetindo a função
app() toda vez que ele não quiser sair e mostrando uma mensagem de despedida caso
queira.