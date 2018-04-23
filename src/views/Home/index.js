import axios from 'axios';
import React, { Component } from 'react';
import Cardvideo from '../../components/Cardvideo/';
import config from '../../config/config';
import './index.scss';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      loader: false,
      listOfVideos: [],
    };
    this.handleGetParametersSearch = this.handleGetParametersSearch.bind(this);
    this.handleGetVideos = this.handleGetVideos.bind(this);
  }

  componentWillMount() {
    if (localStorage.getItem('listOfLastVideos')) {
      this.setState({
        listOfVideos: JSON.parse(localStorage.getItem('listOfLastVideos')),
      });
    }
  }

  componentWillUpdate(nextProp, nextState) {
    const cache = JSON.stringify(nextState.listOfVideos);
    localStorage.setItem('listOfLastVideos', cache);
  }

  handleGetParametersSearch(event) {
    if (event.key === 'Enter') {
      this.setState({
        loader: true,
      });
      let inputSearchVideos = document.getElementById('inputSearchVideos').value;
      this.handleGetVideos(inputSearchVideos);
    }
  }

  handleGetVideos(searchParameters) {
    const maxCountVideos = 7;
    const url = `https://www.googleapis.com/youtube/v3/search?key=${config.id_api}&q=${searchParameters}&part=snippet,id&order=viewCount&maxResults=${maxCountVideos}&type=video`;
    return (
      axios.get(url)
        .then((resp) => {
          this.setState({
            listOfVideos: resp.data.items,
            loader: false,
          });
          inputSearchVideos.value = '';
        })
    );
  }

  handleShowVideos() {
    const cards = this.state.listOfVideos.map((video) => {
      const key = video.id.videoId;
      const data = video.snippet;
      return (<Cardvideo data={data} key={key} />);
    });
    return cards;
  }

  render() {
    const loader = <i className="loader fa fa-refresh fa-spin fa-2x fa-fw" aria-hidden="true" />;
    return (
      <div className="home">
        <div className="search">
          <div className="col-xs-12">
            <div className="search_content">
              <input id="inputSearchVideos" onKeyPress={this.handleGetParametersSearch} className="input" placeholder="Canción, Artista, Album..." />
              <button className="button">
                <i className="fa fa-search" />
              </button>
            </div>
          </div>
        </div>
        <div className="result">
          {(this.state.loader) ? loader : this.handleShowVideos() }
        </div>
      </div>
    );
  }
}

export default Home;
