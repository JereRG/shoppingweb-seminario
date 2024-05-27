
import React, { useState } from 'react';
import ProductList from './Components/categoria/ProductList';
import  Nav from './Components/navbar/Nav';
import 'normalize.css'
import { Box } from '@mui/material';

export const App = () => {
  const [search, setSearch] = useState('');
  return (
    <Box sx={{
      bgcolor:"#eeeeee"
    }}>
      <Nav search={search} setSearch={setSearch} />
      <ProductList search={search} setSearch={setSearch} />
    </Box>
  );
};

