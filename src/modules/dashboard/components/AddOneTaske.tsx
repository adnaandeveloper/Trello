import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

type Props = {
  addQuote: (author?: string) => void;
  listId?: string;
  togleShowTextField: () => void;
  sendTheTitle: () => void;
};

const AddOneTaske = (props: Props) => {
  return (
    <Button
      onClick={() => props.togleShowTextField()}
      startIcon={<AddIcon sx={{ color: '#5e6d84' }} />}
      sx={{
        justifyContent: 'flex-start',
        width: '223px',
        height: '28px',
        color: '#5e6d84',
        marginBottom: '13px',
        textTransform: 'none',
        backgroundColor: '#ebecf0',
        '&:hover': {
          backgroundColor: '#dadbe2',
        },
      }}
    >
      Add a card
    </Button>
  );
};

export default AddOneTaske;
