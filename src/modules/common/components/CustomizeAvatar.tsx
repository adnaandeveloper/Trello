import React from 'react';
import { Avatar } from '@mui/material';
const CustomizeAvatar = () => {
  return (
    <Avatar
      sx={{
        width: '30px',
        height: '30px',
        display: 'inline-block',
        padding: 0,
        minHeight: 0,
        minWidth: 0,
      }}
    />
  );
};

export default CustomizeAvatar;
