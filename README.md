<p>
  <img src="https://img.shields.io/static/v1?label=react&message=framework&color=61d3f1&style=for-the-badge&logo=REACT"/>
  <img src="https://img.shields.io/static/v1?label=GIT&message=VERSIONAMENTO&color=ef5239&style=for-the-badge&logo=GIT"/>
  <img src="https://img.shields.io/static/v1?label=typescript&message=linguagem&color=blue&style=for-the-badge&logo=TYPESCRIPT&logoColor=3174bc"/>
  <img src="http://img.shields.io/static/v1?label=License&message=MIT&color=green&style=for-the-badge"/>
  <img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=f8c24e&style=for-the-badge"/>
</p>

# Olá, bem vindo ao Naped!👋

🔹[Descrição e Objetivo do Projeto](#descrição-e-objetivo-do-projeto)

🔹[Funções](#funções)

<!-- 🔹[Deploy da Aplicação](#deploy-da-aplicação-dash) -->

## Descrição e Objetivo do Projeto📜

Este projeto foi construído por meio do Desafio 10 da Codelândia mas com algumas adaptações.

Basicamente o **Naped** é um site de notícias do mundo Nerd e assuntos relacionados.
O objetivo da construção desse site é praticar o uso do React com Typescript, iniciar a prática do uso de testes no front e também a padronização dos commits do Git.

#### 🔗Aqui está o link onde você pode acessar o projeto base do figma:

https://www.figma.com/design/Yb9IBH56g7T1hdIyZ3BMNO/Desafios---Codel%C3%A2ndia?node-id=15409%3A2&t=PFZzXp4C8Fb1MJQP-1

## Funções ⚽

- FormatDate
- StringToDate

### FormatDate 🚀

FormatDate é uma função que transformará um objeto do tipo Date em uma string com o formato "dd/mm/aaaa às hh:mm:ss". Nela é possível retornar apenas a data ou a data com o horário.

Para utilizá-la basta passar o objeto do tipo Date e se você quer que o formato tenha ou não a hora. Por padrão a hora está como falso.

#### Casos de uso:

🔹 Com o horário:

- **FormatDate(objetoDate, true)** retorna "dd/mm/aaaa às hh:mm:ss";

🔹 Sem o horário:

- **FormatDate(objetoDate)** retorna "dd/mm/aaaa";

### StringToDate 🚀

StringToDate é uma função que transformará uma string no formato "YYYY-MM-DD HH:MM:SS" em um objeto Date.

#### Caso de uso:

- **StringTodate("2024-05-11 04:00:00")** retorna um objeto do tipo Date (Sat May 11 2024 04:00:00 GMT-0300);

## Hooks🪝

🔹 useAutoSlideTransition

🔹 useCategoryData

🔹 useFetch

🔹 useMobile

🔹 usePaginate

### useAutoSlideTransition 🚀

O useAutoSlideTransition permite a transição automática de um slide. Basicamente ele recebe um valor de start (onde o slide irá iniciar), de end (onde o slide irá terminar) e também o de time (opcional) caso queira alterar o tempo, por padrão são 8s. Após passar os parâmetros necessários ele fará um looping que passa os slides de um por um de acordo com o tempo definido.

#### Caso de uso:

- useAutoSlideTransition(0, 10), seu retorno será o slide atual após ter passado o tempo definido. No primeiro momento ele retornará 1, em seguida 2 e assim por diante.

### useCategoryData 🚀

O useCategoryData irá filtrar os objetos do array. Basicamente ele irá receber um array do tipo naped e também qual categoria que deseja filtrar são 4 opções "animes" | "movies" | "games" | "series". Caso seja passado o search ele fará a filtragem da categoria e também verificar entre os objetos filtrados se algum deles tem o mesmo nome que o passado em search

#### Casos de uso:

- Apenas com o filtro de categoria:
  - useCategoryData(array, "animes") retorna um array de objetos que contém a categoria animes;
- Com o search:
  - useCategoryData(array, "animes", "naruto") retorna um array com um ou mais objetos que contenham o nome naruto;

### useFetch 🚀

O useFetch fará uma requisição de dados recebendo um tipo genérico e retornando esse mesmo tipo. Neste hook ele sempre fará uma nova requisição sempre que a url mudar e retornará um objeto com data, loading e error. Caso esteja sendo feita alguma requisição de o usuário saia da página, a requisição será abortada anulando uma requisição desnecessária.

### useMobile 🚀

O useMobile verificará se o tamanho da tela corresponde ao valor repassado retornando verdadeiro ou falso. Este hook recebe uma string e nele contém um evento que verifica sempre que a tela mudar de tamanho.

#### Caso de uso:

- useFetch<Naped[]>('http://localhost:3000/naped/?\_sort=name') retorna um array de objetos do tipo Naped;

#### Casos de uso:

- useMobile("max-width: 767px") retornará true caso o tamanho da tela será no máximo 767 pixels;
- useMobile("max-width: 767px") retornará false caso o tamanho da tela não seja no máximo 767 pixels, ou seja, excedeu o tamanho que foi passado no parâmetro, nesse caso a partir de 768 pixels;

### usePaginate 🚀

Este Hook gera uma paginação em cada página de categoria, permitindo limitar a quantidade de itens a serem exibidos por página. Ele irá receber um objeto com data (array do tipo naped), limit (limite de itens a serem exibidos por página), page (qual a página que deverá ser mostrada) e retorna um objeto com as seguintes características:

- first: retorna a primeira página;
- prev: retorna a página anterior ou null caso não tenha página anterior;
- next: retorna a próxima página ou null caso não tenha a próxima página;
- last: retorna a última página;
- pages: retorna a quantidade de páginas;
- items: retorna a quantidade de itens no total do array que foi passado;
- data: retorna o array com a quantidade de itens repassados no limit ou o que restou dele;

#### Casos de uso:

- usePaginate({data: arrayTipoNaped, 1, limit: 12}), suponhamos que data é um array do tipo naped com 18 itens, o retorno no primeiro e segundo looping sucessivamente serão:

  - {first: 1, prev: null, next: 2, last: 2, pages: 2, items: 18, data: 12 primeiros itens do array};
  - {first: 1, prev: 1, next: null, last: 2, pages: 2, items: 18, data: 6 itens restantes do array};

- usePaginate({data: arrayTipoNaped, 1, limit: 10}), suponhamos que data é um array do tipo naped com 24 itens, o retorno no primeiro, segundo e terceiro looping sucessivamente serão:
  - {first: 1, prev: null, next: 2, last: 3, pages: 3, items: 24, data: 10 primeiros itens do array};
  - {first: 1, prev: 1, next: 3, last: 3, pages: 3, items: 24, data: 10 próximos itens do array};
  - {first: 1, prev: 2, next: null, last: 3, pages: 3, items: 24, data: 4 itens restantes do array};
