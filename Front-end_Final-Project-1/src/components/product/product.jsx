import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {
  Box,
  Typography,
  Rating,
  styled,
  Button,
  createTheme,
  ThemeProvider,
  TextField,
  InputAdornment,
  IconButton,
} from '@mui/material';

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { useParams } from 'react-router-dom';
import ProductImage from '/029ef5971eaa1f9cc5c527e9d758efcb.png';
import { useState } from 'react';

const theme = createTheme({
  palette: {
    cerulean: {
      main: '#1B4B66', // Primary color for buttons and other elements
      contrastText: '#FFFFFF', // Text color on buttons
    },
  },
});

const tapTheme = createTheme({
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Prevent uppercase text
          fontWeight: 'bold',
          minHeight: '40px',

          borderRadius: '8px',
          padding: '12px 16px',
          color: '#626262', // Default text color for unselected tabs
          backgroundColor: '#F1F1F1', // Default background color for unselected tabs

          '&.Mui-selected': {
            color: '#FFFFFF', // Text color for selected tab
            backgroundColor: '#1B4B66', // Background color for selected tab
            '&:hover': {
              backgroundColor: '#1B4B66', // Background color on hover for selected tab
            },
          },
          '&:hover': {
            backgroundColor: '#E3E3E3', // Optional hover effect for unselected tabs
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          display: 'none', // Hides the default indicator bar
        },
      },
    },
  },
});

