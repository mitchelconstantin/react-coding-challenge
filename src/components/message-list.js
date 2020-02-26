import React from 'react';
import Button from '@material-ui/core/Button';
import Api from '../api';
import { ErrorList } from './ErrorList';

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
    console.log('new message', messages);
    this.setState(
      {
        messages: [...messages.slice(), message]
      },
      () => {
        // Included to support initial direction. Please remove upon completion
        // console.log(messages);
      }
    );
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

  render() {
    const isApiStarted = this.api.isStarted();
    const priority1 = this.state.messages.filter(m => m.priority === 1);
    const priority2 = this.state.messages.filter(m => m.priority === 2);
    const priority3 = this.state.messages.filter(m => m.priority === 3);

    console.log(priority1);
    return (
      <div>
        <Button variant="contained" onClick={this.handleClick}>
          {isApiStarted ? 'Stop Messages' : 'Start Messages'}
        </Button>
        <Button variant="contained" onClick={this.handleClearClick}>
          Clear
        </Button>

        <ErrorList title="Error Type 1" errors={priority1} />
        <ErrorList title="Warning Type 2" errors={priority2} />
        <ErrorList title="Info Type 3" errors={priority3} />
      </div>
    );
  }
}

export default MessageList;
