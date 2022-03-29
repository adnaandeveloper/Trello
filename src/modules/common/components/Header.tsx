import React from 'react';

import { AppBar, Toolbar, Grid, Button } from '@mui/material/';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';
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
  {
    content: <CreateButton />,
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
type Props = {
  main: string;
  ligth: string;
  dark: string;
};

const Header = ({ main, ligth, dark }: Props) => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} sx={{ backgroundColor: dark }}>
      <Toolbar variant='dense' disableGutters>
        <Grid container justifyContent='space-between' alignItems='center'>
          <Grid item>
            <Grid item container alignItems='center' spacing={1}>
              {menuListRigt.map((content, index) => (
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
