import * as React from 'react';

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode';
import HeaderForDiaglog from './HeaderForDiaglog';
import Members from './Members';
import Description from './Description';

export type Props = {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
  taskTitle: string;
  listName: string;
};

export const TeskDialog = (props: Props) => {
  const { onClose, selectedValue, open, taskTitle, listName } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      maxWidth='md'
      fullWidth
      PaperProps={{
        sx: { height: '100%', mt: 10, backgroundColor: '#f4f5f7' },
      }}
    >
      <DialogTitle>
        <HeaderForDiaglog
          tasktName={taskTitle}
          listName={listName}
          handleClose={handleClose}
          icon={<ChromeReaderModeIcon />}
        />
      </DialogTitle>
      <Members />
      <Description />
    </Dialog>
  );
};
