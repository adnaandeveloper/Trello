import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Board from './screens/Board';
import Boards from './screens/Boards';
import Signup from './screens/Signup';
import User from './screens/User';
import Login from './screens/Login';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const theme = createTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='login' element={<Login />} />
          <Route path='Boards' element={<Boards />} />
          <Route path='signup' element={<Signup />} />
          <Route path='board/:id' element={<Board />} />
          <Route path='user/:id' element={<User />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
