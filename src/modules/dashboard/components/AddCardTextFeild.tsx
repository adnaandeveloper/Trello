import { Grid, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import AddCardButton from './AddCardButton';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { useEffect, useRef } from 'react';

type Props = {
  togleShowTextField: () => void;
  addQuote: (author?: string) => void;
  listId?: string;
  sendTheTitle: () => void;
  addQuoteName: (name: string) => void;
};
const AddCardTextFeild = (props: Props) => {
  const el = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    el.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const OnkeyPressHandler = (e: React.KeyboardEvent<HTMLImageElement>) => {
    if (e.key === 'Enter') {
      props.sendTheTitle();
      props.togleShowTextField();
    }
  };
  useEffect(() => {
    scrollToBottom();
    console.log(' helloooo brother ! ');
  });
  return (
    <ClickAwayListener onClickAway={() => props.togleShowTextField()}>
      <Grid ref={el} container sx={{}}>
        <Grid
          item
          sx={{
            backgroundColor: '#ebecf0',
            padding: '1px',
            height: '114px',
            marginLeft: '-8px',
            width: '250px',
          }}
        >
          <TextField
            onKeyPress={OnkeyPressHandler}
            id='outlined-basic'
            variant='outlined'
            fullWidth
            multiline
            onChange={(e) => props.addQuoteName(e.target.value)}
            placeholder='Enter a title for this card...'
            sx={{
              m: 1,

              width: '225px',
              justifyContent: 'flex-start',
              color: 'white',
              textTransform: 'none',
              backgroundColor: 'white',
              padding: '0',
              height: '58px',
              '& .MuiOutlinedInput-notchedOutline legend': {
                display: 'none',
              },
              '& .MuiInputBase-root': { marginTop: '3px' },
            }}
          ></TextField>
          <Grid container direction='row' spacing={1}>
            <Grid item sx={{ marginLeft: '17px' }}>
              {' '}
              <AddCardButton
                togleShowTextField={props.togleShowTextField}
                addQuote={props.addQuote}
                listId={props.listId}
                sendTheTitle={props.sendTheTitle}
              />
            </Grid>
            <Grid item>
              <CloseIcon
                onClick={() => props.togleShowTextField()}
                sx={{
                  fontSize: '25px',
                  marginTop: '4px',
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

export default AddCardTextFeild;
