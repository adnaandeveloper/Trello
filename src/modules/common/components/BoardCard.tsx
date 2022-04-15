import React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material/';

interface Props {
  title: string;
  description: string;
}

const BoardCard: React.FC<Props> = ({ title, description }) => {
  return (
    <div>
      <Card
        sx={{
          width: '12rem ',
          height: '96px',
          backgroundColor: 'green',
        }}
      >
        <CardContent>
          <Button
            variant='outlined'
            sx={{
              width: '75px',
              color: '#172B4D',
              backgroundColor: 'FFFFB0',
              fontSize: '11px',
              height: '22px',
              fontWeight: 'bold',
              alignContent: 'center',
              marginTop: '-8px',
              marginLeft: '-8px',
              textTransform: 'none',
            }}
          >
            {title}
          </Button>

          <Typography
            sx={{
              colro: '#FAFBFC',
              fontSize: '16px',
              fontWeight: 'bold',
              color: 'white',
              marginLeft: '-21px',
              textTransform: 'none',
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default BoardCard;
