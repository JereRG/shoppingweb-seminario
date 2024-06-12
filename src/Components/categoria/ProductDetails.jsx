import PropTypes from 'prop-types';
import { Box, Typography, Button, CardMedia } from '@mui/material';
import { LocalGroceryStore, ShoppingBagOutlined } from '@mui/icons-material';

const ProductDetails = ({ product, addToCart, setCurrentPage }) => {
  return (
    <Box sx={{ p: 3 }}>
      <Button 
        variant="outlined" 
        color="error" 
        startIcon={<ShoppingBagOutlined />} 
        sx={{ marginBottom: 2 }}
        onClick={() => setCurrentPage('Productos')}
      >
        Seguir Comprando
      </Button>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'flex-start', gap: 4 }}>
        <CardMedia
          component="img"
          image={product.image || 'default-image-url'}
          alt={product.title || 'Sin título'}
          sx={{ width: '100%', maxWidth: 500, height: 'auto' }}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flex: 1 }}>
          <Typography variant="h4" component="h1" sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            {product.title}
          </Typography>
          <Typography variant="h5" color="text.primary" sx={{ mt: 2, textAlign: { xs: 'center', md: 'left' } }}>
            ${product.price}
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, textAlign: { xs: 'center', md: 'left' } }}>
            {product.description}
          </Typography>
          <Button
            variant="contained"
            color="error"
            startIcon={<LocalGroceryStore />}
            onClick={() => addToCart(product)}
            sx={{ mt: 3, alignSelf: { xs: 'center', md: 'flex-start' } }}
          >
            Agregar al Carrito
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

ProductDetails.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default ProductDetails;
