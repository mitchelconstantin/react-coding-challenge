import React, { useState } from 'react';
import { Box, Card, Typography, Snackbar } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    width: '25%'
    // display: 'flex'
  }
});

const getTitle = priority => {
  if (priority === '1') return 'Error Type 1';
  if (priority === '2') return 'Warning Type 2';
  if (priority === '3') return 'Info Type 3';
};
export const MessageList2 = ({ priority, messages }) => {
  const classes = useStyles();
  // const [count, setCount] = useState(errors.length);
  const messges = ['123'];
  const title = getTitle(priority);
  return (
    <Box className={classes.container}>
      <Typography>{title}</Typography>
      <Typography>Count {messages.length}</Typography>
      {messages.map(({message, id}) => (
        <Card key={id}>{message}</Card>
      ))}
    </Box>
  );
};