export default function Product() {
  const [value, setValue] = useState('1');
  const [number, setNumber] = useState(1);
  console.log(number);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { product, category } = useParams();

  const RatingBox = styled(Box)({
    display: 'flex',
    margin: ' 25px 0 25px 0',
  });
  const PriceBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    margin: ' 25px 0 25px 0',
  });
  const QuantityBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    margin: ' 25px 0 25px 0',
  });
  const CartWichlistBox = styled(Box)({
    display: { sm: 'block', md: 'flex' },

    alignItems: 'center',
    margin: ' 25px 0 25px 0',
  });
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '35%',
          alignItems: 'center',
          marginLeft: '1.5%',
        }}
      >
        <Typography variant="h5" sx={{ color: '#1B4B66' }}>
          Home
        </Typography>
        <ArrowForwardIosIcon fontSize="small" />
        <Typography variant="h5" sx={{ color: '#1B4B66' }}>
          {category}
        </Typography>
        <ArrowForwardIosIcon fontSize="small" />
        <Typography variant="h5" sx={{ color: '#626262' }}>
          {product}
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',

          flexDirection: { xs: 'column', sm: 'column', md: 'row' },
          width: '97%',
          margin: 'auto',
          marginTop: '10px',
        }}
      >
        <Box
          style={{
            width: { xs: '100%', sm: '100%', md: '45.5vw' },
            overflow: 'hidden',
          }}
        >
          {' '}
          <img
            src={ProductImage}
            alt={product}
            style={{ width: '100%', objectFit: 'cover' }}
          />
          <Swiper
            navigation={{
              prevEl: '.custom-prev',
              nextEl: '.custom-next',
            }}
            spaceBetween={0}
            slidesPerView={4}
            autoplay={false}
            style={{
              width: '95%',
              height: '100px',
              overflow: 'hidden',
              position: 'relative',
              margin: 'auto',
              padding: ' 0 20px 0 10px',
            }}
          >
            <SwiperSlide>
              {' '}
              <img
                src={ProductImage}
                alt={product}
                style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '5px',
                  margin: '10px 0 10px 10px',
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={ProductImage}
                alt={product}
                style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '5px',
                  margin: '10px 0 10px 10px',
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={ProductImage}
                alt={product}
                style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '5px',
                  margin: '10px 0 10px 10px',
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={ProductImage}
                alt={product}
                style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '5px',
                  margin: '10px 0 10px 10px',
                }}
              />
            </SwiperSlide>
            <div className="custom-prev">
              <ArrowBackIosIcon fontSize="small" style={{ color: '#1B4B66' }} />
            </div>
            <div className="custom-next">
              <ArrowForwardIosIcon
                fontSize="small"
                style={{ color: '#1B4B66' }}
              />
            </div>
          </Swiper>
        </Box>

        <Box
          sx={{
            width: { xs: '100%', sm: '100%', md: '50.5vw' },
            paddingLeft: '10px',
          }}
        >
          <Typography variant="h3">{product}</Typography>
          <Typography variant="p" color="#626262">
            Leather Coach Bag with adjustable starps.
          </Typography>
          <RatingBox>
            <Rating
              name="Rating"
              onChange={(event, newValue) => {
                console.log(newValue);
              }}
              defaultValue={2}
            />
            <Typography component="p" color="#B6B6B6" paddingLeft={2}>
              (250) Ratings
            </Typography>
          </RatingBox>
          <PriceBox>
            <Typography variant="h4" marginRight={2} color="#171520">
              {' '}
              $54.69
            </Typography>
            <Typography
              variant="h5"
              marginRight={2}
              color="#B6B6B6"
              sx={{ textDecoration: 'line-through' }}
            >
              $78.66
            </Typography>
            <Typography variant="h7" color="#FF404B">
              {' '}
              50%OFF
            </Typography>
          </PriceBox>
          <hr style={{ opacity: '0.3', margin: ' 25px 0 25px 0' }} />
          <QuantityBox>
            <Typography variant="p">Quantity:</Typography>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              ml={2}
              sx={{ width: '120px' }}
            >
              <TextField
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton edge="start" size="small" sx={{ padding: 0 }}>
                        <RemoveIcon
                          onClick={() => {
                            number > 1 ? setNumber((pre) => pre - 1) : 1;
                          }}
                        />
                      </IconButton>
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        size="small"
                        sx={{ padding: 0 }}
                        onClick={() => setNumber((pre) => pre + 1)}
                      >
                        <AddIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    height: '40px',
                  },
                  width: '120px',
                  '& input': {
                    textAlign: 'center',
                  },
                  '& input[type="number"]::-webkit-outer-spin-button, & input[type="number"]::-webkit-inner-spin-button':
                    {
                      display: 'none',
                    },
                  '& input[type="number"]': {
                    MozAppearance: 'textfield',
                  },
                }}
              />
            </Box>
          </QuantityBox>
          <CartWichlistBox>
            <ThemeProvider theme={theme}>
              <Button
                startIcon={<LocalMallOutlinedIcon />}
                variant="contained"
                color="cerulean"
                sx={{
                  color: '#FFFFFF',
                  width: '250px',
                  marginRight: '15px',
                  marginTop: '15px',
                }}
              >
                Add to bag
              </Button>
              <Button
                startIcon={<FavoriteBorderOutlinedIcon />}
                variant="outlined"
                sx={{
                  color: '#1B4B66',
                  outlineColor: '#1B4B66',
                  width: '200px',
                  borderColor: '#1B4B66',
                  marginTop: '15px',
                }}
              >
                Add To Wishlist
              </Button>
            </ThemeProvider>
          </CartWichlistBox>
        </Box>
      </Box>

      <Box>
        <Box
          sx={{ width: '100%', typography: 'body1', margin: '25px 0 25px 0' }}
        >
          <ThemeProvider theme={tapTheme}>
            <TabContext value={value} width={'97%'} margin={'auto'}>
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: 'divider',
                  backgroundColor: '#F1F1F1',
                  borderRadius: '10px',
                  width: '97%',
                  margin: 'auto',
                }}
              >
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  sx={{
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    width: '97%',
                    margin: 'auto',
                  }}
                >
                  <Tab label="Product Description" value="1" />
                  <Tab label="Related Products" value="2" />
                  <Tab label="Ratings and Reviews" value="3" />
                </TabList>
              </Box>
              <TabPanel value="1" sx={{ color: '#626262' }}>
                {' '}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                deserunt at quibusdam et magni laudantium iste aut unde est
                cumque, pariatur, sequi sapiente modi ex tempore consequatur
                fugit? Animi, quo.
              </TabPanel>
              <TabPanel value="2" sx={{ color: '#626262' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi molestiae quidem, molestias illo dolor eos sequi
                laborum odit corrupti doloremque est, atque beatae rem, quaerat
                inventore. Accusamus quaerat eaque reiciendis?
              </TabPanel>
              <TabPanel value="3" sx={{ color: '#626262' }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Asperiores ea aut ab soluta aliquid rerum! Velit, quis iusto
                provident facilis quas atque corrupti accusamus magnam minus
                veniam! Neque, at quisquam!
              </TabPanel>
            </TabContext>
          </ThemeProvider>
        </Box>
      </Box>
    </>
  );
}