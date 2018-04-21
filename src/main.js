import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/';
import App from './views/';

const Main = () =>
  (
    <div className="row">
      <div className="col-xs-12">
        <Header />
      </div>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </div>
  );

ReactDOM.render(<Main />, document.getElementById('app'));
