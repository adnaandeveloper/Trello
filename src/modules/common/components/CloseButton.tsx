import { Grid, IconButton } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
const CloseButton = () => {
  return (
    <Grid item>
      <IconButton
        sx={{
          backgroundColor: '#f4f5f7',
          color: 'black',
          width: '32px',
          height: '32px',
          '&:hover': {
            backgroundColor: '#dee1e5',
          },
        }}
      >
        <AddIcon sx={{ width: '20px', height: '20px' }} />
      </IconButton>
    </Grid>
  );
};

export default CloseButton;
