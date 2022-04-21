import { Grid, TextField } from '@mui/material';
import AddTaskListFieldButton from './AddTaskListFieldButton';
import CloseIcon from '@mui/icons-material/Close';
import * as React from 'react';
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';

type Props = {
  onClickHandler: () => void;
  onChangHanlerAddAuthor: (name: string) => void;
  AddNewAotuhersToTheAuthors: () => void;
  authorName?: string;
};
const AddTaskListField = (props: Props) => {
  return (
    <ClickAwayListener onClickAway={() => props.onClickHandler()}>
      <Grid container sx={{ marginTop: '5.5rem', height: 60 }}>
        <Grid
          item
          sx={{ backgroundColor: '#ebecf0', padding: '1px', marginTop: '5' }}
        >
          <TextField
            value={props.authorName}
            onChange={(e) => props.onChangHanlerAddAuthor(e.target.value)}
            size='small'
            variant='outlined'
            placeholder='Enter list Litle...'
            sx={{
              width: '276px',
              justifyContent: 'flex-start',
              color: 'white',
              textTransform: 'none',
              backgroundColor: 'white',
              padding: '0',
              '& .MuiOutlinedInput-notchedOutline legend': { display: 'none' },
              '& .MuiInputBase-root': { marginTop: '3px' },
              m: 1,
            }}
          ></TextField>
          <Grid container direction='row' spacing={1}>
            <Grid item>
              <AddTaskListFieldButton
                onClickHandler={props.onClickHandler}
                AddNewAotuhersToTheAuthors={props.AddNewAotuhersToTheAuthors}
              />
            </Grid>
            <Grid item>
              <CloseIcon
                onClick={() => props.onClickHandler()}
                sx={{
                  fontSize: '25px',
                  marginTop: '10px',
                  color: '#42526e',
                  '&:hover': {
                    color: '#172b4d',
                    cursor: 'pointer',
                  },
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ClickAwayListener>
  );
};

export default AddTaskListField;
