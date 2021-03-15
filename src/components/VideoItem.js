import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
  const {
    snippet: {
      publishedAt,
      title,
      channelTitle,
      thumbnails: {
        medium: { url },
      },
    },
  } = video;

  const date = new Date(publishedAt);
  const convertedDate =
    date.getFullYear() +
    '-' +
    `${date.getMonth() + 1}`.padStart(2, 0) +
    '-' +
    `${date.getDate()}`.padStart(2, 0);

  return (
    <ul onClick={() => onVideoSelect(video)}>
      <li>
        <img className="w-100" src={url} alt={title} />
        <h3 className="pt-2 font-weight-bolder">{title}</h3>
        <div className="d-flex">
          <span>{channelTitle}</span>
          <span className="ml-auto">{convertedDate}</span>
        </div>
        <hr></hr>
      </li>
    </ul>
  );
};

export default VideoItem;
