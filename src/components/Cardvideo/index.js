import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import './index.scss';

const Cardvideo = ({ data }) => {
  const {
    publishedAt,
    title,
    thumbnails,
  } = data;

  return (
    <div className="card col-xs-12">
      <div className="row">
        <div className="col-xs-4">
          <img className="thumbnails" src={thumbnails.medium.url} alt={title} />
        </div>
        <div className="content col-xs-8">
          <p className="title">{title}</p>
          <p className="published">Se subió el <Moment format="LL" locale="es">{publishedAt}</Moment></p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Cardvideo;
