import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import React, { useContext, useState } from 'react';
import { Box, Grid, TextField, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { createBoar } from 'context/api-helper';
import { AuthContext } from 'context/api-context';
import LoadingButton from '@mui/lab/LoadingButton';
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
  const [loading, setLoading] = React.useState(false);
  const { onClose, selectedValue, open } = props;
  const [disabledButton, setDisabledButton] = React.useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    if (name !== '' && description !== '') {
      const createdBoardsData = await createBoar(
        name,
        description,
        userId
      ).catch((error) => {});
      if (createdBoardsData) {
        setLoading(false);
        onClose(selectedValue);
      }

      setDescription('');
      setName('');
      setDisabledButton(false);
    }
  };
  const handleClose = () => {
    onClose(selectedValue);
    setDisabledButton(false);
    setName('');
    setDescription('');
  };

  const handleChangeTitle = (event: any) => {
    setName(event.target.value);
    if (description !== '') {
      setDisabledButton(true);
    }
  };

  const handleChangeDescription = (event: any) => {
    setDescription(event.target.value);
    if (name !== '') {
      setDisabledButton(true);
    }
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
                  cancel
                </Button>
              </Grid>
              <Grid item>
                <LoadingButton
                  disabled={!disabledButton}
                  loading={loading}
                  type='submit'
                  variant='contained'
                  sx={{ color: 'white' }}
                >
                  Submit
                </LoadingButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Dialog>
  );
}

const CreateButton = () => {
  const [logedInUser] = useState<string | null>('');

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
