import { DialogTitle } from '@mui/material';
import React from 'react';
import HeaderForDiaglog from './HeaderForDiaglog';
import Members from './Members';
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode';
import Description from './Description';

export type Props = {
  onClose: () => void;
};

const DialogWrapper = ({ onClose }: Props) => {
  return (
    <div>
      <DialogTitle>
        <HeaderForDiaglog
          tasktName='test'
          listName='test'
          icon={<ChromeReaderModeIcon />}
          onClose={onClose}
        />
      </DialogTitle>
      <Members />
      <Description />
    </div>
  );
};

export default DialogWrapper;
