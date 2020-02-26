import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Divider, Typography } from '@material-ui/core/';

const useStyles = makeStyles({
  container: {
    marginRight: 'auto',
    width: '100%'
    // display: 'flex'
  },
  title: {
    margin: '10px'
  }
});

export const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Typography className={classes.title}>
        Help.com Coding Challenge
      </Typography>
      <Divider />
    </Box>
  );
};
