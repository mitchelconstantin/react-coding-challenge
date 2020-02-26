import React from 'react';
import { Box, Button } from '@material-ui/core';
import Api from '../api';
import { MessageList2 } from './MessageList';
import { Header } from './Header';
import { SimpleSnackbar } from './Snackbar';

class MessageList extends React.PureComponent {
  constructor(...args) {
    super(...args);
    this.state = {
      messages: []
    };
  }

  api = new Api({
    messageCallback: message => {
      this.messageCallback(message);
    }
  });

  componentDidMount() {
    this.api.start();
  }

  messageCallback(message) {
    const { messages } = this.state;
    this.setState({
      messages: [message, ...messages.slice()]
    });
  }

  handleClick = () => {
    const isApiStarted = this.api.isStarted();
    if (isApiStarted) {
      this.api.stop();
    } else {
      this.api.start();
    }
    this.forceUpdate();
  };

  handleClearClick = () => {
    this.setState({ messages: [] });
  };

  handleDeleteMessage = id => {
    const { messages } = this.state;
    const newMessages = messages.filter(m => m.id !== id);
    this.setState({ messages: newMessages });
  };

  splitMessages = () => {
    const errors = [];
    const warnings = [];
    const infos = [];
    this.state.messages.forEach(m => {
      if (m.priority === 1) errors.push(m);
      if (m.priority === 2) warnings.push(m);
      if (m.priority === 3) infos.push(m);
    });
    return { errors, warnings, infos };
  };

  render() {
    const isApiStarted = this.api.isStarted();
    const { errors, warnings, infos } = this.splitMessages();
    const snackbarMessage = errors.length ? errors[0].message : undefined;
    const [Container, Buttons, ErrorLists] = [Box, Box, Box];
    return (
      <Container
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Header />
        <SimpleSnackbar
          propNumErrors={errors.length}
          message={snackbarMessage}
        />
        <Buttons margin={'10px'}>
          <Button
            data-testid={'start-stop'}
            style={{ backgroundColor: '#00dbbe' }}
            variant="contained"
            onClick={this.handleClick}
          >
            {isApiStarted ? 'Stop' : 'Start'}
          </Button>
          <Button
            data-testid={'clear'}
            style={{ backgroundColor: '#00dbbe' }}
            variant="contained"
            onClick={this.handleClearClick}
          >
            Clear
          </Button>
        </Buttons>
        <ErrorLists
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            margin: '10px',
            marginTop: '30px'
          }}
        >
          <MessageList2
            priority="1"
            messages={errors}
            clearMessage={this.handleDeleteMessage}
          />
          <MessageList2
            priority="2"
            messages={warnings}
            clearMessage={this.handleDeleteMessage}
          />
          <MessageList2
            priority="3"
            messages={infos}
            clearMessage={this.handleDeleteMessage}
          />
        </ErrorLists>
      </Container>
    );
  }
}

export default MessageList;
