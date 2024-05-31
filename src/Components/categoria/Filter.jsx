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
    />
  );
};

Filter.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};

export default Filter;
