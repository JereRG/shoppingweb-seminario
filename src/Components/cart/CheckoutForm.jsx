import PropTypes from 'prop-types';
import { Box, Typography, TextField, Grid, Button } from '@mui/material';

const CheckoutForm = ({ cart }) => {
    const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

    return (
        <Box sx={{ p: 5, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
            <Box sx={{ flex: 1 }}>
                <Typography variant="h4" gutterBottom>Formulario de Compra</Typography>
                <form noValidate autoComplete="off">
                    <TextField fullWidth label="Nombre" variant="outlined" margin="normal" />
                    <TextField fullWidth label="Apellido" variant="outlined" margin="normal" />
                    <TextField fullWidth label="Dirección" variant="outlined" margin="normal" />
                    <TextField fullWidth label="Ciudad" variant="outlined" margin="normal" />
                    <TextField fullWidth label="Código Postal" variant="outlined" margin="normal" />
                    <TextField fullWidth label="Teléfono" variant="outlined" margin="normal" />
                    <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
                        Enviar
                    </Button>
                </form>
            </Box>
            <Box sx={{ flex: 1 }}>
                <Typography variant="h4" gutterBottom>Resumen del Pedido</Typography>
                <Grid container spacing={2}>
                    {cart.map((product, index) => (
                        <Grid item xs={12} key={index}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, borderBottom: '1px solid #ddd', pb: 2, mb: 2 }}>
                                <img src={product.image} alt={product.title} style={{ width: 50, height: 50, objectFit: 'cover', borderRadius: '5px' }} />
                                <Box sx={{ flex: 1 }}>
                                    <Typography variant="body1">{product.title}</Typography>
                                    <Typography variant="body2">Cantidad: {product.quantity}</Typography>
                                    <Typography variant="body2">Precio: ${product.price}</Typography>
                                </Box>
                                <Typography variant="body1">${(product.price * product.quantity).toFixed(2)}</Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
                <Typography variant="h5" sx={{ mt: 2 }}>Total: ${total.toFixed(2)}</Typography>
            </Box>
        </Box>
    );
};

CheckoutForm.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
    })).isRequired,
};

export default CheckoutForm;
