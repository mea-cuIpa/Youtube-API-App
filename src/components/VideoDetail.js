import React from 'react';
import { ResponsiveEmbed, Spinner } from 'react-bootstrap';

const VideoDetail = ({ video }) => {
  if (!video) return <Spinner animation="border" className="my-3" />;

  const {
    id: { videoId },
    snippet: { title, channelTitle, description, publishedAt },
  } = video;

  const date = new Date(publishedAt);
  const convertedDate =
    date.getFullYear() +
    '-' +
    `${date.getMonth() + 1}`.padStart(2, 0) +
    '-' +
    `${date.getDate()}`.padStart(2, 0);

  return (
    <div className="details p-2">
      <ResponsiveEmbed aspectRatio="16by9">
        <iframe
          title="video player"
          src={`https://www.youtube.com/embed/${videoId}`}
        />
      </ResponsiveEmbed>
      <div>
        <h1 className="font-weight-bold my-3">{title}</h1>
        <hr></hr>
        <div className="d-flex my-2 font-weight-bolder">
          <h3>{channelTitle}</h3>
          <span className="ml-auto">{convertedDate}</span>
        </div>
        <p>{description}</p>
        <hr></hr>
      </div>
    </div>
  );
};

export default VideoDetail;
