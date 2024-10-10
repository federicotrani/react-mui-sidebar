import React, { useState } from 'react';
import { TextField, Button, Checkbox, FormControlLabel, Link, Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f4ff',
  },
  form: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0px 4px 20px rgba(0,0,0,0.1)',
  },
  input: {
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#4a90e2',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#357ABD',
    },
  },
  footer: {
    marginTop: '20px',
  },
}));

function LoginPage() {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleLogin = () => {
    // Aquí puedes manejar el inicio de sesión
    console.log({ username, password, remember });
  };

  return (
    <Box className={classes.container}>
      <Box className={classes.form}>
        <Typography variant="h5" align="center" gutterBottom>
          Modernize
        </Typography>
        <Typography variant="subtitle1" align="center" gutterBottom>
          Your Social Campaigns
        </Typography>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          className={classes.input}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          className={classes.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              color="primary"
            />
          }
          label="Remember this Device"
        />
        <Button
          variant="contained"
          fullWidth
          className={classes.button}
          onClick={handleLogin}
        >
          Sign In
        </Button>
        <Box className={classes.footer}>
          <Link href="#" variant="body2">
            Forgot Password?
          </Link>
        </Box>
      </Box>
      <Typography variant="body2" className={classes.footer}>
        New to Modernize?{' '}
        <Link href="#" variant="body2">
          Create an account
        </Link>
      </Typography>
    </Box>
  );
}

export default LoginPage;
