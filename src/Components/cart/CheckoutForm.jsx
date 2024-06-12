import PropTypes from 'prop-types';
import { useState } from 'react';
import { Box, Typography, TextField, Button, MenuItem, Select, FormControl, InputLabel, ListItemIcon, ListItemText, Grid } from '@mui/material';
import { CreditCard, Payment, LocalAtm, AccountBalanceWallet, ShoppingBagOutlined } from '@mui/icons-material';
import toast, { Toaster } from 'react-hot-toast';
import CancelaciónCompra from './CancelacionCompra';

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

    const [showCancel, setShowCancel] = useState(false);

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
        toast.success('Tu ID de compra es: 00123');
        setShowCancel(true);
    };

    return (
        <Box sx={{ p: 2 }}>
            <Toaster
                position="bottom-left"
                reverseOrder={false}
            />
            <Typography variant="h4" gutterBottom>Formulario de Compra</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
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
                </Grid>
                <Grid item xs={12} sm={6}>
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
                </Grid>
                <Grid item xs={12}>
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
                </Grid>
                <Grid item xs={12} sm={6}>
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
                </Grid>
                <Grid item xs={12} sm={6}>
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
                </Grid>
                <Grid item xs={12}>
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
                </Grid>
                <Grid item xs={12}>
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
                </Grid>
                <Grid item xs={12}>
                    {!showCancel ? (
                        <Button 
                            variant="contained" 
                            color="success" 
                            type="submit" 
                            startIcon={<ShoppingBagOutlined />} 
                            fullWidth 
                            onClick={handleSubmit}
                        >
                            Pagar Ahora
                        </Button>
                    ) : (
                        <CancelaciónCompra />
                    )}
                </Grid>
            </Grid>
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
