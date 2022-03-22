import React, { useState } from 'react';
import {
  TextField,
  Grid,
  InputAdornment,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import CallMadeIcon from '@mui/icons-material/CallMade';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';

const useStyles = makeStyles((theme: Theme) => ({
  searchInput: {
    '& input:focus::placeholder': {
      color: 'black',
    },
    '& input::placeholder': {
      color: 'white',
    },

    height: '32px',

    '& .MuiInput-underline:after': {
      borderBottomColor: theme.palette.primary.main,
    },

    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.palette.primary.main,
      },

      '&:hover fieldset': {
        borderColor: theme.palette.primary.main,
      },
    },
  },
}));

const HeaderInput = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesTabletMM = useMediaQuery(theme.breakpoints.down(1017));
  const [focus, setFocus] = useState(false);
  const [mouseOver, setMouseOver] = useState(false);
  const focusHandler = () => {
    setFocus(true);
    setMouseOver(false);
  };
  const onMouseOverhandler = () => {
    if (!focus) {
      setMouseOver(true);
    }
  };

  const onBlurHandler = () => {
    setFocus(false);
    setMouseOver(false);
  };

  return (
    <div>
      <TextField
        onMouseOut={() => setMouseOver(false)}
        onMouseOver={onMouseOverhandler}
        onBlur={onBlurHandler}
        onFocus={focusHandler}
        sx={{
          width: matchesTabletMM ? '40px' : '250px',
          backgroundColor: mouseOver ? '#77a6ca' : focus ? 'white' : '#4688b9',
        }}
        className={classes.searchInput}
        id='outlined-basic'
        placeholder='Search'
        size='small'
        variant='outlined'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon
                sx={{
                  color: focus ? 'black' : 'white',
                  marginTop: '-4px',
                  marginLeft: '-10px',
                }}
              />
            </InputAdornment>
          ),

          endAdornment: (
            <InputAdornment position='end'>
              {focus && (
                <>
                  {matchesTabletMM ? (
                    ''
                  ) : (
                    <Grid item>
                      <IconButton>
                        <CallMadeIcon
                          sx={{
                            color: focus ? 'black' : 'white',
                            fontSize: 14,
                            marginRight: '-6px',
                            marginTop: '-5px',
                          }}
                        />
                      </IconButton>
                    </Grid>
                  )}
                  {matchesTabletMM ? (
                    ''
                  ) : (
                    <Grid item>
                      <IconButton>
                        <CloseIcon
                          sx={{
                            color: focus ? 'black' : 'white',
                            fontSize: 18,
                            marginRight: '-12px',
                            marginTop: '-5px',
                          }}
                        />
                      </IconButton>
                    </Grid>
                  )}
                </>
              )}
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default HeaderInput;
