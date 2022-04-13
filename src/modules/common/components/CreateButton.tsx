import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import React, { useState } from 'react';
import { Box, Grid, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
const emails = ['username@gmail.com', 'user02@gmail.com'];
export interface Props {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
  loggenInUser: string | null;
}

function HeaderCreateDialog(props: Props) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(name);
    console.log(description);
    setDescription('');
    setName('');
  };
  const handleChangeTitle = (event: any) => {
    setName(event.target.value);
  };
  const handleChangeDescription = (event: any) => {
    setDescription(event.target.value);
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
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
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
                  id='name'
                  value={name}
                  onChange={handleChangeTitle}
                  size='small'
                  sx={{
                    '& .MuiOutlinedInput-notchedOutline legend': {
                      display: 'none',
                    },
                  }}
                />
              </Grid>
              <Grid item>description</Grid>
              <Grid item mb={5}>
                <TextField
                  onChange={handleChangeDescription}
                  name={description}
                  id='description'
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
                  cencel
                </Button>
              </Grid>
              <Grid item>
                <Button
                  onClick={handleClose}
                  type='submit'
                  variant='outlined'
                  sx={{ color: 'black' }}
                >
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
