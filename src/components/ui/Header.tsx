import React, { useState } from 'react';

import {
  AppBar,
  Toolbar,
  Grid,
  useMediaQuery,
  useTheme,
  IconButton,
  TextField,
  Hidden,
} from '@mui/material/';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import CallMadeIcon from '@mui/icons-material/CallMade';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';
import { Avatar } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    height: 50,
  },
  trelloIcon: {
    width: '75px',
    height: '15px',
  },
  menuClasse: {},
  searchInput: {
    '& input:focus::placeholder': {
      color: 'black',
    },
    '& input::placeholder': {
      color: 'white',
    },

    height: '32px',

    '& .MuiInput-underline:after': {
      borderBottomColor: theme.palette.primary.main,
    },

    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.palette.primary.main,
      },

      '&:hover fieldset': {
        borderColor: theme.palette.primary.main,
      },
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesTablet = useMediaQuery(theme.breakpoints.down(1059));
  const matchesTabletM = useMediaQuery(theme.breakpoints.down(1018));
  const matchesTabletMM = useMediaQuery(theme.breakpoints.down(1017));
  const matchesTabletMMX = useMediaQuery(theme.breakpoints.down(808));
  const matchesTabletMMXX = useMediaQuery(theme.breakpoints.down(751));

  const [focus, setFocus] = useState(false);
  const [mouseOver, setMouseOver] = useState(false);
  const focusHandler = () => {
    setFocus(true);
    setMouseOver(false);
  };
  const onMouseOverhandler = () => {
    if (!focus) {
      setMouseOver(true);
    }
  };

  const onBlurHandler = () => {
    setFocus(false);
    setMouseOver(false);
  };

  return (
    <AppBar className={classes.appBar}>
      <Toolbar variant='dense' disableGutters>
        <Grid container justifyContent='space-between' alignItems='center'>
          <Grid item>
            <Grid item container alignItems='center' spacing={1}>
              <Grid item>
                {' '}
                <DashboardIcon />
              </Grid>
              <Grid item>
                <IconButton>
                  <img
                    className={classes.trelloIcon}
                    src='https://a.trellocdn.com/prgb/dist/images/header-logo-spirit-loading.87e1af770a49ce8e84e3.gif'
                    alt='Logo'
                  />
                </IconButton>
              </Grid>
              <Grid item>
                {' '}
                <IconButton>Workspace</IconButton>{' '}
              </Grid>
              <Hidden smDown>
                {matchesTabletMM ? (
                  <Grid item>
                    <IconButton>Recent</IconButton>
                  </Grid>
                ) : (
                  ''
                )}
              </Hidden>
              <Hidden smDown>
                {matchesTabletM ? (
                  <Grid item>
                    <IconButton>Starred</IconButton>
                  </Grid>
                ) : (
                  ''
                )}
              </Hidden>

              {matchesTablet ? (
                <Grid item>
                  <IconButton>More</IconButton>
                </Grid>
              ) : (
                <Grid item>
                  <IconButton>Templates</IconButton>
                </Grid>
              )}

              {matchesLG ? (
                <Grid item>
                  <IconButton>
                    <AddIcon />
                  </IconButton>{' '}
                </Grid>
              ) : (
                <Grid item>
                  <IconButton>Create</IconButton>{' '}
                </Grid>
              )}
            </Grid>
          </Grid>

          <Grid item>
            <Grid
              item
              container
              justifyContent='center'
              alignItems='center'
              spacing={2}
            >
              <Grid item>
                <TextField
                  onMouseOut={() => setMouseOver(false)}
                  onMouseOver={onMouseOverhandler}
                  onBlur={onBlurHandler}
                  onFocus={focusHandler}
                  sx={{
                    width: matchesTabletMM ? '40px' : '250px',
                    backgroundColor: mouseOver
                      ? '#77a6ca'
                      : focus
                      ? 'white'
                      : '#4688b9',
                  }}
                  className={classes.searchInput}
                  id='outlined-basic'
                  placeholder='Search'
                  size='small'
                  variant='outlined'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <SearchIcon sx={{ color: focus ? 'black' : 'white' }} />
                      </InputAdornment>
                    ),

                    endAdornment: (
                      <InputAdornment position='end'>
                        {focus && (
                          <>
                            {matchesTabletMM ? (
                              ''
                            ) : (
                              <Grid item>
                                <IconButton>
                                  <CallMadeIcon
                                    sx={{
                                      color: focus ? 'black' : 'white',
                                      fontSize: 18,
                                    }}
                                  />
                                </IconButton>
                              </Grid>
                            )}
                            {matchesTabletMM ? (
                              ''
                            ) : (
                              <Grid item>
                                <IconButton>
                                  <CloseIcon
                                    sx={{
                                      color: focus ? 'black' : 'white',
                                      fontSize: 18,
                                    }}
                                  />
                                </IconButton>
                              </Grid>
                            )}
                          </>
                        )}
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              {matchesTabletMMX ? (
                ''
              ) : (
                <Grid item>
                  <IconButton>
                    <ErrorIcon />
                  </IconButton>
                </Grid>
              )}
              {matchesTabletMMXX ? (
                ''
              ) : (
                <Grid item>
                  <IconButton>
                    <NotificationsNoneIcon />
                  </IconButton>
                </Grid>
              )}

              <Grid item>
                {' '}
                <IconButton>
                  <Avatar />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
