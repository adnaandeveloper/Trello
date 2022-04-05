import { Grid, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import AddCardButton from './AddCardButton';

type Props = {
  togleShowTextField: () => void;
  addQuote: (author?: string) => void;
  listId?: string;
  sendTheTitle: () => void;
  addQuoteName: (name: string) => void;
};
const AddCardTextFeild = (props: Props) => {
  return (
    <Grid container sx={{}}>
      <Grid
        item
        sx={{
          backgroundColor: '#ebecf0',
          padding: '1px',
          height: '65px',
          marginLeft: '-16px',
        }}
      >
        <TextField
          fullWidth
          multiline
          onChange={(e) => props.addQuoteName(e.target.value)}
          placeholder='Enter a title for this card...'
          sx={{
            m: 1,
            width: '25ch',
            justifyContent: 'flex-start',
            color: 'white',
            textTransform: 'none',
            backgroundColor: 'white',
            padding: '0',
            height: '58px',
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
  );
};

export default AddCardTextFeild;
