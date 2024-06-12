import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import toast, { Toaster } from 'react-hot-toast';

const CancelaciónCompra = () => {
  const [open, setOpen] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [confirmation, setConfirmation] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCancelOrder = () => {
    setOrderId('');
    setOpen(false);
    toast.success('Orden Cancelada')
    
  };

  return (
    <>
    <Toaster richColors position="bottom-left"  /> 
    <div style={{ padding: 20 }}>
      <Button
        variant="contained"
        sx={{ backgroundColor: 'primary.main', '&:hover': { backgroundColor: 'red' } }}
        onClick={handleClickOpen}
      >
        Cancelar Orden
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Cancelar Orden</DialogTitle>
        <DialogContent sx={{ backgroundColor: 'lightgrey' }}>
          <DialogContentText>
            "Ingrese el ID de la orden que desea cancelar."
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="ID de la Orden"
            type="text"
            fullWidth
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ color: 'red' }}>
            Cancelar
          </Button>
          <Button onClick={handleCancelOrder} sx={{ color: 'red' }}>
            Confirmar Cancelación
          </Button>
        </DialogActions>
      </Dialog>
      {confirmation && <p>{confirmation}</p>}
    </div>
    </>
  );
};

export default CancelaciónCompra;