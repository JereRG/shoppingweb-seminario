import React from 'react';
import SubscriptionForm from "./SubscriptionForm";
import { Box } from '@mui/material';
import { FormQueja } from './FormQueja';

export const Footer = () => {
  return (
    <>
    <Box component="footer" sx={{ bgcolor: "#2b2b2b", p: { xs: 3, sm: 5 }, mt: 5, width: "100%", }}>
      <SubscriptionForm />
      <FormQueja />
    </Box>
    
    </>
  );
};
