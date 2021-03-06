import React, { useContext, useState } from 'react';

import {
  Grid,
  Typography,
  TextField,
  Button,
  useMediaQuery,
  useTheme,
  Hidden,
  Box,
  Snackbar,
} from '@mui/material';

import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { makeStyles } from '@mui/styles';
import LoadingButton from '@mui/lab/LoadingButton';

import rigtPic from './../../../assets/right.svg';
import lefPic from './../../../assets/left.svg';

import { Theme } from '@mui/system';

import { login } from 'context/api-helper';
import { AuthContext } from 'context/api-context';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => ({
  loginPage: {
    backgroundColor: '#F9FAFC',
    height: '60em',
  },
  logo: {
    width: '14em',
    marginTop: '2em',
    marginBottom: '2em',
  },
  loginBox: {
    background: 'hsl(0deg 0% 100%)',
    boxShadow: 'rgb(0 0 0 / 10%) 0 0 10px',
    padding: '25px 40px',
    width: '25em',
  },
  leftPic: {
    width: '35%',
    height: '50%',
    bottom: 0,
    position: 'fixed',
    marginRight: '-10px',
    [theme.breakpoints.down('md')]: {
      width: '20%',
      height: '15',
    },
  },
  rightPic: {
    width: '35%',
    height: '50%',
    bottom: 0,
    right: 0,
    position: 'fixed',
    marginLeft: '-10px',
    [theme.breakpoints.down('md')]: {
      width: '20%',
      height: '15',
    },
  },
  passwordInput: {
    width: '20em',
    '& .MuiOutlinedInput-notchedOutline legend': { display: 'none' },
  },
  mailInput: {
    width: '20em',
    '& .MuiOutlinedInput-notchedOutline legend': { display: 'none' },
  },
  ButtonsInLoginBox: {
    width: '23em',
    textTransform: 'none',
    fontfFamily:
      '"-apple-system",BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif',
    fontSize: '300',
    fontWeight: 'bold',
  },
  LoginTrello: {
    color: '#5E6C84',
    fontSize: '16px',
    fontWeight: 'bold',
  },
}));
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});
const Login = () => {
  const [open, setOpen] = React.useState(false);
  const [message, setMassage] = React.useState('');

  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const { logIn } = useContext(AuthContext);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    const sendtData = await login(email, password).catch((error) => {
      setMassage(error.message);
      setOpen(true);

      setLoading(false);
    });
    if (sendtData.jwt) {
      setOpen(false);
      logIn(sendtData.jwt, sendtData.user.firstName, sendtData.user.id);
      setLoading(false);
      localStorage.setItem('token', sendtData.jwt);
      localStorage.setItem('userName', sendtData.user.username);
      localStorage.setItem('userName', sendtData.user.email);
      navigate('/boards');
    } else {
      setLoading(false);
      setOpen(false);
      setMassage('');
    }
  };
  return (
    <Grid
      container
      className={classes.loginPage}
      justifyContent={matchesSM ? ' center' : 'space-between'}
    >
      <Hidden smDown>
        <Grid item>
          <Grid item container>
            <Grid item sx={{}}>
              {/** Left pic */}

              <img src={lefPic} alt='left-pic' className={classes.leftPic} />
            </Grid>
          </Grid>
        </Grid>
      </Hidden>

      <Grid item>
        <Grid item container direction='column' alignItems='center'>
          <Grid item>
            <img
              className={classes.logo}
              src='https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/167dc7b9900a5b241b15ba21f8037cf8/trello-logo-blue.svg'
              alt='Logo'
            />
          </Grid>

          <Grid item className={classes.loginBox}>
            {/** box center */}

            <Grid
              item
              container
              direction='column'
              alignItems='center'
              spacing={2}
            >
              <Grid item sx={{ marginBottom: '14px' }}>
                <Typography className={classes.LoginTrello}>
                  Log in to Trello
                </Typography>
              </Grid>
              <Box
                component='form'
                onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
                  handleSubmit(e)
                }
                noValidate
                sx={{ mt: 1 }}
              >
                <Grid item>
                  <TextField
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder='Enter mail'
                    variant='outlined'
                    size='small'
                    className={classes.mailInput}
                    id='email'
                    name='email'
                  />
                </Grid>
                <Grid item mt={2} mb={2}>
                  <TextField
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    name='password'
                    type='password'
                    id='password'
                    placeholder='Enter password'
                    variant='outlined'
                    size='small'
                    className={classes.passwordInput}
                  />
                </Grid>

                <Grid item>
                  <LoadingButton
                    loading={loading}
                    type='submit'
                    className={classes.ButtonsInLoginBox}
                    sx={{
                      color: 'white',
                      backgroundColor: '#5AAC44',
                      '&:hover': {
                        backgroundColor: '#6ebe58',
                      },
                    }}
                  >
                    login in
                  </LoadingButton>
                </Grid>
              </Box>
              <Grid>
                <Typography
                  variant='h6'
                  sx={{ color: '#4D4D4D', margin: '1rem' }}
                >
                  OR
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  className={classes.ButtonsInLoginBox}
                  sx={{
                    boxShadow: 'rgb(0 0 0 / 20%) 1px 1px 5px 0',
                    color: '#505F79',
                  }}
                >
                  Continue with Google
                </Button>
              </Grid>
              <Grid item>
                <Button
                  className={classes.ButtonsInLoginBox}
                  sx={{
                    boxShadow: 'rgb(0 0 0 / 20%) 1px 1px 5px 0',
                    color: '#505F79',
                  }}
                >
                  Continue with Micrsoft
                </Button>
              </Grid>
              <Grid item>
                <Button
                  className={classes.ButtonsInLoginBox}
                  sx={{
                    boxShadow: 'rgb(0 0 0 / 20%) 1px 1px 5px 0',
                    color: '#505F79',
                  }}
                >
                  Continue with Apple
                </Button>
              </Grid>
              <Grid item>
                <Button
                  className={classes.ButtonsInLoginBox}
                  sx={{
                    boxShadow: 'rgb(0 0 0 / 20%) 1px 1px 5px 0',
                    color: '#505F79',
                  }}
                >
                  Continue with Slak
                </Button>
              </Grid>
              <Grid item>
                <Typography
                  sx={{
                    color: '#505F79',
                  }}
                >
                  Log in with SSO
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  onClick={() => navigate('/signup')}
                  sx={{
                    backgroundColor: '#59ac44',
                    '&:hover': { backgroundColor: '#6ebe58' },
                  }}
                >
                  Register
                </Button>
              </Grid>
              <Grid item>
                <Snackbar
                  open={open}
                  autoHideDuration={6000}
                  onClose={() => setOpen(false)}
                >
                  <Alert severity='error'>{message}</Alert>
                </Snackbar>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Hidden smDown>
        <Grid item>
          <Grid item container>
            <Grid item>
              {/** right pic */}
              <img src={rigtPic} alt='right-pic' className={classes.rightPic} />
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
    </Grid>
  );
};

export default Login;
