import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Board from './modules/dashboard/components/Board';
import Boards from './modules/dashboards/components/Boards';
import Signup from 'modules/signup/components/Signup';
import User from './modules/user/components/User';
import Login from './modules/login/components/Login';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './index.css';
import { getAllAuthors, addAuthor, quotes, addOneQuote } from './assets/data';
import { Author, Quote, QuoteMap } from 'assets/types';

declare module '@mui/material/styles/' {
  export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg';
}
const theme = createTheme({
  palette: {
    common: {
      white: 'white',
    },
    primary: {
      main: '#096aa7',
      light: '#4688b9',
      dark: '#054a74',
    },
    secondary: {
      main: '#d29134',
      light: '#c0955a',
      dark: '#b1792d',
    },
  },
  components: {
    // Name of the componentß
    MuiIconButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: '1rem',
          color: 'white',
          borderRadius: 0,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: 'white',
        },
      },
    },
  },
});

const App: React.FC = () => {
  const [allAuthors] = useState(getAllAuthors());
  const [listIsAddeable, setListIsAddeable] = useState(false);
  const [authorName, setAuthorName] = useState('');
  const [allQuotes, setallQuotes] = useState(quotes);
  const [call, setIscall] = useState(false);
  const [quoteName, setQuoteName] = useState('');

  const getByAuthor = (author: Author, items: Quote[]): Quote[] =>
    items.filter((quote: Quote) => quote.author === author);

  const authorQuoteMap: QuoteMap = allAuthors.reduce(
    (previous: QuoteMap, author: Author) => ({
      ...previous,
      [author.name]: getByAuthor(author, quotes),
    }),
    {}
  );
  const addQuoteName = (name: string) => {
    setQuoteName(name);
  };

  const addQuote = (authorName?: string) => {
    const author = allAuthors.find((author) => author.name === authorName);
    if (author) {
      addOneQuote(author, quoteName);
      setallQuotes(allQuotes);
      setIscall(!call);
      setQuoteName('');
    }
  };

  const onClickHandler = () => {
    setListIsAddeable(!listIsAddeable);
  };

  const onChangHanlerAddAuthor = (name: string) => {
    setAuthorName(name);
  };

  const AddNewAotuhersToTheAuthors = () => {
    if (!authorName) return;
    addAuthor(authorName);
    setAuthorName('');
  };

  useEffect(() => {}, [allAuthors, allQuotes]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='login' element={<Login />} />
            <Route path='boards' element={<Boards />} />
            <Route path='signup' element={<Signup />} />
            <Route
              path='board/:id'
              element={
                <Board
                  initial={authorQuoteMap}
                  isCombineEnabled
                  onClickHandler={onClickHandler}
                  listIsAddeable={listIsAddeable}
                  onChangHanlerAddAuthor={onChangHanlerAddAuthor}
                  AddNewAotuhersToTheAuthors={AddNewAotuhersToTheAuthors}
                  authorName={authorName}
                  addQuote={addQuote}
                  addQuoteName={addQuoteName}
                  withScrollableColumns
                />
              }
            />
            <Route path='user/:id' element={<User />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};
export default App;
