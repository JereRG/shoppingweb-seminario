import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

const Filter = ({ search, setSearch }) => {
  return (
    <TextField
      label="Buscar productos"
      variant="outlined"
      fullWidth
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      sx={{
        maxWidth: 400,
        mx: 'auto',
        mt: { xs: 2, md: 0 }, // Margen superior ajustado para dispositivos móviles
        fontSize: { xs: '0.9rem', md: '1rem' }, // Tamaño de fuente ajustado para dispositivos móviles
      }}
    />
  );
};

Filter.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};

export default Filter;
