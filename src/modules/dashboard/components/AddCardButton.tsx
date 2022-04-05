import { Button } from '@mui/material';
import React from 'react';
type Props = {
  togleShowTextField: () => void;
  addQuote: (author?: string) => void;
  listId?: string;
  sendTheTitle: () => void;
};

const AddCardButton = (props: Props) => {
  const togleAndAddQuote = () => {
    props.sendTheTitle();
    props.togleShowTextField();
  };
  return (
    <Button
      onClick={togleAndAddQuote}
      sx={{
        width: '83px',
        color: 'white',
        height: '32px',
        backgroundColor: '#0079bf',
        textTransform: 'none',
      }}
    >
      {' '}
      Add card{' '}
    </Button>
  );
};

export default AddCardButton;
