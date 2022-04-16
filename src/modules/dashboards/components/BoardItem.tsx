import { Button, Grid } from '@mui/material';
import BoardCard from 'components/ui/BoardCard';
import { AuthContext } from 'context/api-context';
import { getBoards } from 'context/api-helper';
import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import CircularProgress from '@mui/material/CircularProgress';

const BoardItem = () => {
  const { userId } = useContext(AuthContext);
  const { data, error, isError, isLoading } = useQuery('data', getBoards);

  if (isLoading) {
    <CircularProgress />;
  }
  if (isError) {
    return <div>Error! {error}</div>;
  }
  const myBoards =
    data?.filter((item: { owners: string }) => item.owners.includes(userId)) ||
    [];

  return (
    <Grid
      item
      container
      direction='row'
      spacing={1}
      sx={{ marginBottom: '10px' }}
    >
      {isLoading && <CircularProgress />}

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
