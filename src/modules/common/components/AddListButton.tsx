import { Button } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';

const AddListButton = () => {
  return (
    <Button
      className='col p-1 col-lg-2 h-100'
      variant='outlined'
      startIcon={<AddIcon />}
      sx={{ width: '272px', height: '40px', color: '#ebecf0' }}
    >
      Add another List
    </Button>
  );
};

export default AddListButton;
