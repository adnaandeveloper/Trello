import {
  Grid,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from '@mui/material/';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';

import BackupTableIcon from '@mui/icons-material/BackupTable';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AddIcon from '@mui/icons-material/Add';

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
}));

const menuBoardsMenu = [
  {
    icon: <AssessmentIcon />,
    text: 'Boards',
    color: '#0079BF',
    fontSize: '14px',
    fontWeight: 'bold',
  },

  {
    icon: <BackupTableIcon />,
    text: 'Templates',
    color: '#172B4D',
    fontSize: '14px',
    fontWeight: 'bold',
  },
  {
    icon: <TrendingDownIcon />,
    text: 'Home',
    color: '#172B4D',
    fontSize: '14px',
    fontWeight: 'bold',
  },
  {
    icon: '',
    text: 'Workspaces',
    color: '#172B4D',
    fontSize: '12px',
    fontWeight: 'bold',
  },

  {
    icon: <AddIcon />,
    text: 'Create a Workspace',
    color: '#091E42A8',
    fontSize: '14px',
    fontWeight: 'bold',
  },
];

const BoardsRightMenu = () => {
  const classes = useStyles();
  return (
    <Grid
      item
      container
      direction='column'
      alignItems='flex-start'
      className={classes.leftBox}
      position='fixed'
    >
      {menuBoardsMenu.map((menuItem) => (
        <Grid
          item
          className={classes.leftBoxItem}
          sx={{
            '&:nth-child(1)': {
              backgroundColor: '#E4F0F6',
            },
          }}
        >
          <ListItemButton>
            <ListItemIcon>{menuItem.icon}</ListItemIcon>
            <ListItemText
              primaryTypographyProps={{
                fontSize: menuItem.fontSize,
                color: menuItem.color,
              }}
              primary={menuItem.text}
            />
          </ListItemButton>
        </Grid>
      ))}
    </Grid>
  );
};

export default BoardsRightMenu;
