import PropTypes from 'prop-types';
import { Box, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';

const CategoryFilter = ({ categories, selectedCategories, handleCategoryChange }) => {
  return (
    <Box sx={{
        width: '100%',
        mt: 4,
        mr: 3,
        maxWidth: 400,
        bgcolor: 'white',
        p: 7,
        borderRadius: 2,
        border: '1px solid lightgrey',
    }}>
      <Typography variant="h5" sx={{ mb: 1, textAlign: 'center' }}>Filtrar por Categorías</Typography>
      <hr />
      <FormGroup sx={{ display: 'flex', flexDirection: 'column' }}>
        {categories.map(category => (
          <FormControlLabel
            key={category}
            control={
              <Checkbox
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
                sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}
              />
            }
            label={category}
            sx={{ mb: 1 }}
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
