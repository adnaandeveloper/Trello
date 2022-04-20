import React, { ReactElement, useContext, useState } from 'react';
import {
  Button,
  Grid,
  TextField,
  TextareaAutosize,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Members from './Members';
import NotesIcon from '@mui/icons-material/Notes';
import Avatar from '@mui/material/Avatar';
import AddIcon from '@mui/icons-material/Add';
import OnOutsiceClick from 'react-outclick';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from 'context/api-context';
type Props = {
  tasktName: string;
  listName: string;
  icon: ReactElement<any, any>;
  onClose: () => void;
};

const HeaderForDiaglog = ({ tasktName, listName, icon, onClose }: Props) => {
  const [toggletextField, setToggletextFeild] = useState(false);
  const {
    taskDiaglogOpen,
    setTaskListNameAndTasleTitleName,
    taskeTitleName,
    taskListName,
  } = useContext(AuthContext);
  const [taskTitle, setTasktitle] = useState(taskeTitleName);
  const [tskListName, setListName] = useState(taskListName);

  const navigate = useNavigate();
  const [textarea, setTextarea] = useState(false);
  const handleTexfField = () => {
    console.log('hello');
    if (toggletextField) {
      setToggletextFeild(false);
    }
  };

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
                <Grid item onClick={() => setToggletextFeild(true)}>
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
        <Grid item> In list {' ' + taskListName}</Grid>
      </Grid>
    </>
  );
};

export default HeaderForDiaglog;
