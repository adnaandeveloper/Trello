import React from 'react';
import Avatar from '@mui/material/Avatar';
import { Grid, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const Members = () => {
  return (
    <Grid
      container
      justifyContent='flex-start'
      ml={7}
      direction='column'
      mt={5}
    >
      <Grid
        item
        ml={1}
        sx={{
          color: '#5e6c84',
          fontSize: '12px',
          fontWeight: '800',
        }}
      >
        Members
      </Grid>
      <Grid item container spacing={1}>
        {[1, 2, 3].map((avatar, index) => (
          <Grid item key={index}>
            <Avatar sx={{ width: '32px', height: '32px' }} />
          </Grid>
        ))}
        <Grid item>
          <IconButton
            sx={{ backgroundColor: '#091e420a', borderRadius: '100%' }}
          >
            <AddIcon sx={{ color: 'black', width: '16px', height: '16px' }} />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Members;
