import React from 'react';
import './index.scss';

const Search = () =>
  (
    <div className="col-xs-12">
      <div className="search_content">
        <input className="input" placeholder="Canción, Artista, Album..." />
        <button className="button">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );

export default Search;
