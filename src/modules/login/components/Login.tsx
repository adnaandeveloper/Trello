import React from 'react';

import {
  Grid,
  Typography,
  TextField,
  Button,
  useMediaQuery,
  useTheme,
  Hidden,
} from '@mui/material';

import { makeStyles } from '@mui/styles';

import rigtPic from './../../../assets/right.svg';
import lefPic from './../../../assets/left.svg';

import { Theme } from '@mui/system';

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
  },
  mailInput: {
    width: '20em',
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
const Login = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
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
              <Grid item>
                <TextField
                  id='outlined-basic'
                  placeholder='Enter mail'
                  variant='outlined'
                  size='small'
                  className={classes.mailInput}
                />
              </Grid>
              <Grid item>
                <TextField
                  id='outlined-basic'
                  type='password'
                  placeholder='Enter password'
                  variant='outlined'
                  size='small'
                  className={classes.passwordInput}
                />
              </Grid>

              <Grid item>
                <Button
                  className={classes.ButtonsInLoginBox}
                  sx={{
                    color: 'white',
                    backgroundColor: '#5AAC44',
                    '&:hover': {
                      backgroundColor: '#6ebe58',
                    },
                  }}
                >
                  Log in
                </Button>
              </Grid>

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
