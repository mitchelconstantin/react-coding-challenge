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

export const SimpleSnackbar = props => {
  const [open, setOpen] = useState(false);
  const [numErrors, setNumErrors] = useState(props.numErrors);
  const classes = useStyles();

  useEffect(() => {
    if (props.numErrors === numErrors) return;
    if (props.numErrors > numErrors) setOpen(true);
    setNumErrors(props.numErrors);
  }, [props.numErrors, numErrors]);

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
        horizontal: 'center'
      }}
      open={open}
      autoHideDuration={2000}
      onClose={handleClose}
    >
      <SnackbarContent
        className={classes.error}
        message={
          <Box display="flex">
            <Button
              className={classes.button}
              size="small"
              onClick={handleClose}
            >
              {/* would use The Close icon from @material-ui/icons in prod environment, 
              but didn't want to add an npm package to this demo app */}
              X
            </Button>
            <Typography>{props.message}</Typography>
          </Box>
        }
      />
    </Snackbar>
  );
};
