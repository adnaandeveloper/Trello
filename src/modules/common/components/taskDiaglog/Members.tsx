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
      <Grid item ml={1}>
        Members
      </Grid>
      <Grid item container spacing={1}>
        {[1, 2, 3].map((avatar) => (
          <Grid item>
            <Avatar />
          </Grid>
        ))}
        <Grid item>
          <IconButton>
            <AddIcon sx={{ color: 'black' }} />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Members;
