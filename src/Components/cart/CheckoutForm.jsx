import PropTypes from 'prop-types';
import { useState } from 'react';
import { Box, Typography, TextField, Grid, Button, MenuItem, Select, FormControl, InputLabel, ListItemIcon, ListItemText } from '@mui/material';
import { CreditCard, Payment, LocalAtm, AccountBalanceWallet, ShoppingBagOutlined } from '@mui/icons-material';
import toast, { Toaster } from 'react-hot-toast';

const CheckoutForm = ({ cart }) => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        direccion: '',
        ciudad: '',
        codigoPostal: '',
        telefono: '',   
        metodoPago: ''
    });

    const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handlePaymentMethodChange = (event) => {
        setFormData({ ...formData, metodoPago: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const { nombre, apellido, direccion, ciudad, codigoPostal, telefono, metodoPago } = formData;

        if (!nombre || !apellido || !direccion || !ciudad || !codigoPostal || !telefono || !metodoPago) {
            toast.error('Todos los campos son obligatorios');
            return;
        }

        toast.success('Formulario enviado correctamente');
        console.log('Formulario enviado');
    };

    return (
        <Box sx={{ p: 5, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
            <Toaster
                position="bottom-left"
                reverseOrder={false}
            />
            <Box sx={{ flex: 1 }}>
                <Typography variant="h4" gutterBottom>Formulario de Compra</Typography>
                <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Nombre"
                        variant="outlined"
                        margin="normal"
                        required
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth
                        label="Apellido"
                        variant="outlined"
                        margin="normal"
                        required
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth
                        label="Dirección"
                        variant="outlined"
                        margin="normal"
                        required
                        name="direccion"
                        value={formData.direccion}
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth
                        label="Ciudad"
                        variant="outlined"
                        margin="normal"
                        required
                        name="ciudad"
                        value={formData.ciudad}
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth
                        label="Código Postal"
                        variant="outlined"
                        margin="normal"
                        required
                        name="codigoPostal"
                        value={formData.codigoPostal}
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth
                        label="Teléfono"
                        variant="outlined"
                        margin="normal"
                        required
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                    />
                    <FormControl fullWidth variant="outlined" margin="normal" required>
                        <InputLabel>Método de Pago</InputLabel>
                        <Select
                            value={formData.metodoPago}
                            onChange={handlePaymentMethodChange}
                            label="Método de Pago"
                        >
                            <MenuItem value="efectivo">
                                <ListItemIcon>
                                    <LocalAtm />
                                </ListItemIcon>
                                <ListItemText primary="Efectivo" />
                            </MenuItem>
                            <MenuItem value="tarjetaCredito">
                                <ListItemIcon>
                                    <CreditCard />
                                </ListItemIcon>
                                <ListItemText primary="Tarjeta de Crédito" />
                            </MenuItem>
                            <MenuItem value="tarjetaDebito">
                                <ListItemIcon>
                                    <Payment />
                                </ListItemIcon>
                                <ListItemText primary="Tarjeta de Débito" />
                            </MenuItem>
                            <MenuItem value="paypal">
                                <ListItemIcon>
                                    <AccountBalanceWallet />
                                </ListItemIcon>
                                <ListItemText primary="PayPal" />
                            </MenuItem>
                            <MenuItem value="mercadoPago">
                                <ListItemIcon>
                                    <ShoppingBagOutlined />
                                </ListItemIcon>
                                <ListItemText primary="Mercado Pago" />
                            </MenuItem>
                        </Select>
                    </FormControl>
                    <Button variant="contained" color="success" type="submit" startIcon={<ShoppingBagOutlined />}  sx={{ mt: 2 }}>
                        Pagar Ahora
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
