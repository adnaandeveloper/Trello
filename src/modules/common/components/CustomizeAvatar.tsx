import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import React, { useContext, useEffect, useState } from 'react';
import { Avatar, Box, Grid } from '@mui/material';
import { AuthContext } from 'context/api-context';
import { SocialDistanceOutlined } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import { useNavigate } from 'react-router-dom';

const emails = ['username@gmail.com', 'user02@gmail.com'];

const dialogList = [
  {
    content: 'Add another account',
  },
  {
    content: <Divider variant='middle' />,
  },
  {
    content: 'Profile and visibility',
  },
  {
    content: 'Activity',
  },
  {
    content: 'Cards',
  },
  {
    content: 'Settings',
  },
  {
    content: <Divider variant='middle' />,
  },
  {
    content: 'Helps',
  },
  {
    content: 'Shortcuts',
  },
  {
    content: <Divider variant='middle' />,
  },
  {
    content: 'Log out',
  },
];

export interface Props {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
  loggenInUser: string | null;
}

function HeaderAvatarDialog(props: Props) {
  const navigate = useNavigate();
  const { onClose, selectedValue, open, loggenInUser } = props;
  const { logOut } = useContext(AuthContext);

  const handlerLogout = () => {
    logOut();
    navigate('/login');
  };

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  function stringToColor(value: string | null) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    if (value)
      for (i = 0; i < value.length; i += 1) {
        hash = value.charCodeAt(i) + ((hash << 5) - hash);
      }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name: string | null) {
    if (name)
      return {
        sx: {
          bgcolor: stringToColor(name),
        },

        children: `${name!.split(' ')[0][0]}`,
      };
  }

  const onClickHandler = (event: string) => {
    switch (event) {
      case '10':
        handlerLogout();
        break;
      case '2':
        navigate('/users/1');
        break;
    }
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      sx={{
        display: 'gird',
        '& .MuiPaper-root': {
          marginTop: '0px',
          marginRight: '3px',
          width: '304px',
          overflowX: 'hidden',
        },
        '& .MuiDialog-container': {
          justifyContent: 'flex-end !important',
          alignItems: 'flex-start',
          marginTop: '51px',
        },
      }}
    >
      <DialogTitle>
        <Grid container>
          <Grid
            item
            alignSelf='center'
            sx={{
              paddingRight: '89px',
              paddingLeft: '78px',
              color: '#5E6C84',
              fontSize: '14px',

              fontWeight: '400',
            }}
          >
            Acount
          </Grid>
          <Grid item>
            <CloseIcon
              onClick={handleClose}
              sx={{
                color: '#5E6C84',
                fontSize: '14px',
                fontWeight: '400',
                width: '20px',
                height: 'auto',
                '&:hover': {
                  cursor: 'pointer',
                  color: 'black',
                },
              }}
            />
          </Grid>
        </Grid>
      </DialogTitle>
      <Divider variant='middle' />

      <Grid container m={2}>
        <Grid item>
          <Grid item container mr={2}>
            <Grid item>
              <Avatar
                {...stringAvatar(loggenInUser)}
                sx={{
                  width: '40px',
                  height: '40px',
                  display: 'inline-block',
                  padding: '11px',
                  minHeight: 0,
                  minWidth: 0,
                  paddingTop: '7px',
                  backgroundColor: 'red',
                  textTransform: 'uppercase',
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item container direction='column'>
            <Grid item mb={-1} sx={{ color: '#2f3f5e' }}>
              <h6 style={{ textTransform: 'capitalize' }}> {loggenInUser}</h6>
            </Grid>
            <Grid item sx={{ color: '#b5bcc6' }}>
              <h6> {localStorage.getItem('userEmail')} </h6>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box sx={{ m: 1 }}>
        <List sx={{ '& .MuiListItemButton-root': { padding: '0' } }}>
          {dialogList.map((item, index) =>
            index === 1 || index === 6 || index === 9 ? (
              item.content
            ) : (
              <ListItemButton onClick={() => onClickHandler(index.toString())}>
                <ListItem>
                  <ListItemText primary={item.content} />
                </ListItem>
              </ListItemButton>
            )
          )}
        </List>
      </Box>
    </Dialog>
  );
}

const CustomizeAvatar = () => {
  const [logedInUser, setLogedInUser] = useState<string | null>('');

  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  function stringToColor(value: string | null) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    if (value)
      for (i = 0; i < value.length; i += 1) {
        hash = value.charCodeAt(i) + ((hash << 5) - hash);
      }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name: string | null) {
    if (name)
      return {
        sx: {
          bgcolor: stringToColor(name),
        },

        children: `${name!.split(' ')[0][0]}`,
      };
  }
  useEffect(() => {
    setLogedInUser(localStorage.getItem('userName'));
  }, [logedInUser]);

  return (
    <div>
      <Avatar
        onClick={handleClickOpen}
        {...stringAvatar(logedInUser)}
        sx={{
          width: '30px',
          height: '30px',
          display: 'inline-block',
          padding: 0,
          minHeight: 0,
          minWidth: 0,
          paddingTop: '4px',
          backgroundColor: 'red',
        }}
      />
      <HeaderAvatarDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        loggenInUser={logedInUser}
      />
    </div>
  );
};

export default CustomizeAvatar;
