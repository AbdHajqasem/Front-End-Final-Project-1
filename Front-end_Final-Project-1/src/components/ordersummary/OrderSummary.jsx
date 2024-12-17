import React from 'react';
import { Paper, Typography, Box, Divider } from '@mui/material';

const OrderSummary = () => (
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
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mb: 4.5,
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        <Box
          component="img"
          src="https://via.placeholder.com/70"
          alt="Product"
          sx={{
            width: 75,
            height: 80,
            mr: { sm: 2 },
            mb: { xs: 2, sm: 0 },
            borderRadius: '8px',
          }}
        />
        <Box textAlign={{ xs: 'center', sm: 'left' }}>
          <Typography variant="body1">Coach</Typography>
          <Typography variant="body2" color="text.secondary">
            Leather Coach Bag
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Qty - 1
          </Typography>
        </Box>
      </Box>

      {/* Second Item */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mb: 8,
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        <Box
          component="img"
          src="https://via.placeholder.com/70"
          alt="Product"
          sx={{
            width: 75,
            height: 80,
            mr: { sm: 2 },
            mb: { xs: 2, sm: 0 },
            borderRadius: '8px',
          }}
        />
        <Box textAlign={{ xs: 'center', sm: 'left' }}>
          <Typography variant="body1">Coach</Typography>
          <Typography variant="body2" color="text.secondary">
            Leather Coach Bag
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Qty - 1
          </Typography>
        </Box>
      </Box>
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
      <Typography sx={{ color: '#171520' }}>$119.69</Typography>
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
      <Typography sx={{ color: '#171520' }}>-$13.40</Typography>
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
      <Typography sx={{ color: '#171520' }}>$0.00</Typography>
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
      <Typography sx={{ color: '#171520' }}>$106.29</Typography>
    </Box>
  </Box>
);

export default OrderSummary;