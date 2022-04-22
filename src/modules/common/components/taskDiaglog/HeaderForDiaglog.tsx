import React, { ReactElement, useContext, useState } from 'react';
import { Grid, TextField, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from 'context/api-context';
import Link from '@mui/material/Link';
type Props = {
  tasktName: string;
  listName: string;
  icon: ReactElement<any, any>;
  onClose: () => void;
};

const HeaderForDiaglog = ({ tasktName, listName, icon, onClose }: Props) => {
  const [toggletextField, setToggletextFeild] = useState(false);
  const { taskeTitleName, taskListName } = useContext(AuthContext);
  const [taskTitle, setTasktitle] = useState(taskeTitleName);
  const navigate = useNavigate();
  const handleChange = (taskTitle: string) => {
    setTasktitle(taskTitle);
  };
  return (
    <>
      <ClickAwayListener onClickAway={() => setToggletextFeild(false)}>
        <Grid container justifyContent='space-between'>
          <Grid item>
            <Grid item container spacing={1}>
              <Grid item> {icon}</Grid>

              {toggletextField ? (
                <Grid item>
                  <TextField
                    onChange={(e) => handleChange(e.target.value)}
                    label={false}
                    fullWidth
                    size='small'
                    value={taskTitle}
                    sx={{ width: '48rem', height: '29px' }}
                  ></TextField>
                </Grid>
              ) : (
                <Grid
                  item
                  sx={{
                    fontSize: '20px',
                    fontWeight: '600',
                    color: '172b4d',
                  }}
                  onClick={() => setToggletextFeild(true)}
                >
                  {taskeTitleName}
                </Grid>
              )}
            </Grid>
          </Grid>
          <Grid item>
            <IconButton>
              <CloseIcon
                onClick={() => {
                  onClose();
                  navigate('/board/:id');
                }}
                sx={{ color: 'black' }}
              />
            </IconButton>
          </Grid>
        </Grid>
      </ClickAwayListener>

      <Grid container justifyContent='flex-start' ml={5}>
        <Grid
          item
          sx={{
            color: '#5e6c84',
            fontSize: '14px',
            fontWeight: '500',
          }}
        >
          In list{' '}
          <Link href='#' color='inherit'>
            {' ' + taskListName}
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default HeaderForDiaglog;
