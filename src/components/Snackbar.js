import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Snackbar,
  SnackbarContent,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  error: {
    backgroundColor: '#F56236',
    color: 'black'
  }
});
export const SimpleSnackbar = ({ propNumErrors }) => {
  const [open, setOpen] = useState(false);
  const [numErrors, setNumErrors] = useState(propNumErrors);
  const classes = useStyles();

  useEffect(() => {
    if (propNumErrors > numErrors) setOpen(true);
    setNumErrors(propNumErrors);
  }, [propNumErrors]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      open={open}
      autoHideDuration={2000}
      onClose={handleClose}
    >
      <SnackbarContent
        className={classes.error}
        message={
          <Box display='flex'>
            <Button size="small" onClick={handleClose}>
              X
            </Button>
            <Typography>Error</Typography>
          </Box>
        }
      />
    </Snackbar>
  );
};
