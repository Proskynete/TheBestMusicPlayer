import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/';
import Search from './components/Search/';

const Main = () =>
  (
    <div className="row">
      <div className="col-xs-12">
        <Header />
      </div>
      <div className="row">
        <Search />
      </div>
    </div>
  );

ReactDOM.render(<Main />, document.getElementById('app'));
