import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Box,
  Button,
  MenuItem,
  Menu,
} from '@mui/material';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const StyledToolBar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});
const StyledLink = styled(Link)({
  color: '#17494D',
  textDecoration: 'none',
  fontSize: '1.5rem',
});
const linkStyle = {
  textDecoration: 'none',
  color: 'black',
  marginRight: '10px',
};
export default function NavBar() {
  const user = JSON.parse(localStorage.getItem('user'));

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
          <Button
            size="large"
            edge="start"
            aria-label="menu"
            sx={{
              mr: 2,
              color: '#17494D',
              display: {
                xs: 'block',
                md: 'none',
              },
            }}
            onClick={handleClick}
          >
            <MenuIcon />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>
              {' '}
              <Link to={'/handbags'} style={linkStyle}>
                Handbags
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              {' '}
              <Link to={'/watches'} style={linkStyle}>
                Watches
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              {' '}
              <Link to={'/skincare'} style={linkStyle}>
                Skincare
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              {' '}
              <Link to={'/jewellery'} style={linkStyle}>
                Jewellery
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              {' '}
              <Link to={'/apparels'} style={linkStyle}>
                Apparels
              </Link>
            </MenuItem>
          </Menu>
          <StyledLink to={'/'} sx={{ marginRight: '20px' }}>
            CORA&#39;L
          </StyledLink>
          {/* left side */}
          <Box
            sx={{
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
            <Link to={'/handbags'} style={linkStyle}>
              Handbags
            </Link>
            <Link to={'/watches'} style={linkStyle}>
              Watches
            </Link>
            <Link to={'/skincare'} style={linkStyle}>
              Skincare
            </Link>
            <Link to={'/jewellery'} style={linkStyle}>
              Jewellery
            </Link>
            <Link to={'/apparels'} style={linkStyle}>
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
          <Box
            marginLeft={2}
            flexWrap={'nowrap'}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <Link to={'/'} style={{ marginRight: '5px' }}>
              <FavoriteBorderIcon sx={{ color: '#1B4B66' }} />
            </Link>
            <Box style={{ marginRight: '5px' }}>
              {user ? (
                <Typography variant="p" sx={{ color: '#1B4B66' }}>
                  {user}
                </Typography>
              ) : (
                <PersonOutlineOutlinedIcon sx={{ color: '#1B4B66' }} />
              )}
            </Box>
            <Link to={'/Cart'} style={{ marginRight: '5px' }}>
              <LocalMallOutlinedIcon sx={{ color: '#1B4B66' }} />
            </Link>
          </Box>
        </Box>
      </StyledToolBar>
    </AppBar>
  );
}
