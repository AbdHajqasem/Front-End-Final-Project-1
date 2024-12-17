import React, { useState } from 'react';
import { AppBar, Toolbar, styled, Typography, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
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
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchKeyPress = (e) => {
    if (e.key === 'Enter') {
      navigate(`/search?query=${searchQuery}`);
    }
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
          <StyledTypography variant="h5" sx={{ marginRight: '20px' }}>
            CORA'L
          </StyledTypography>
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
            {/* Add your categories links here */}
          </Box>
        </Box>
        <Box display={'flex'} alignItems={'center'}>
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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearchKeyPress}
              style={{
                outline: 'none',
                border: 'none',
                backgroundColor: 'transparent',
                width: '90%',
              }}
            />
          </Box>
          {/* Icons box */}
          <Box marginLeft={2} flexWrap={'nowrap'}>
            <Link to={'/'} style={{ marginRight: '5px' }}>
              <FavoriteBorderIcon sx={{ color: '#1B4B66' }} />
            </Link>
            <Link to={'/'} style={{ marginRight: '5px' }}>
              <PersonOutlineOutlinedIcon sx={{ color: '#1B4B66' }} />
            </Link>
            <Link to={'/'} style={{ marginRight: '5px' }}>
              <LocalMallOutlinedIcon sx={{ color: '#1B4B66' }} />
            </Link>
          </Box>
        </Box>
      </StyledToolBar>
    </AppBar>
  );
}
