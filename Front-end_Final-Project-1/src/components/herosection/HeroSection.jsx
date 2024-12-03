import { Box, Button, Typography } from '@mui/material';
import Background from '/b10a20326ef0961ac5866255161d378d.jpg';
import EastIcon from '@mui/icons-material/East';
function HeroSection() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '40px',
      }}
    >
      <Box
        sx={{
          backgroundImage: `url( ${Background} )`,
          width: '97%',
          height: '400px',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          borderRadius: '15px',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            backgroundColor: '#DEDEDEB2',
            background: 'rgba(255,255,255,0.7)',
            height: '316px',
            width: '759px',
            borderRadius: '  35px 0  0 35px',
            position: 'absolute',
            right: '0',
            top: '42px',
            paddingLeft: '50px',
            // backdropFilter: 'blur(1px)',
          }}
        >
          <Typography
            variant="h2"
            sx={{ color: '#1B4B66', fontWeight: '800', marginTop: '20px' }}
          >
            Carry your Funk
          </Typography>
          <Typography variant="h5" sx={{ color: '#1B4B66', marginTop: '10px' }}>
            Trendy handbags collection for your party animal
          </Typography>
          <Button
            startIcon={<EastIcon />}
            variant="contained"
            sx={{
              color: '#FFFFFF',
              backgroundColor: '#1B4B66',
              marginTop: '120px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            See more
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default HeroSection
