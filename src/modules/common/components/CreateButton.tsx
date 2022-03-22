import { Button } from '@mui/material';
import React from 'react';

const CreateButton = () => {
  return (
    <div>
      <Button
        sx={{
          backgroundColor: '#054a74',
          paddin: '0 12px',
          width: '70px',
          textTransform: 'none',
          fontSize: '14px',
          '&:hover': {
            backgroundColor: '#4688b9',
          },
          height: '32px',
        }}
      >
        Create
      </Button>
    </div>
  );
};

export default CreateButton;
