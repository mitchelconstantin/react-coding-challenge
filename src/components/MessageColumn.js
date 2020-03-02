import React from 'react';
import { Box, Button, Card, Typography } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    width: '25%'
  },
  card: {
    display: 'flex',
    margin: '5px',
    height: '50px'
  },
  clearButton: {
    marginLeft: 'auto',
    textTransform: 'none'
  },
  message: {
    margin: '10px'
  }
});

const getValuesByPriority = priority => {
  if (priority === '1')
    return {
      title: 'Error Type 1',
      name: 'error',
      backgroundColor: '#F56236'
    };
  if (priority === '2')
    return {
      title: 'Warning Type 2',
      name: 'warning',
      backgroundColor: '#FCE788'
    };
  if (priority === '3')
    return {
      title: 'Info Type 1',
      name: 'info',
      backgroundColor: '#88FCA3'
    };
};

export const MessageColumn = ({ priority, messages, clearMessage }) => {
  const classes = useStyles();
  const { title, name, backgroundColor } = getValuesByPriority(priority);

  return (
    <Box data-testid={name} className={classes.container}>
      <Typography>{title}</Typography>
      <Typography color='textSecondary' >Count {messages.length}</Typography>
      {messages.map(({ message, id }) => (
        <Card data-testid={`message-${id}`} className={classes.card} style={{backgroundColor}} key={id}>
          <Typography className={classes.message}>{message}</Typography>
          <Button
            className={classes.clearButton}
            onClick={() => clearMessage(id)}
            size="small"
          >
            Clear
          </Button>
        </Card>
      ))}
    </Box>
  );
};
