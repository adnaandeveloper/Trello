import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

type Props = {
  onClickHandler: () => void;
};
const AddListButton = (props: Props) => {
  return (
    <Button
      onClick={() => props.onClickHandler()}
      startIcon={<AddIcon sx={{ color: 'white' }} />}
      sx={{
        justifyContent: 'flex-start',
        width: '272px',
        height: 40,
        color: 'white',
        marginTop: '5.5rem',
        textTransform: 'none',
        backgroundColor: '#ddab69',
      }}
    >
      Add another List
    </Button>
  );
};

export default AddListButton;
