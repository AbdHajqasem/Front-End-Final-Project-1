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
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import axios from 'axios';

const LinkBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
});
export default function SignIn() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const [errorMsg, setError] = useState('');

  const signIn = async () => {
    try {
      const user = await axios.post(
        'https://backend-final-1-1-bkpd.onrender.com/login',
        userData
      );

      localStorage.setItem('token', JSON.stringify(user.data.token));
      localStorage.setItem('user', JSON.stringify(user.data.firstName));
      setUser(user.data.firstName);
      navigate('/');
    } catch (error) {
      setError(error.response.data.message);
    }
  };
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
        <Typography variant="h4"> Sign in</Typography>
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
          <FormControlLabel control={<Checkbox />} label="Remember me" />
        </FormGroup>
        <Button
          color="primary"
          variant="contained"
          sx={{ width: '100%' }}
          onClick={signIn}
        >
          SIGN IN
        </Button>
        <LinkBox>
          <Link> Forget password?</Link>
          <Link to={'/signup'}> Don&apos;t have an account? Sing Up</Link>
        </LinkBox>
        {errorMsg && (
          <Typography variant="p" color="red">
            {errorMsg}
          </Typography>
        )}
        <Typography variant="p" sx={{ color: '#B6B6B6' }}>
          {' '}
          Copyright{' '}
          <span style={{ textDecoration: 'underline' }}>Your Website</span> 2024
        </Typography>
      </Box>
    </Box>
  );
}
