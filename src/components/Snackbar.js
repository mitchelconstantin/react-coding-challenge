import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

export const SimpleSnackbar = ({ numErrors }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log(numErrors);
    if (numErrors > 0) setOpen(true);
  }, [numErrors]);
  // const handleClick = () => {
  //   setOpen(true);
  // };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      {/* <Button onClick={handleClick}>Open simple snackbar</Button> */}
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message="Error"
        action={
          <Button color="secondary" size="small" onClick={handleClose}>
            X
          </Button>
        }
      />
    </div>
  );
};
