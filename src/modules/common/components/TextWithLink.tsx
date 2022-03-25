import React from 'react';
import { Link } from '@mui/material/';
const TextWithLink = () => {
  return (
    <h5>
      You aren't a member of any workspaces yet.
      <Link href='#'> Create a workspace </Link>;
    </h5>
  );
};

export default TextWithLink;
