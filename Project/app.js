const books = require('./database');
const readline = require('readline-sync');

function app() {
  let initialInput;

  do {
    initialInput = readline.question('Deseja buscar um livro por categoria?[S/N] ');

    if(!(['S', 's', 'N', 'n'].includes(initialInput))) {
      console.log("Por favor, digite apenas S ou N.\n");
    }
  } while(!(['S', 's', 'N', 'n'].includes(initialInput)));

  if (initialInput.toUpperCase() === 'S') {
    console.log('Categorias disponíveis: \n');
    books.map((book) => {
      console.log(book.categoria);
    });
    console.log("\n");
    const categoryInput = readline.question('Qual categoria deseja buscar? ');

    const booksFilteredByCategory = books.filter((book) => {
      return book.categoria === categoryInput;
    }); 

    if(booksFilteredByCategory.length != 0) {
      console.table(booksFilteredByCategory);
    } else {
      console.log('Categoria de livros não encontrada!\n');
    }
  }else {
    const sorteredBooks = books.sort((a, b) => {return a.paginas - b.paginas});
    console.log("\nEstas são as opções de livros disponíveis:\n");
    console.table(sorteredBooks);
  }

  let finalInput;

  do {
    finalInput = readline.question('Deseja ver mais livros?[S/N] ');

    if(!(['S', 's', 'N', 'n'].includes(finalInput))) {
      console.log("Por favor, digite apenas [S/N]\n");
    }
  } while(!(['S', 's', 'N', 'n'].includes(finalInput)));

  if(finalInput.toUpperCase() === "S") {
    app();
  } else {
    console.log("Obrigado, volte sempre!");
  }
}

app();