import React, { useState } from 'react';
import { Box, TextField, Button, Typography, InputAdornment, Link } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import toast, { Toaster } from 'react-hot-toast';

const SubscriptionForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Subscripción Aceptada');
  };

  return (
    <>
      <Toaster position="bottom-left" reverseOrder={false} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          p: { xs: 2, sm: 3 },
          border: '1px solid #ccc',
          borderRadius: 2,
          boxShadow: 9,
          maxWidth: { xs: '90%', sm: 600, md: 800, lg: 1000 },
          mx: 'auto',
          mt: { xs: 2, sm: 3, md: 4, lg: 5 },
          backgroundColor: 'white',
          textAlign: 'center',
          gap: 2,
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
              gap: 2,
              flexDirection: { xs: 'column', sm: 'row' },
              width: '100%',
            }}
          >
            <MailOutlineIcon sx={{ fontSize: 40, color: '#DF3F32' }} />
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
                borderColor: '#DF3F32',
                color: '#DF3F32',
                '&:hover': { borderColor: '#2b2b2b', color: '#2b2b2b' },
                alignSelf: { xs: 'stretch', sm: 'auto' },
                mt: { xs: 2, sm: 0 }
              }}
            >
              ¡Quiero recibirlas!
            </Button>
          </Box>
        </form>
        <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
          Recibirás emails promocionales de <strong>ShoppingWeb</strong>. Para más información consulta las{' '}
          <Link href="#" color="inherit">
            políticas de privacidad.
          </Link>
        </Typography>
      </Box>
    </>
  );
};

export default SubscriptionForm;
