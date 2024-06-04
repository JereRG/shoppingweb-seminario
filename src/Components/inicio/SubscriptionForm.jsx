import React, { useState } from 'react';
import { Box, TextField, Button, Typography, InputAdornment, Link } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import toast, { Toaster } from 'react-hot-toast';
const SubscriptionForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Subscripcion Aceptada');
  };

  return (
    <>
    <Toaster
        position="bottom-left"
        reverseOrder={false}
    />

    <Box
      sx={{
        
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: 3,
        border: '1px solid #ccc',
        borderRadius: 2,
        boxShadow: 9,
        maxWidth: 1000,
        mx: 'auto',
        mt: 5,
        backgroundColor: 'white',
        textAlign: 'center',
      }}
    >
      <Typography variant="h5" component="h1" gutterBottom>
        Ofertas exclusivas en tu email
      </Typography>
      <form onSubmit={handleSubmit} noValidate>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mt: 2,
          }}
        >
          <MailOutlineIcon sx={{ fontSize: 40, color: '#DF3F32', mr: 2 }} />
          <TextField
            placeholder="Ingresa tu email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailOutlineIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button
            type="submit"
            variant="outlined"
            color="primary"
            sx={{
              ml: 2,
              borderColor: '#DF3F32',
              color: '#DF3F32',
              '&:hover': { borderColor: '#2b2b2b', color: '#2b2b2b' },
            }}
          >
            ¡Quiero recibirlas!
          </Button>
        </Box>
      </form>
      <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
        Recibirás emails promocionales de <strong>ShoppingWeb</strong>. Para más información consultá las{' '}
        <Link href="#" color="inherit">
          políticas de privacidad.
        </Link>
      </Typography>
    </Box>
    </>
  );
};

export default SubscriptionForm;