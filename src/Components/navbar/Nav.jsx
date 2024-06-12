import PropTypes from 'prop-types';
import { Box, Typography, InputBase, Badge } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import AccountMenu from './AccountMenu';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#939597',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '40ch',
      '&:focus': {
        width: '50ch',
      },
    },
  },
}));

const Nav = ({ search, setSearch, setCurrentPage, cartItemCount }) => {
  return (
    <Box sx={{ bgcolor: "#2b2b2b", color: "#DF3F32", p: { xs: 1, sm: 2 }, transition: "200ms" }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', ml: { xs: 1, sm: 2, md: 5, lg: 10 }, mr: { xs: 1, sm: 2, md: 5, lg: 10 } }}>
        <Box sx={{ display: "flex", gap: { xs: 1, sm: 2, md: 3 }, alignItems: "center" }}>
          <Typography 
            variant="h2" 
            sx={{ 
              fontSize: { xs: 18, sm: 22, md: 26, lg: 30 }, 
              fontWeight: "bold", 
              cursor: 'pointer', 
              ":hover": {
                color: "white",
                transition: "300ms"
              } 
            }} 
            onClick={() => setCurrentPage('Inicio')}
          >
            ShoppingWeb
          </Typography>
        </Box>
        <Search>
          <SearchIconWrapper>
            <SearchIcon sx={{ color: "#939597" }} />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Buscar…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Search>
        <Box sx={{ display: "flex", gap: { xs: 1, sm: 2, md: 3 }, alignItems: 'center' }}>
          <Inventory2Icon 
            fontSize='medium' 
            sx={{ 
              cursor: 'pointer', 
              ":hover": {
                color: "white",
                transition: "300ms"
              } 
            }} 
            onClick={() => setCurrentPage('Productos')} 
          />
          <Badge badgeContent={cartItemCount} color="error">
            <LocalGroceryStoreIcon 
              fontSize='medium' 
              sx={{ 
                cursor: 'pointer', 
                ":hover": {
                  color: "white",
                  transition: "300ms"
                } 
              }} 
              onClick={() => setCurrentPage('Carrito')} 
            />
          </Badge>
          <AccountMenu />
        </Box>
      </Box>
    </Box>
  );
};

Nav.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  cartItemCount: PropTypes.number.isRequired,
};

export default Nav;
