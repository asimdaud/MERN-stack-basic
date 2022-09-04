import React from 'react';
import { Container } from '@mui/material';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import PostDetails from './components/PostDetails/PostDetails';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import CreatorOrTag from './components/CreatorOrTag/CreatorOrTag';

import { ThemeProvider } from '@mui/styles'
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>

    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Routes>
          {/* From */}
          {/* <Route path="/" element={Home} /> */}
          {/* To */}
          {/* <Route path='/welcome' element={<Home/>} /> */}

          <Route path="/" exact element={<Navigate to="/posts" />} />
          <Route path="/posts" exact element={<Home/>} />
          <Route path="/posts/search" exact element={<Home/>} />
          <Route path="/posts/:id" exact element={<PostDetails/>} />
          <Route path="'/creators/:name', '/tags/:name'" element={<CreatorOrTag/>} />
          <Route path="/auth" exact element={!user ? <Auth /> : <Navigate to="/posts" />} />
        </Routes>
      </Container>
    </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;