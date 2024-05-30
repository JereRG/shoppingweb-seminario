import React, { useState } from 'react';
import { Box } from '@mui/material';
import Nav from './Components/navbar/Nav';
import Home from './Components/inicio/Home';
import ProductList from './Components/categoria/ProductList'; // Corregido el nombre del componente
import 'normalize.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState('Inicio');

  const renderPage = () => {
    switch (currentPage) {
      case 'Inicio':
        return <Home />;
      case 'Productos':
        return <ProductList search={search} setSearch={setSearch} />; // Pasar el estado de búsqueda al componente ProductList
      case 'About Us':
        return <Home />;
      default:
        return <Home />;
    }
  };

  return (
    <Box sx={{ bgcolor: "#eeeeee" }}>
      <Nav search={search} setSearch={setSearch} setCurrentPage={setCurrentPage} />
      {renderPage()}
    </Box>
  );
};

export default App;