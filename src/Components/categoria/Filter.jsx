// src/components/Filter.jsx
import React from 'react';
import { TextField } from '@mui/material';

const Filter = ({ search, setSearch }) => {
  return (
    <TextField
      label="Buscar productos"
      variant="outlined"
      fullWidth
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default Filter;
