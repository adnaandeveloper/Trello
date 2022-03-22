import React, { useState } from 'react';

import {
  AppBar,
  Toolbar,
  Grid,
  useMediaQuery,
  useTheme,
  IconButton,
  Button,
} from '@mui/material/';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AddIcon from '@mui/icons-material/Add';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';
import { Avatar } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import HeaderInput from './HeaderInput';
import TrelloLogo from './TrelloLogo';
import CreateButton from './CreateButton';
import CustomizeAvatar from './CustomizeAvatar';

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    height: 50,
  },
  menuRight: {},

  menuLeft: {},
  trelloIcon: {
    width: '75px',
    height: '15px',
  },
  MuiButtonRoot: {
    color: 'white',
  },
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

const menuListRigt = [
  {
    content: <DashboardIcon />,
  },
  {
    content: <TrelloLogo />,
  },
  {
    content: 'Workspace',
  },
  {
    content: 'Recent',
  },
  {
    content: 'Starred',
  },
  {
    content: 'Templates',
  },
];

const menuListLeft = [
  {
    content: <ErrorIcon />,
  },
  {
    content: <NotificationsNoneIcon />,
  },
  {
    content: <CustomizeAvatar />,
  },
];

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));
  const matchesTablet = useMediaQuery(theme.breakpoints.down(1059));
  const matchesTabletM = useMediaQuery(theme.breakpoints.down(1018));
  const matchesTabletMM = useMediaQuery(theme.breakpoints.down(1017));
  const matchesTabletMMX = useMediaQuery(theme.breakpoints.down(808));
  const matchesTabletMMXX = useMediaQuery(theme.breakpoints.down(751));

  return (
    <AppBar className={classes.appBar}>
      <Toolbar variant='dense' disableGutters>
        <Grid container justifyContent='space-between' alignItems='center'>
          <Grid item>
            <Grid item container alignItems='center' spacing={1}>
              {menuListRigt.map((content) => (
                <Grid item>
                  <Button
                    sx={{
                      paddin: '0 12px',
                      height: '32px',
                      textTransform: 'none',
                      '&:hover': {
                        backgroundColor: '#4688b9',
                      },
                    }}
                  >
                    {content.content}
                  </Button>
                </Grid>
              ))}
              <Grid item>
                {' '}
                <CreateButton />{' '}
              </Grid>
            </Grid>
          </Grid>

          <Grid item sx={{ marginRight: '20px' }}>
            <Grid
              item
              container
              justifyContent='center'
              alignItems='center'
              sx={{ flexGrow: 1 }}
              spacing={1}
            >
              <Grid item>
                <HeaderInput />
              </Grid>
              {menuListLeft.map((item) => (
                <Grid item>
                  <Button
                    sx={{
                      width: '30px',
                      height: '30px',
                      display: 'inline-block',
                      padding: 0,
                      minHeight: 0,
                      minWidth: 0,
                      '&:hover': {
                        backgroundColor: '#4688b9',
                      },
                    }}
                  >
                    {' '}
                    {item.content}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
