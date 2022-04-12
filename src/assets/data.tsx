// @flow
import { colors } from '@atlaskit/theme';
import type { Author, Quote, QuoteMap } from './types';
import finnImg from './images/BMO.png';
import bmoImg from './images/BMO.png';
import jakeImg from './images/BMO.png';

const Icebox: Author = {
  id: '1',
  name: 'Icebox',

  avatarUrl: jakeImg,
  colors: {
    soft: colors.Y50,
    hard: colors.N400A,
  },
};

const backlog: Author = {
  id: '2',
  name: 'Backlog',

  avatarUrl: bmoImg,
  colors: {
    soft: colors.G50,
    hard: colors.N400A,
  },
};

const todo: Author = {
  id: '3',
  name: 'Todo',
  avatarUrl: finnImg,
  colors: {
    soft: colors.B50,
    hard: colors.N400A,
  },
};

export const authors: Author[] = [Icebox, backlog, todo];

export const quotes: Quote[] = [
  {
    id: '1',
    content: 'Sometimes life is scary and dark',
    author: Icebox,
  },
  {
    id: '2',
    content: 'hello life is scary and dark',
    author: Icebox,
  },
  {
    id: '3',
    content: 'helo helo life is scary and dark',
    author: todo,
  },
];

// So we do not have any clashes with our hardcoded ones
let idCount: number = quotes.length + 1;

export const getQuotes = (count: number): Quote[] =>
  Array.from({ length: count }, (v, k) => k).map(() => {
    const random: Quote = quotes[Math.floor(Math.random() * quotes.length)];

    const custom: Quote = {
      ...random,
      id: `G${idCount++}`,
    };

    return custom;
  });

export const thedata = () => {
  return quotes;
};

export const getAuthors = (count: number): Author[] =>
  Array.from({ length: count }, (v, k) => k).map(() => {
    const random: Author = authors[parseInt(quotes[count].id)];

    const custom: Author = {
      ...random,
      id: `author-${idCount++}`,
    };

    return custom;
  });

export const getAllAuthors = () => {
  return authors;
};
export const addAuthor = (name: string) => {
  authors.push({
    id: Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1),
    name: name,
    avatarUrl: 'fdfd',
    colors: {
      soft: colors.P50,
      hard: colors.N400A,
    },
  });
};

export const addOneQuote = (author: Author, content: string) => {
  quotes.push({
    id: Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1),
    content: content,
    author: author,
  });
};

const getByAuthor = (author: Author, items: Quote[]): Quote[] =>
  items.filter((quote: Quote) => quote.author === author);

export const authorQuoteMap: QuoteMap = getAllAuthors().reduce(
  (previous: QuoteMap, author: Author) => ({
    ...previous,
    [author.name]: getByAuthor(author, quotes),
  }),
  {}
);

export const generateQuoteMap = (quoteCount: number): QuoteMap =>
  getAllAuthors().reduce(
    (previous: QuoteMap, author: Author) => ({
      ...previous,
      [author.name]: getQuotes(quoteCount / authors.length),
    }),

    {}
  );
