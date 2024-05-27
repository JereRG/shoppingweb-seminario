// src/components/CategoryFilter.jsx
import React from 'react';
import { Box, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';

const CategoryFilter = ({ categories, selectedCategories, handleCategoryChange }) => {
  return (
    <Box sx={{
        ml:5,
        mr:-8,
        width:400,
        bgcolor:"white",
        height:300,
        p:2,
        borderRadius:"10px",
        border:"lightgrey solid 1px"
        

    }}>
      <Typography variant="h5">Filtrar por Categorías</Typography>
      <hr></hr>
      <FormGroup>
        {categories.map(category => (
          <FormControlLabel
            key={category}
            control={
              <Checkbox
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
              />
            }
            label={category}
          />
        ))}
      </FormGroup>
    </Box>
  );
};

export default CategoryFilter;
