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
import { Avatar, Box, Grid, TextField } from '@mui/material';
import { AuthContext } from 'context/api-context';
import { SocialDistanceOutlined } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import { useNavigate } from 'react-router-dom';

const emails = ['username@gmail.com', 'user02@gmail.com'];

const dialogList = [
  {
    content: (
      <ListItemButton>
        <ListItem>
          <ListItemText primary='Add another account' />
        </ListItem>
      </ListItemButton>
    ),
  },
  {
    content: <Divider variant='middle' />,
  },
  {
    content: (
      <ListItemButton>
        <ListItem>
          <ListItemText primary='Profile and visibility' />
        </ListItem>
      </ListItemButton>
    ),
  },
  {
    content: (
      <ListItemButton>
        <ListItem>
          <ListItemText primary='Activity' />
        </ListItem>
      </ListItemButton>
    ),
  },
  {
    content: (
      <ListItemButton>
        <ListItem>
          <ListItemText primary='Cards' />
        </ListItem>
      </ListItemButton>
    ),
  },
  {
    content: (
      <ListItemButton>
        <ListItem>
          <ListItemText primary='Settings' />
        </ListItem>
      </ListItemButton>
    ),
  },
  {
    content: <Divider variant='middle' />,
  },
  {
    content: (
      <ListItemButton>
        <ListItem>
          <ListItemText primary='Helps' />
        </ListItem>
      </ListItemButton>
    ),
  },
  {
    content: (
      <ListItemButton>
        <ListItem>
          <ListItemText primary='Shortcuts' />
        </ListItem>
      </ListItemButton>
    ),
  },
  {
    content: <Divider variant='middle' />,
  },
  {
    content: (
      <ListItemButton>
        <ListItem>
          <ListItemText primary='log out' />
        </ListItem>
      </ListItemButton>
    ),
  },
];

export interface Props {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
  loggenInUser: string | null;
}

function HeaderCreateDialog(props: Props) {
  const [name, setName] = React.useState('');

  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      sx={{
        display: 'gird',
        '& .MuiPaper-root': {
          marginTop: 'initial',
          margin: 'auto',
          width: '533px',
          overflowX: 'hidden',
        },
        '& .MuiDialog-container': {
          alignItems: 'flex-start',
          marginTop: '51px',
        },
      }}
    >
      <DialogTitle>
        <Grid container justifyContent='space-between'>
          <Grid item>Crearte board </Grid>
          <Grid item>
            <CloseIcon
              onClick={handleClose}
              sx={{
                color: '#5E6C84',
                fontSize: '14px',
                fontWeight: '400',
                '&:hover': {
                  cursor: 'pointer',
                  color: 'black',
                },
              }}
            />
          </Grid>
        </Grid>
      </DialogTitle>
      <Box
        component='form'
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete='off'
      >
        <Grid
          container
          direction='column'
          justifyContent='space-between'
          alignItems='center'
        >
          <Grid item>
            <Grid container direction='column'>
              <Grid item>Title</Grid>
              <Grid item>
                <TextField
                  id='outlined-name'
                  value={name}
                  onChange={handleChange}
                  size='small'
                  sx={{
                    '& .MuiOutlinedInput-notchedOutline legend': {
                      display: 'none',
                    },
                  }}
                />
              </Grid>
              <Grid item>descriobtion</Grid>
              <Grid item mb={5}>
                <TextField
                  id='outlined-uncontrolled'
                  multiline
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      height: '150px',
                    },

                    '& .MuiOutlinedInput-notchedOutline legend': {
                      display: 'none',
                    },
                    '& .MuiFormControl-root': {
                      width: '311px',
                    },
                  }}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item mb={2}>
            <Grid container direction='row' spacing={1}>
              <Grid item ml={20}>
                <Button
                  onClick={handleClose}
                  variant='outlined'
                  sx={{ color: 'black' }}
                >
                  Center
                </Button>
              </Grid>
              <Grid item>
                <Button variant='outlined' sx={{ color: 'black' }}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Dialog>
  );
}

const CreateButton = () => {
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

  return (
    <div>
      <Button
        onClick={handleClickOpen}
        sx={{
          paddin: '0 12px',
          height: '32px',
          textTransform: 'none',

          '&:hover': {},
        }}
      >
        Create
      </Button>
      <HeaderCreateDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        loggenInUser={logedInUser}
      />
    </div>
  );
};

export default CreateButton;
