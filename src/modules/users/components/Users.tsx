import * as React from 'react';

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import { Grid, useTheme, Avatar, Box, TextField, Button } from '@mui/material';
import Header from 'modules/common/components/Header';
import { AuthContext } from 'context/api-context';
import { useFormik, FormikProps } from 'formik';
interface MyValues {
  firstName: string;
  lastName: string;
  bio: string;
}
export default function Users() {
  const theme = useTheme();
  const [value, setValue] = React.useState('1');
  const { userName, userEmail } = React.useContext(AuthContext);

  const initialValues: MyValues = { firstName: '', lastName: '', bio: '' };

  const formik = useFormik<MyValues>({
    initialValues,
    onSubmit: (values, { resetForm }) => {
      resetForm();
    },
  });

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  function stringToColor(value: string | null) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    if (value)
      for (i = 0; i < value.length; i += 1) {
        hash = value.charCodeAt(i) + ((hash << 5) - hash);
      }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name: string | null) {
    if (name)
      return {
        sx: {
          bgcolor: stringToColor(name),
        },

        children: `${name!.split(' ')[0][0]}`,
      };
  }

  return (
    <>
      <Header
        main={theme.palette.primary.main}
        light={theme.palette.primary.light}
        dark={theme.palette.primary.dark}
      />

      <Box mt={6} sx={{ width: '100%', typography: 'body1' }}>
        <Grid
          container
          justifyContent='center'
          alignItems='center'
          spacing={1}
          sx={{ backgroundColor: '#f4f5f7', height: '150px' }}
        >
          <Grid item>
            <Avatar
              {...stringAvatar(userName)}
              sx={{
                width: '50px',
                height: '50px',
                display: 'inline-block',
                padding: 0,
                minHeight: 0,
                minWidth: 0,
                paddingTop: '14px',
                backgroundColor: 'red',
                paddingLeft: '16px',
                textTransform: 'uppercase',
              }}
            />
          </Grid>

          {[userName, userEmail].map((item, index) => (
            <Grid item key={index} style={{ textTransform: 'capitalize' }}>
              {item}
            </Grid>
          ))}
        </Grid>

        <TabContext value={value}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: 'divider',
              backgroundColor: '#f4f5f7',
            }}
          >
            <TabList
              onChange={handleChange}
              aria-label='lab API tabs example'
              centered
            >
              {['Profile', 'Settings'].map((T, index) => (
                <Tab label={T} value={index === 0 ? '1' : '2'} key={index} />
              ))}
            </TabList>
          </Box>
          <TabPanel value='1'>
            <Box
              component='form'
              noValidate
              autoComplete='off'
              m={1}
              onSubmit={formik.handleSubmit}
            >
              <Grid
                container
                justifyContent='center'
                spacing={2}
                alignItems='center'
                direction='column'
              >
                <Grid item>
                  <Grid item container spacing={2}>
                    {['firstName', 'lastName'].map((item, index) => (
                      <Grid item key={index}>
                        <TextField
                          id={item}
                          onChange={formik.handleChange}
                          size='small'
                          label={index === 0 ? 'First Name' : 'Last Name'}
                          value={
                            index === 0
                              ? formik.values.firstName
                              : formik.values.lastName
                          }
                          variant='outlined'
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Grid>

                <Grid item>
                  <TextField
                    onChange={formik.handleChange}
                    value={formik.values.bio}
                    fullWidth
                    multiline
                    id='bio'
                    minRows={4}
                    label='Bio'
                    variant='outlined'
                    sx={{ width: '410px' }}
                  />
                </Grid>

                <Grid item>
                  <Button
                    disabled={!(formik.isValid && formik.dirty)}
                    type='submit'
                    variant='contained'
                    sx={{ width: '410px' }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </TabPanel>
          <TabPanel value='2'>comming soon insha allaah !</TabPanel>
        </TabContext>
      </Box>
    </>
  );
}
