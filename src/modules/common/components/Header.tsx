import React from 'react';
import { AppBar, Toolbar, Grid, Button } from '@mui/material/';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';
import ErrorIcon from '@mui/icons-material/Error';
import HeaderInput from './HeaderInput';
import TrelloLogo from './TrelloLogo';
import CustomizeAvatar from './CustomizeAvatar';
import CreateButton from './CreateButton';

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    height: 50,
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
  light: string;
  dark: string;
};

const Header = ({ main, light, dark }: Props) => {
  const classes = useStyles();

  const createHandler = (content: string | JSX.Element) => {
    if (content === 'Create') console.log(content);
  };
  return (
    <>
      <AppBar
        className={classes.appBar}
        sx={{ backgroundColor: dark }}
        position='fixed'
      >
        <Toolbar variant='dense' disableGutters>
          <Grid container justifyContent='space-between' alignItems='center'>
            <Grid item>
              <Grid item container alignItems='center' spacing={1}>
                {menuListRigt.map((content, index) => (
                  <Grid item key={index}>
                    {index === 1 && content.content}
                    <Button
                      onClick={() => createHandler(content.content)}
                      sx={{
                        paddin: '0 12px',
                        height: '32px',
                        textTransform: 'none',
                        backgroundColor: index === 6 ? main : '',
                        '&:hover': {
                          backgroundColor: light,
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
                  <HeaderInput main={main} light={light} dark={dark} />
                </Grid>
                {menuListLeft.map((item, index) => (
                  <Grid item key={index}>
                    <Button
                      sx={{
                        width: '30px',
                        height: '30px',
                        display: 'inline-block',
                        padding: 0,
                        minHeight: 0,
                        minWidth: 0,
                        '&:hover': {
                          backgroundColor: light,
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
    </>
  );
};

export default Header;
