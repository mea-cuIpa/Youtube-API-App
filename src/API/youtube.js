import axios from 'axios';

const KEY = 'AIzaSyCUga9zn-ATQv2iJ-gYeiR0bpWowqBS-fc';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 3,
    key: KEY,
  },
});
