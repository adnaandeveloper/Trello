import React, { ReactElement, useState } from 'react';
import { Button, Grid, TextareaAutosize, IconButton } from '@mui/material';

import NotesIcon from '@mui/icons-material/Notes';

import AddIcon from '@mui/icons-material/Add';

import ClickAwayListener from '@mui/material/ClickAwayListener';
const Description = () => {
  const [textarea, setTextarea] = useState(false);

  return (
    <ClickAwayListener onClickAway={() => setTextarea(false)}>
      <Grid container mt={5} direction='column' ml={3}>
        <Grid item>
          <Grid item container spacing={2}>
            <Grid item>
              <NotesIcon />
            </Grid>
            <Grid
              item
              sx={{
                color: '#172b4d',
                fontSize: ' 17px',
                fontWeight: '700',
              }}
            >
              Description
            </Grid>
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
                    <TextareaAutosize minRows={4} style={{ width: '50rem' }} />
                  </Grid>
                  <Grid item>
                    <Grid item container justifyContent='flex-end' spacing={3}>
                      <Grid item>
                        <Button
                          variant='contained'
                          onClick={() => setTextarea(false)}
                        >
                          Save
                        </Button>
                      </Grid>
                      <Grid item>
                        <IconButton>
                          <AddIcon
                            fontSize='small'
                            onClick={() => setTextarea(false)}
                            sx={{ color: 'black' }}
                          />
                        </IconButton>
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
