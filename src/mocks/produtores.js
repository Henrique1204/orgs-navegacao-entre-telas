import {green, salad, jennyJack, grow, potager} from '../assets/produtores';

import {
  Abobora,
  Aspargos,
  Batata,
  Brocolis,
  Cenouras,
  Cenouras2,
  Pepino,
  Tomate,
  Verduras,
} from '../assets/verduras';

const gerarNumeroAleatorio = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const produtores = {
  lista: [
    {
      nome: 'Green',
      imagem: green,
      distancia: gerarNumeroAleatorio(1, 500),
      estrelas: gerarNumeroAleatorio(1, 5),
      cestas: [
        {
          detalhes: {
            nome: 'Brócolis e Pepino',
            descricao:
              'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha',
            preco: 'R$ 40,00',
            imagem: Pepino,
          },
          itens: [
            {
              nome: 'Brócolis',
              imagem: Brocolis,
            },
            {
              nome: 'Pepino',
              imagem: Pepino,
            },
          ],
        },
        {
          detalhes: {
            nome: 'Brócolis',
            descricao:
              'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha',
            preco: 'R$ 40,00',

            imagem: Brocolis,
          },
          itens: [
            {
              nome: 'Brócolis',
              imagem: Brocolis,
            },
          ],
        },
      ],
    },
    {
      nome: 'Salad',
      imagem: salad,
      distancia: gerarNumeroAleatorio(1, 500),
      estrelas: gerarNumeroAleatorio(1, 5),
      cestas: [
        {
          detalhes: {
            nome: 'Salada completa',
            descricao:
              'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha',
            preco: 'R$ 40,00',

            imagem: Verduras,
          },
          itens: [
            {
              nome: 'Tomate',
              imagem: Tomate,
            },
            {
              nome: 'Brócolis',
              imagem: Brocolis,
            },
            {
              nome: 'Pepino',
              imagem: Pepino,
            },
          ],
        },
        {
          detalhes: {
            nome: 'Tomate e pepino',
            descricao:
              'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha',
            preco: 'R$ 40,00',

            imagem: Tomate,
          },
          itens: [
            {
              nome: 'Tomate',
              imagem: Tomate,
            },
            {
              nome: 'Pepino',
              imagem: Pepino,
            },
          ],
        },
      ],
    },
    {
      nome: 'Jenny Jack Farm',
      imagem: jennyJack,
      distancia: gerarNumeroAleatorio(1, 500),
      estrelas: gerarNumeroAleatorio(1, 5),
      cestas: [
        {
          detalhes: {
            nome: 'Muita Batata',
            descricao:
              'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha',
            preco: 'R$ 40,00',

            imagem: Batata,
          },
          itens: [
            {
              nome: 'Batata',
              imagem: Batata,
            },
          ],
        },
        {
          detalhes: {
            nome: 'Tomate e Brócolis',
            descricao:
              'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha',
            preco: 'R$ 40,00',

            imagem: Brocolis,
          },
          itens: [
            {
              nome: 'Tomate',
              imagem: Tomate,
            },
            {
              nome: 'Brócolis',
              imagem: Brocolis,
            },
          ],
        },
      ],
    },
    {
      nome: 'Grow',
      imagem: grow,
      distancia: gerarNumeroAleatorio(1, 500),
      estrelas: gerarNumeroAleatorio(1, 5),
      cestas: [
        {
          detalhes: {
            nome: 'Abobora e Aspargos',
            descricao:
              'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha',
            preco: 'R$ 40,00',

            imagem: Aspargos,
          },
          itens: [
            {
              nome: 'Abóbora',
              imagem: Abobora,
            },
            {
              nome: 'Aspargos',
              imagem: Aspargos,
            },
          ],
        },
        {
          detalhes: {
            nome: 'Tomate e Abobora',
            descricao:
              'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha',
            preco: 'R$ 40,00',

            imagem: Abobora,
          },
          itens: [
            {
              nome: 'Tomate',
              imagem: Tomate,
            },
            {
              nome: 'Abóbora',
              imagem: Abobora,
            },
          ],
        },
      ],
    },
    {
      nome: 'Potager',
      imagem: potager,
      distancia: gerarNumeroAleatorio(1, 500),
      estrelas: gerarNumeroAleatorio(1, 5),
      cestas: [
        {
          detalhes: {
            nome: 'Pepinos',
            descricao:
              'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha',
            preco: 'R$ 40,00',

            imagem: Pepino,
          },
          itens: [
            {
              nome: 'Pepino',
              imagem: Pepino,
            },
          ],
        },
        {
          detalhes: {
            nome: 'Brócolis, Aspargos e Cenoura',
            descricao:
              'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha',
            preco: 'R$ 40,00',

            imagem: Cenouras2,
          },
          itens: [
            {
              nome: 'Brócolis',
              imagem: Brocolis,
            },
            {
              nome: 'Aspargos',
              imagem: Aspargos,
            },
            {
              nome: 'Cenoura',
              imagem: Cenouras,
            },
          ],
        },
      ],
    },
  ],
};

export default produtores;
