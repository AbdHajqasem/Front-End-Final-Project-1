import { AppBar, Toolbar, styled, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const StyledToolBar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});
const StyledTypography = styled(Typography)({
  color: '#17494D',
});
const linkStyle = {
  textDecoration: 'none',
  color: 'black',
  marginRight: '10px',
};
export default function NavBar() {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'white' }} elevation={0}>
      <StyledToolBar>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',

            textAlign: 'center',
          }}
        >
          <StyledTypography variant="h5" sx={{ marginRight: '20px' }}>
            CORA'L
          </StyledTypography>
          {/* left side */}
          <Box
            sx={{
              // width: '100%',
              display: {
                xs: 'none',
                md: 'flex',
              },
              justifyContent: 'space-around',
              alignItems: 'center',
              color: '#171520',
            }}
          >
            {' '}
            <Link to={'/Home11'} style={linkStyle}>
              Handbags
            </Link>
            <Link to={'/product'} style={linkStyle}>
              Watches
            </Link>
            <Link to={'/'} style={linkStyle}>
              Skincare
            </Link>
            <Link to={'/'} style={linkStyle}>
              Jewellery
            </Link>
            <Link to={'/'} style={linkStyle}>
              Apparels
            </Link>
          </Box>
        </Box>
        {/* right side */}
        <Box display={'flex'} alignItems={'center'}>
          {/* search box */}
          <Box
            sx={{
              background: '#F1F1F1',
              borderRadius: '5px',
              display: { xs: 'none', sm: 'flex' },
              alignItems: 'center',
              flexWrap: 'nowrap',
              width: '300px',
              padding: '10px',
            }}
          >
            <SearchOutlinedIcon sx={{ color: 'black' }} />
            <input
              type="text"
              placeholder="Search for products or brands....."
              style={{
                outline: 'none',
                border: 'none',
                backgroundColor: 'transparent',
                width: '90%',
              }}
            />
          </Box>
          {/* icons box */}
          <Box marginLeft={2} flexWrap={'nowrap'}>
            <Link to={'/'} style={{ marginRight: '5px' }}>
              <FavoriteBorderIcon sx={{ color: '#1B4B66' }} />
            </Link>
            <Link to={'/'} style={{ marginRight: '5px' }}>
              <PersonOutlineOutlinedIcon sx={{ color: '#1B4B66' }} />
            </Link>
            <Link to={'/Cart'} style={{ marginRight: '5px' }}>
              <LocalMallOutlinedIcon sx={{ color: '#1B4B66' }} />
            </Link>
          </Box>
        </Box>
      </StyledToolBar>
    </AppBar>
  );
}
