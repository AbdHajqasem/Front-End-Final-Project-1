import {
  Box,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Button,
  styled,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const LinkBox = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
  width: '100%',
});

export default function SignUp() {
  let navigate = useNavigate();
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [errorMsg, setError] = useState('');



  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-around',
          height: '500px',
          width: '400px',
        }}
      >
        <LockOutlinedIcon
          sx={{
            color: 'white',
            backgroundColor: '#9C27B0',
            borderRadius: '50%',
            padding: '8px',
            width: '40px',
            height: '40px',
          }}
        />
        <Typography variant="h4"> Sign up</Typography>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <TextField
            label="First Name *"
            variant="outlined"
            onChange={(e) =>
              setUserData((pre) => {
                return { ...pre, firstName: e.target.value };
              })
            }
          />
          <TextField
            label="Last Name *"
            variant="outlined"
            onChange={(e) =>
              setUserData((pre) => {
                return { ...pre, lastName: e.target.value };
              })
            }
          />
        </Box>
        <TextField
          type="email"
          label="Email Address *"
          variant="outlined"
          sx={{ width: '100%' }}
          onChange={(e) =>
            setUserData((pre) => {
              return { ...pre, email: e.target.value };
            })
          }
        />
        <TextField
          type="password"
          label="Password *"
          variant="outlined"
          sx={{ width: '100%' }}
          onChange={(e) =>
            setUserData((pre) => {
              return { ...pre, password: e.target.value };
            })
          }
        />
        <FormGroup
          sx={{
            width: '100%',
            justifyContent: 'flex-start',
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label="I want to receive inspiration, marketing promotion and update via email "
          />
        </FormGroup>
        <Button
          color="primary"
          variant="contained"
          sx={{ width: '100%' }}
       
        >
          SIGN Up
        </Button>
        {errorMsg && (
          <Typography variant="p" color="red">
            {errorMsg}
          </Typography>
        )}

        <LinkBox>
          <Link to={'/signin'}> Already have an account? Sing in</Link>
        </LinkBox>
        <Typography variant="p" sx={{ color: '#B6B6B6' }}>
          {' '}
          Copyright{' '}
          <span style={{ textDecoration: 'underline' }}>Your Website</span> 2024
        </Typography>
      </Box>
    </Box>
  );
}
