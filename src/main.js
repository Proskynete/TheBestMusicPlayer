import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/';

const Main = () =>
  (
    <div className="row">
      <div className="col-xs-12">
        <Header />
      </div>
    </div>
  );

ReactDOM.render(<Main />, document.getElementById('app'));
