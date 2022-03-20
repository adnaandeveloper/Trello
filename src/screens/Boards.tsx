import React from 'react';
import Header from '../components/ui/Header';
import {
  Container,
  Grid,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Typography,
  Link,
  Button,
  Hidden,
  useMediaQuery,
  useTheme,
} from '@mui/material/';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';

import AddIcon from '@mui/icons-material/Add';
import AssessmentIcon from '@mui/icons-material/Assessment';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import BoardCard from '../components/ui/BoardCard';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

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

const Boards = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      <Header />
      <Container>
        <Grid
          container
          sx={{ justifyContent: matchesSM ? 'center' : 'undfined' }}
        >
          <Hidden mdDown>
            <Grid item xs={2} md={2}>
              <Grid
                item
                container
                direction='column'
                alignItems='flex-start'
                className={classes.leftBox}
                position='fixed'
              >
                <Grid
                  item
                  className={classes.leftBoxItem}
                  style={{ backgroundColor: '#E4F0F6' }}
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <AssessmentIcon />
                    </ListItemIcon>

                    <ListItemText
                      primaryTypographyProps={{
                        fontSize: '14px',
                        color: '#0079BF',
                        fontWeight: 'bold',
                      }}
                      primary='Boards'
                    />
                  </ListItemButton>
                </Grid>
                <Grid item className={classes.leftBoxItem}>
                  <ListItemButton>
                    <ListItemIcon>
                      <BackupTableIcon />
                    </ListItemIcon>
                    <ListItemText
                      primaryTypographyProps={{
                        fontSize: '14px',
                        color: '#172B4D',
                        fontWeight: 'bold',
                      }}
                      primary='Templates'
                    />
                  </ListItemButton>
                </Grid>
                <Grid item className={classes.leftBoxItem}>
                  <ListItemButton>
                    <ListItemIcon>
                      <TrendingDownIcon />
                    </ListItemIcon>
                    <ListItemText
                      primaryTypographyProps={{
                        fontSize: '14px',
                        color: '#172B4D',
                        fontWeight: 'bold',
                      }}
                      primary='Home'
                    />
                  </ListItemButton>
                </Grid>
                <Grid
                  item
                  className={classes.leftBoxItem}
                  sx={{ marginLeft: '24px' }}
                >
                  <ListItemButton disabled>
                    <ListItemText
                      primaryTypographyProps={{
                        fontSize: '12px',
                        color: '#172B4D',
                        fontWeight: 'bold',
                      }}
                      primary='Workspaces'
                    />
                  </ListItemButton>
                </Grid>

                <Grid item className={classes.leftBoxItem}>
                  <ListItemButton>
                    <ListItemIcon>
                      <AddIcon />
                    </ListItemIcon>
                    <ListItemText
                      primaryTypographyProps={{
                        fontSize: '14px',
                        color: '#091E42A8',
                      }}
                      primary='Create a Workspace'
                    />
                  </ListItemButton>
                </Grid>
              </Grid>
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
                  Most popular templates
                </Typography>
              </Grid>
              <Grid item xs={1} md={1}>
                <Grid item container className={classes.boardrightClose}>
                  <Grid item>
                    <Button
                      sx={{
                        backgroundColor: '#f4f5f7',
                      }}
                    >
                      <AddIcon />
                    </Button>
                  </Grid>
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
              Get going faster with a template from the Trello community or
            </Grid>

            <Grid item xs={12} md={12}>
              <Grid
                item
                container
                direction='row'
                spacing={1}
                sx={{ marginBottom: '10px' }}
              >
                <Grid item>
                  <Button>
                    <BoardCard />
                  </Button>
                </Grid>
                <Grid item>
                  <Button>
                    <BoardCard />
                  </Button>
                </Grid>
                <Grid item>
                  <Button>
                    <BoardCard />
                  </Button>
                </Grid>

                <Grid item>
                  <Button>
                    <BoardCard />
                  </Button>
                </Grid>
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
                  <BoardCard />
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
                <Button>
                  <BoardCard />
                </Button>
                <Button>
                  <BoardCard />
                </Button>
              </Grid>

              <Grid item sx={{ marginLeft: '10px' }}>
                <Typography
                  sx={{
                    color: '#5e6c84',
                    fonstSize: '16px',
                    fontWeigth: '700',
                    marginBottom: '30px',
                  }}
                >
                  YOUR WORKSPACES
                </Typography>
              </Grid>
              <Grid item sx={{ marginLeft: '10px' }}>
                <Typography
                  sx={{
                    color: '#5e6c84',
                    fonstSize: '14px',
                    fontWeigth: '400',
                    marginBottom: '30px',
                  }}
                >
                  {' '}
                  You aren't a member of any workspaces yet.{' '}
                  <Link href='#'> Create a workspace </Link>
                </Typography>
              </Grid>
              <Grid item sx={{ marginLeft: '10px' }}>
                <Button>View all closed boards</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Boards;
