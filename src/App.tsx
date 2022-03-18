import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Board from './screens/Board';
import Boards from './screens/Boards';
import Signup from './screens/Signup';
import User from './screens/User';
import Login from './screens/Login';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
      light: 'white',
    },
  },
  components: {
    // Name of the component
    MuiIconButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: '1rem',
          color: 'white',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='login' element={<Login />} />
          <Route path='boards' element={<Boards />} />
          <Route path='signup' element={<Signup />} />
          <Route path='board/:id' element={<Board />} />
          <Route path='user/:id' element={<User />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
