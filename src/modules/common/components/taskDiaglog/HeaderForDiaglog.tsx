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
  const navigate = useNavigate();
  const [textarea, setTextarea] = useState(false);
  const handleTexfField = () => {
    console.log('hello');
    if (toggletextField) {
      setToggletextFeild(false);
    }
  };
  return (
    <OnOutsiceClick onOutsideClick={() => setToggletextFeild(false)}>
      <ClickAwayListener onClickAway={() => setToggletextFeild(false)}>
        <Grid container justifyContent='space-between'>
          <Grid item>
            <Grid item container spacing={2}>
              <Grid item> {icon}</Grid>

              {toggletextField ? (
                <Grid item>
                  <TextField
                    onChange={(e) => console.log(e.target.value)}
                    label
                    fullWidth
                    size='small'
                    value={taskeTitleName}
                    sx={{ width: '680px', height: '29px' }}
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

      <Grid container justifyContent='flex-start' ml={5} mt={1}>
        <Grid item> In list {' ' + taskListName}</Grid>
      </Grid>
    </OnOutsiceClick>
  );
};

export default HeaderForDiaglog;
