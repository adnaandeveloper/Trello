import React, { ReactElement, useState } from 'react';
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
type Props = {
  tasktName: string;
  listName: string;
  handleClose: () => void;
  icon: ReactElement<any, any>;
};

const HeaderForDiaglog = ({
  tasktName,
  listName,
  handleClose,
  icon,
}: Props) => {
  const [toggletextField, setToggletextFeild] = useState(false);
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
                    value={tasktName}
                    sx={{ width: '680px', height: '29px' }}
                  ></TextField>
                </Grid>
              ) : (
                <Grid item onClick={() => setToggletextFeild(true)}>
                  {tasktName}
                </Grid>
              )}
            </Grid>
          </Grid>
          <Grid item>
            <IconButton>
              <CloseIcon
                onClick={() => handleClose()}
                sx={{ color: 'black' }}
              />
            </IconButton>
          </Grid>
        </Grid>
      </ClickAwayListener>

      <Grid container justifyContent='flex-start' ml={5} mt={1}>
        <Grid item> In list {' ' + listName}</Grid>
      </Grid>
    </OnOutsiceClick>
  );
};

export default HeaderForDiaglog;
