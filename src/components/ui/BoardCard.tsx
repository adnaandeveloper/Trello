import React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const BoardCard = () => {
  return (
    <div>
      <Card
        sx={{
          width: '194px ',
          height: '96px',
          backgroundColor: 'hsla(312,48%,42%,1);',
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
            }}
          >
            Template
          </Button>
          <Typography sx={{ colro: '#FAFBFC', fontSize: '16px' }}>
            Project management
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default BoardCard;
