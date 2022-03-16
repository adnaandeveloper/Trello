import React, { useState } from 'react';

import {
  Grid,
  Typography,
  TextField,
  Button,
  useMediaQuery,
  useTheme,
  Hidden,
  Divider,
  Link,
} from '@mui/material';

import { makeStyles } from '@mui/styles';
import rigtPic from '../../src/assets/right.svg';
import lefPic from '../../src/assets/left.svg';
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

  mailInput: {
    width: '20em',
    backgroundColor: '#FAFBFC',
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
  Divider: {
    backgroundColor: 'hsl(0,0%,80%)',
    height: '1px',
    width: '20em',
    marginTop: '50px',
  },
}));
const Signup = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const [mail, setMail] = useState(false);
  const [mailAccept, setMailAccept] = useState(false);
  const [text, setText] = useState('');

  const emailRegex = /\S+@\S+\.\S+/;

  const handleMailInput = (e: string) => {
    if (e) {
      setText(e);
      setMail(true);
      if (emailRegex.test(e)) {
        setMailAccept(true);
        console.log(mailAccept);
      }
    } else {
      setText('');
      setMail(false);

      setMailAccept(false);
      console.log(mailAccept);
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
                <Typography variant='h5' className={classes.LoginTrello}>
                  Sign up for your account
                </Typography>
              </Grid>
              <Grid item>
                <TextField
                  value={text}
                  id='outlined-basic'
                  type='text'
                  placeholder='Enter mail'
                  variant='outlined'
                  size='small'
                  className={classes.mailInput}
                  onChange={(e) => {
                    handleMailInput(e.target.value);
                  }}
                />
              </Grid>
              <Grid item>
                <Typography sx={{ fontSize: '12px' }}>
                  By signing up, you confirm that you've read and <br />{' '}
                  accepted our{' '}
                  <span style={{ color: '#0052CC' }}>
                    {' '}
                    <Link href='#'>Terms of Service</Link>{' '}
                  </span>{' '}
                  and
                  <span style={{ color: '#0052CC' }}>
                    {' '}
                    <Link href='#'> Privacy Policy.</Link>{' '}
                  </span>
                </Typography>
              </Grid>

              <Grid item>
                <Button
                  disabled={!mailAccept}
                  className={classes.ButtonsInLoginBox}
                  sx={{
                    color: mailAccept ? 'white' : '#8c8c8c',
                    backgroundColor: mailAccept ? '#5AAC44' : '#E2E4E6',
                    '&:hover': {
                      backgroundColor: mailAccept ? '#6ebe58' : '#E2E4E6',
                    },
                  }}
                >
                  Continue
                </Button>
              </Grid>

              {!mail && (
                <Grid
                  item
                  container
                  direction='column'
                  alignItems='center'
                  spacing={2}
                >
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
                  <Grid item sx={{ marginTop: '20px' }}>
                    <Divider className={classes.Divider} />
                  </Grid>

                  <Grid item>
                    <Typography
                      sx={{
                        color: '#0052CC',
                        fontSize: '14px;',
                      }}
                    >
                      <Link href='#'>Already have an account? Log In</Link>
                    </Typography>
                  </Grid>
                </Grid>
              )}
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

export default Signup;
