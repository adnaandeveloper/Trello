import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import React, { useContext, useState } from 'react';
import { Box, Grid, TextField, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { createBoar } from 'context/api-helper';
import { AuthContext } from 'context/api-context';
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
  const { userId } = useContext(AuthContext);

  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const createdBoardsData = await createBoar(name, description, userId).catch(
      (error) => {
        console.log(error.message);
      }
    );
    if (createdBoardsData) {
      console.log(' is the board created? i dont know see ');
      console.log({ createdBoardsData });
    }

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
          <Grid item>Create board </Grid>
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
      <Divider variant='middle' />
      <Box
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
        component='form'
        noValidate
        autoComplete='off'
        m={1}
      >
        <Grid container direction='column'>
          <Grid item>
            <Grid container direction='column'>
              <Grid item mt={2} mb={2}>
                <TextField
                  label='Title'
                  fullWidth
                  id='name'
                  value={name}
                  onChange={handleChangeTitle}
                  size='small'
                />
              </Grid>
              <Grid item mt={2}>
                <TextField
                  fullWidth
                  onChange={handleChangeDescription}
                  name={description}
                  id='description'
                  maxRows={6}
                  rows={4}
                  multiline
                  label='Description'
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item mb={2} mt={2}>
            <Grid
              container
              direction='row'
              spacing={1}
              justifyContent='space-between'
              mr={1}
            >
              <Grid item>
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
                  variant='contained'
                  sx={{ color: 'white' }}
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
