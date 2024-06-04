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
        <Box sx={{ p: 5 , ml:25, mr: 25}}>
            <Typography variant="h3" gutterBottom sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                Carrito de Compras <LocalGroceryStoreIcon fontSize='large' sx={{ marginLeft: 2 }} />
            </Typography>
            {cart.length === 0 ? (
                <Typography variant="h5" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
                <>
                    <Grid container spacing={2}>
                        {cart.map((product) => (
                            <Grid item xs={12} sm={6} md={4} key={product.id}>
                                <Box sx={{ border: '1px solid #ddd', p: 2, position: 'relative', borderRadius: 2, bgcolor: 'white', display: 'flex',
                                 flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center',
                                  textAlign: 'center' , minHeight:"500px", maxHeight:"500px" }}>
                                    <img src={product.image} alt={product.title} style={{ width: '100%', height: '100%', maxHeight: 300, borderRadius: '5px' }} />
                                    <Typography variant="h6" sx={{ mt: 1, fontSize: '0.9rem' }}>{product.title}</Typography>
                                    <Typography variant="body1" sx={{ fontSize: '0.8rem' }}>${product.price}</Typography>
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
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                        <BuyNowButton onClick={() => setCurrentPage('Formulario')} />
                    </Box>
                </>
            )}
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
