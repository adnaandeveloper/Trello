import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Board from './modules/dashboard/components/Board';
import Boards from './modules/dashboards/components/Boards';
import Signup from './modules/signup/components/Signup';
import User from './modules/user/components/User';
import Login from './modules/login/components/Login';
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
    MuiButton: {
      styleOverrides: {
        root: {
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
