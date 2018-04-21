import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Main extends Component {
  render () {
    return(<h1>The Best Music Player</h1>)
  };
};

ReactDOM.render(<Main />, document.getElementById('app'));
