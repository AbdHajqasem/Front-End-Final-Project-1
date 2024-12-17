import React from 'react';
import { Paper, Typography, Box, Divider } from '@mui/material';

const OrderSummary = (prop) => (
  <Box
    sx={{
      width: { xs: '100%', sm: '412px' },
      height: 'auto',
      p: '5px',
      overflow: 'hidden',
    }}
  >
    <Typography fontSize="20px" fontWeight="600" gutterBottom>
      Order Summary
    </Typography>
    <Divider sx={{ mb: 7 }} />
    <Box sx={{ mb: 2 }}>
      {/* First Item */}
      {prop.cartItems.map((cartItem,index)=>( <Box key={index}
        sx={{
          display: 'flex',
          alignItems: 'center',
          mb: 4.5,
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        <Box
          component="img"
          src={cartItem.product.imageUrl}
          alt="Product"
          sx={{
            width: 75,
            height: 80,
            mr: { sm: 2 },
            mb: { xs: 2, sm: 0 },
            borderRadius: '8px',
          }}
        />
        <Box textAlign={{ xs: 'center', sm: 'left' }} key={index}>
          <Typography variant="body1">{cartItem.product.name}</Typography>
          <Typography variant="body2" color="text.secondary">
          {cartItem.product.categoryName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {cartItem.quantity}
          </Typography>
        </Box>
      </Box>))}
    </Box>

    <Typography fontSize="20px" fontWeight="600" gutterBottom>
      Order Details
    </Typography>
    <Divider sx={{ mb: 3 }} />

    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '16px',
        fontWeight: 500,
        color: '#626262',
        my: 0.5,
      }}
    >
      <Typography>Sub Total:</Typography>
      <Typography sx={{ color: '#171520' }}>${prop.summary.subtotal}</Typography>
    </Box>

    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '16px',
        fontWeight: 500,
        color: '#626262',
        my: 0.5,
      }}
    >
      <Typography>Discount:</Typography>
      <Typography sx={{ color: '#171520' }}>${prop.summary.discount}</Typography>
    </Box>

    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '16px',
        fontWeight: 500,
        color: '#626262',
        my: 0.5,
      }}
    >
      <Typography>Delivery Fee:</Typography>
      <Typography sx={{ color: '#171520' }}>$12</Typography>
    </Box>

    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '16px',
        fontWeight: 500,
        color: '#171520',
        my: 0.5,
      }}
    >
      <Typography>Grand Total:</Typography>
      <Typography sx={{ color: '#171520' }}>${prop.summary.grandTotal+12}</Typography>
    </Box>
  </Box>
);

export default OrderSummary;