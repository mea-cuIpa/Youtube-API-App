import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
  const date = new Date(video.snippet.publishedAt);
  const convertedDate =
    date.getFullYear() +
    '-' +
    `${date.getMonth() + 1}`.padStart(2, 0) +
    '-' +
    `${date.getDate()}`.padStart(2, 0);

  return (
    <ul onClick={() => onVideoSelect(video)}>
      <li>
        <img
          className="w-100"
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
        <h3 className="pt-2 font-weight-bolder">{video.snippet.title}</h3>
        <div className="d-flex">
          <span>{video.snippet.channelTitle}</span>
          <span className="ml-auto">{convertedDate}</span>
        </div>
        <hr></hr>
      </li>
    </ul>
  );
};

export default VideoItem;
