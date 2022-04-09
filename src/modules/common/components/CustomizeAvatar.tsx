import React, { useContext, useEffect, useState } from 'react';
import { Avatar } from '@mui/material';
import { AuthContext } from 'context/api-context';
import { SocialDistanceOutlined } from '@mui/icons-material';
const CustomizeAvatar = () => {
  const [logedInUser, setLogedInUser] = useState<string | null>('');

  const { userName, loggedIn } = useContext(AuthContext);
  function stringToColor(value: string | null) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    if (value)
      for (i = 0; i < value.length; i += 1) {
        hash = value.charCodeAt(i) + ((hash << 5) - hash);
      }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  console.log(' the user is my dear ' + logedInUser);

  function stringAvatar(name: string | null) {
    if (name)
      return {
        sx: {
          bgcolor: stringToColor(name),
        },

        children: `${name!.split(' ')[0][0]}`,
      };
  }
  useEffect(() => {
    console.log('whaaaat is her brother ');
    setLogedInUser(localStorage.getItem('userName'));
    console.log(logedInUser);
  }, [logedInUser]);

  return (
    <Avatar
      {...stringAvatar(logedInUser)}
      sx={{
        width: '30px',
        height: '30px',
        display: 'inline-block',
        padding: 0,
        minHeight: 0,
        minWidth: 0,
        paddingTop: '4px',
        backgroundColor: 'red',
      }}
    />
  );
};

export default CustomizeAvatar;
