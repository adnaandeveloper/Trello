import React from 'react';
import Header from './../../common/components/Header';
import {
  Container,
  Grid,
  Typography,
  Link,
  Button,
  Hidden,
  useMediaQuery,
  useTheme,
} from '@mui/material/';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';
import AssessmentIcon from '@mui/icons-material/Assessment';
import BoardCard from 'modules/common/components/BoardCard';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BoardsRightMenu from './BoardsRightMenu';
import CloseButton from 'modules/common/components/CloseButton';

const useStyles = makeStyles((theme: Theme) => ({
  leftBox: {
    marginTop: '100px !important',
    marginLeft: '-39px !important',
  },
  leftBoxItem: {
    width: '230px',
    height: '35px',
    verticalAlign: 'middle',
    display: 'inline-flex',
  },
  boardsCenterText: {
    marginTop: '100px !important',
  },
  boardsCenterTextHeader: {
    verticalAlign: 'middle',
    display: 'inline-flex',
    marginTop: '120px !important',
    marginBottom: '20px !important',
  },
  boardrightClose: {
    marginTop: '120px !important',
  },
}));

const textUnderPersonalBoards = [
  {
    marginLeft: '10px',
    color: '#5e6c84',
    fonstSize: '16px',
    fontWeigth: '700',
    marginBottom: '30px',
    text: 'YOUR WORKSPACES',
  },
  {
    marginLeft: '10px',
    color: '#5e6c84',
    fonstSize: '14px',
    fontWeigth: '400',
    marginBottom: '30px',
    text: 'anothe text is writen manually',
  },
];

const Boards = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const title = 'Most popular templates';
  const underTitleText =
    'Get going faster with a template from the Trello community or';

  return (
    <div>
      <Header
        main={theme.palette.primary.main}
        light={theme.palette.primary.light}
        dark={theme.palette.primary.dark}
      />
      <Container>
        <Grid
          container
          sx={{
            justifyContent: matchesSM ? 'center' : 'undfined',
          }}
        >
          <Hidden mdDown>
            <Grid item xs={2} md={2}>
              <BoardsRightMenu />
            </Grid>
          </Hidden>
          <Grid item xs={9} md={9} sx={{ marginLeft: '44px' }}>
            <Grid item container>
              <Grid
                item
                xs={11}
                md={11}
                className={classes.boardsCenterTextHeader}
              >
                <AssessmentIcon sx={{ marginRight: '10px' }} />
                <Typography
                  sx={{
                    color: '#172B4D',
                    fontSize: '20px',
                    fontWeight: 'bold',
                  }}
                >
                  {title}
                </Typography>
              </Grid>
              <Grid item xs={1} md={1}>
                <Grid item container className={classes.boardrightClose}>
                  <CloseButton />
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              sx={{
                marginBottom: '20px',
                color: '#5E6C84',
                fontSize: '14px',
                marginLeft: '10px',
              }}
            >
              {underTitleText}
            </Grid>

            <Grid item xs={12} md={12}>
              <Grid
                item
                container
                direction='row'
                spacing={1}
                sx={{ marginBottom: '10px' }}
              >
                {['red', 'blue', 'orange', 'black'].map((color, index) => (
                  <Grid item key={index}>
                    <Button>
                      <BoardCard color={color} />
                    </Button>
                  </Grid>
                ))}
              </Grid>
              <Grid item sx={{ marginBottom: '50px', marginLeft: '10px' }}>
                <Link href='#'>
                  <Typography sx={{ color: '#6B808C', fontSize: '14px' }}>
                    Browse the full template gallery
                  </Typography>
                </Link>
              </Grid>
              <Grid>
                <Grid item container spacing={2}>
                  <Grid item sx={{ marginLeft: '7px' }}>
                    <AccessTimeIcon />
                  </Grid>
                  <Grid item>
                    <Typography
                      sx={{
                        fontSize: '16px',
                        fontWeight: 'bold',
                      }}
                    >
                      {' '}
                      Recently viewed{' '}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item sx={{ marginBottom: '40px' }}>
                <Button>
                  <BoardCard color='red' />
                </Button>
              </Grid>

              <Grid>
                <Grid item container spacing={2}>
                  <Grid item sx={{ marginLeft: '7px' }}>
                    <AccessTimeIcon />
                  </Grid>
                  <Grid item>
                    <Typography
                      sx={{
                        fontSize: '16px',
                        fontWeight: 'bold',
                      }}
                    >
                      Personal boards
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item sx={{ marginBottom: '40px' }}>
                {['red', 'orange'].map((color) => (
                  <Button>
                    <BoardCard color={color} />
                  </Button>
                ))}
              </Grid>

              {textUnderPersonalBoards.map((title, index) => (
                <Grid item sx={{ marginLeft: title.marginLeft }} key={index}>
                  <Typography
                    sx={{
                      color: title.color,
                      fonstSize: title.fonstSize,
                      fontWeigth: title.fontWeigth,
                      marginBottom: title.marginBottom,
                    }}
                  >
                    {index === 1 ? (
                      <h5>
                        You aren't a member of any workspaces yet.
                        <Link href='#' style={{ color: 'inherit' }}>
                          {' '}
                          Create a workspace{' '}
                        </Link>
                      </h5>
                    ) : (
                      title.text
                    )}
                  </Typography>
                </Grid>
              ))}

              <Grid item sx={{ marginLeft: '10px' }}>
                <Button
                  sx={{
                    color: 'black',
                    textTransform: 'none',
                    backgroundColor: '#f1f2f4',
                    '&:hover': {
                      backgroundColor: '#e6e9ed',
                    },
                  }}
                >
                  View all closed boards
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Boards;
