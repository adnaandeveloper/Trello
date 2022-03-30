import { Button } from '@mui/material';
import React from 'react';
import { useMediaQuery, useTheme } from '@mui/material/';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';

const CreateButton = () => {
  const theme = useTheme();
  return (
    <div>
      <Button
        sx={{
          backgroundColor: theme.palette.secondary.main,
          paddin: '0 12px',
          width: '70px',
          textTransform: 'none',
          fontSize: '14px',
          '&:hover': {
            backgroundColor: theme.palette.secondary.light,
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
