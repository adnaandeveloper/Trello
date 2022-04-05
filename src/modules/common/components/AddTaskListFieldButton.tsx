import { Button } from '@mui/material';
import React from 'react';

type Props = {
  onClickHandler: () => void;
  AddNewAotuhersToTheAuthors: () => void;
};
const AddTaskListFieldButton = (props: Props) => {
  return (
    <Button
      onClick={() => props.AddNewAotuhersToTheAuthors()}
      sx={{
        m: 1,
        height: '32px',
        backgroundColor: '#0079bf',
        textTransform: 'none',
        '&:hover': { backgroundColor: '#026aa7' },
      }}
    >
      Add list
    </Button>
  );
};

export default AddTaskListFieldButton;
