import { Button, Grid } from '@mui/material';
import BoardCard from 'components/ui/BoardCard';
import { AuthContext } from 'context/api-context';
import { getBoards } from 'context/api-helper';
import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import CircularProgress from '@mui/material/CircularProgress';

import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

function Variants() {
  return (
    <Stack spacing={1} direction='row'>
      {[1, 2, 3, 4].map((skel, index) => (
        <Skeleton key={index} variant='rectangular' width={210} height={118} />
      ))}
    </Stack>
  );
}

type Props = {
  error: unknown;
  isError: boolean;
  isLoading: boolean;
  myBoards: never[];
};
const BoardItem = ({ error, isError, isLoading, myBoards }: Props) => {
  if (isLoading) {
    <CircularProgress />;
  }
  if (isError) {
    return <div>Error! {error}</div>;
  }

  return (
    <Grid
      item
      container
      direction='row'
      spacing={1}
      sx={{ marginBottom: '10px' }}
    >
      {isLoading && <Variants />}

      {myBoards.map((item: any, index: number) => (
        <Grid item key={index}>
          <Button>
            <BoardCard title={item.title} description={item.description} />
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default BoardItem;
