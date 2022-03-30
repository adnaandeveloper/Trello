// @flow
import { colors } from '@atlaskit/theme';
import type { Author, Quote, QuoteMap } from './types';
import finnImg from './images/BMO.png';
import bmoImg from './images/BMO.png';
import princessImg from './images/BMO.png';
import jakeImg from './images/BMO.png';

const Icebox: Author = {
  id: '1',
  name: 'Icebox',
  url: 'http://adventuretime.wikia.com/wiki/Jake',
  avatarUrl: jakeImg,
  colors: {
    soft: colors.Y50,
    hard: colors.N400A,
  },
};

const backlog: Author = {
  id: '2',
  name: 'Rejected',
  url: 'http://adventuretime.wikia.com/wiki/BMO',
  avatarUrl: bmoImg,
  colors: {
    soft: colors.G50,
    hard: colors.N400A,
  },
};

const todo: Author = {
  id: '3',
  name: 'Todo',
  url: 'http://adventuretime.wikia.com/wiki/Finn',
  avatarUrl: finnImg,
  colors: {
    soft: colors.B50,
    hard: colors.N400A,
  },
};

const rejected: Author = {
  id: '4',
  name: 'Backlog',
  url: 'http://adventuretime.wikia.com/wiki/Princess_Bubblegum',
  avatarUrl: princessImg,
  colors: {
    soft: colors.P50,
    hard: colors.N400A,
  },
};

const done: Author = {
  id: '5',
  name: 'Done',
  url: 'http://adventuretime.wikia.com/wiki/Princess_Bubblegum',
  avatarUrl: princessImg,
  colors: {
    soft: colors.P50,
    hard: colors.N400A,
  },
};

const doing: Author = {
  id: '6',
  name: 'Doing',
  url: 'http://adventuretime.wikia.com/wiki/Princess_Bubblegum',
  avatarUrl: princessImg,
  colors: {
    soft: colors.P50,
    hard: colors.N400A,
  },
};

const review: Author = {
  id: '6',
  name: 'in review',
  url: 'http://adventuretime.wikia.com/wiki/Princess_Bubblegum',
  avatarUrl: princessImg,
  colors: {
    soft: colors.P50,
    hard: colors.N400A,
  },
};

const legacy: Author = {
  id: '7',
  name: 'Legacy',
  url: 'http://adventuretime.wikia.com/wiki/Princess_Bubblegum',
  avatarUrl: princessImg,
  colors: {
    soft: colors.P50,
    hard: colors.N400A,
  },
};
export const authors: Author[] = [
  Icebox,
  rejected,
  todo,
  backlog,
  done,
  doing,
  review,
  legacy,
];

export const quotes: Quote[] = [
  {
    id: '1',
    content: 'Sometimes life is scary and dark',
    author: Icebox,
  },
  {
    id: '2',
    content:
      'Sucking at something is the first step towards being sorta good at something.',
    author: backlog,
  },
  {
    id: '3',
    content: "You got to focus on what's real, man",
    author: todo,
  },
  {
    id: '4',
    content: 'Is that where creativity comes from? From sad biz?',
    author: todo,
  },
  {
    id: '5',
    content: 'Homies help homies. Always',
    author: todo,
  },
  {
    id: '6',
    content: 'Responsibility demands sacrifice',
    author: todo,
  },
  {
    id: '7',
    content: "That's it! The answer was so simple, I was too smart to see it!",
    author: todo,
  },
  {
    id: '8',
    content:
      "People make mistakes. It's all a part of growing up and you never really stop growing",
    author: todo,
  },
  {
    id: '9',
    content: "Don't you always call sweatpants 'give up on life pants,' Jake?",
    author: todo,
  },
  {
    id: '10',
    content: 'I should not have drunk that much tea!',
    author: todo,
  },
  {
    id: '11',
    content: 'Please! I need the real you!',
    author: todo,
  },
  {
    id: '12',
    content: "Haven't slept for a solid 83 hours, but, yeah, I'm good.",
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

export const getAuthors = (count: number): Author[] =>
  Array.from({ length: count }, (v, k) => k).map(() => {
    const random: Author = authors[Math.floor(Math.random() * authors.length)];

    const custom: Author = {
      ...random,
      id: `author-${idCount++}`,
    };

    return custom;
  });

const getByAuthor = (author: Author, items: Quote[]): Quote[] =>
  items.filter((quote: Quote) => quote.author === author);

export const authorQuoteMap: QuoteMap = authors.reduce(
  (previous: QuoteMap, author: Author) => ({
    ...previous,
    [author.name]: getByAuthor(author, quotes),
  }),
  {}
);

export const generateQuoteMap = (quoteCount: number): QuoteMap =>
  authors.reduce(
    (previous: QuoteMap, author: Author) => ({
      ...previous,
      [author.name]: getQuotes(quoteCount / authors.length),
    }),
    {}
  );
