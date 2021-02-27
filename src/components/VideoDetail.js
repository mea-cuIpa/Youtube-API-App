import React from 'react';
import { ResponsiveEmbed, Spinner } from 'react-bootstrap';

const VideoDetail = ({ video }) => {
  if (!video) return <Spinner animation="border" className="my-3" />;

  const date = new Date(video.snippet.publishedAt);
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
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
        />
      </ResponsiveEmbed>
      <div>
        <h1 className="font-weight-bold my-3">{video.snippet.title}</h1>
        <hr></hr>
        <div className="d-flex my-2 font-weight-bolder">
          <h3>{video.snippet.channelTitle}</h3>
          <span className="ml-auto">{convertedDate}</span>
        </div>

        <p className="">{video.snippet.description}</p>
        <hr></hr>
      </div>
    </div>
  );
};

export default VideoDetail;
