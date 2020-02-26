import React from 'react';
import { Box, Button, Card, CardActions, Typography } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    width: '25%'
  },
  warning: {
    display: 'flex',
    backgroundColor: '#FCE788',
    margin: '5px',
    height: '50px'
  },
  error: {
    display: 'flex',
    backgroundColor: '#F56236',
    margin: '5px',
    height: '50px'
  },
  info: {
    display: 'flex',
    backgroundColor: '#88FCA3',
    margin: '5px',
    height: '50px'
  },
  clearButton: {
    marginLeft: 'auto'
  }
});

const getValues = priority => {
  if (priority === '1')
    return {
      title: 'Error Type 1',
      name: 'error'
    };
  if (priority === '2')
    return {
      title: 'Warning Type 2',
      name: 'warning'
    };
  if (priority === '3')
    return {
      title: 'Info Type 1',
      name: 'info'
    };
};

export const MessageList2 = ({ priority, messages, clearMessage }) => {
  const classes = useStyles();
  const { title, name } = getValues(priority);

  return (
    <Box data-testid={name} className={classes.container}>
      <Typography>{title}</Typography>
      <Typography>Count {messages.length}</Typography>
      {messages.map(({ message, id }) => (
        <Card className={classes[name]} key={id}>
          <Typography>{message}</Typography>
          <CardActions className={classes.clearButton}>
            <Button onClick={() => clearMessage(id)} size="small">
              Clear
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};
