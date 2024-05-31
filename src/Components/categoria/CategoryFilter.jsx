import PropTypes from 'prop-types';
import { Box, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';

const CategoryFilter = ({ categories, selectedCategories, handleCategoryChange }) => {
  return (
    <Box sx={{
        ml: 5,
        mr: -8,
        width: 400,
        bgcolor: "white",
        height: 300,
        p: 2,
        borderRadius: "10px",
        border: "lightgrey solid 1px"
    }}>
      <Typography variant="h5">Filtrar por Categorías</Typography>
      <hr />
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

CategoryFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleCategoryChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
