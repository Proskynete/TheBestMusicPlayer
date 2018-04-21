import React from 'react';
import Search from '../../components/Search';
import './index.scss';

const Home = () => {
  return(
    <div className="home">
      <div className="search"><Search /></div>
      <div className="result">
        <div className="col-xs-12">
          <p className="title-result">Últimos resultados</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
