import PropTypes from 'prop-types';
import { Box, Typography, Grid, Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { DeleteOutlined } from '@mui/icons-material';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import ShoppingBagOutlined from '@mui/icons-material/ShoppingBagOutlined';
import BuyNowButton from './BuyButton'; 

const Cart = ({ cart, removeFromCart, updateQuantity, setCurrentPage }) => {
    return (
        <Box sx={{ p: 2, ml: 1, mr: 1 }}>
            <Typography variant="h5" gutterBottom sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                Carrito de Compras <LocalGroceryStoreIcon fontSize='large' sx={{ marginLeft: 2 }} />
            </Typography>
            {cart.length === 0 ? (
                <Typography variant="h6" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }}>
                    El carrito está vacío 
                    <Button 
                        variant="outlined" 
                        color="error" 
                        startIcon={<ShoppingBagOutlined />} 
                        sx={{ marginLeft: 1 }}
                        onClick={() => setCurrentPage('Productos')}
                    >
                        Comprar Productos
                    </Button>
                </Typography>
            ) : (
                <Box sx={{ display: 'flex', justifyContent: 'center' }}> {/* Centra las tarjetas */}
                    <Grid container spacing={2}>
                        {cart.map((product) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                                <Box sx={{ border: '1px solid #ddd', p: 2, position: 'relative', borderRadius: 2, bgcolor: 'white', display: 'flex',
                                    flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center',
                                    textAlign: 'center', minHeight: 350, maxWidth: 300 }}>
                                    <img src={product.image} alt={product.title} style={{ width: '100%', height: 'auto', maxHeight: 150, borderRadius: '5px' }} />
                                    <Typography variant="h6" sx={{ mt: 1, fontSize: '1rem' }}>{product.title}</Typography>
                                    <Typography variant="body1" sx={{ fontSize: '0.9rem' }}>${product.price}</Typography>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 1 }}>
                                        <IconButton onClick={() => updateQuantity(product.id, product.quantity - 1)} disabled={product.quantity === 1}>
                                            <RemoveIcon />
                                        </IconButton>
                                        <Typography variant="body1" sx={{ mx: 1 }}>{product.quantity}</Typography>
                                        <IconButton onClick={() => updateQuantity(product.id, product.quantity + 1)}>
                                            <AddIcon />
                                        </IconButton>
                                    </Box>
                                    <Button variant="outlined" color="error" startIcon={<DeleteOutlined />} onClick={() => removeFromCart(product.id)} sx={{ mt: 1 }}>
                                        Eliminar
                                    </Button>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            )}
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                <BuyNowButton onClick={() => setCurrentPage('Formulario')} />
            </Box>
        </Box>
    );
};

Cart.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
    })).isRequired,
    removeFromCart: PropTypes.func.isRequired,
    updateQuantity: PropTypes.func.isRequired,
    setCurrentPage: PropTypes.func.isRequired,
};

export default Cart;
