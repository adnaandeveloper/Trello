import React, { ReactElement, useState } from 'react';
import { Button, Grid, TextField, TextareaAutosize } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Members from './Members';
import NotesIcon from '@mui/icons-material/Notes';
import Avatar from '@mui/material/Avatar';
import AddIcon from '@mui/icons-material/Add';
import OnOutsiceClick from 'react-outclick';
import ClickAwayListener from '@mui/material/ClickAwayListener';
const Description = () => {
  const [toggletextField, setToggletextFeild] = useState(false);
  const [textarea, setTextarea] = useState(false);
  return (
    <ClickAwayListener onClickAway={() => setTextarea(false)}>
      <Grid container mt={5} direction='column' ml={3}>
        <Grid item>
          <Grid item container spacing={2}>
            <Grid item>
              <NotesIcon />
            </Grid>
            <Grid item>Description</Grid>
            {!textarea && (
              <Grid item>
                <Button
                  onClick={() => setTextarea(true)}
                  sx={{
                    color: 'black',
                    width: '56px',
                    height: '32px',
                    backgroundColor: '#ebecef',
                    '&:hover': { backgroundColor: '#e1e4e9' },
                  }}
                >
                  Edit
                </Button>
              </Grid>
            )}
          </Grid>
        </Grid>

        <Grid item ml={5}>
          <Grid item container>
            {textarea ? (
              <Grid item mt={1}>
                <Grid item container direction='column'>
                  <Grid item>
                    <TextareaAutosize minRows={4} style={{ width: 680 }} />
                  </Grid>
                  <Grid item>
                    <Grid item container justifyContent='flex-end' spacing={2}>
                      <Grid item>
                        <Button variant='contained'>Save</Button>
                      </Grid>
                      <Grid item>
                        <AddIcon fontSize='large' />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            ) : (
              <Grid item mt={1} onClick={() => setTextarea(true)}>
                Please Read:
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </ClickAwayListener>
  );
};

export default Description;
