import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import youtube from '../API/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import InfiniteScroll from 'react-infinite-scroll-component';
import '../styles.css';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
    pageToken: '',
    count: 20,
    inputPass: '',
  };

  componentDidMount() {
    this.onInputSubmit('kittisaurus lulu');
  }

  onInputSubmit = async input => {
    const response = await youtube
      .get('/search', {
        params: {
          q: input,
          maxResults: 20,
        },
      })
      .catch(err => {
        throw new Error(err.response);
      })
      .catch(err => console.log(err));

    this.state.pageToken = response.data.nextPageToken;

    this.state.inputPass = input;
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  loadVideos = async () => {
    this.setState({ pageToken: this.state.pageToken });
    const response = await youtube
      .get('/search', {
        params: {
          q: this.state.inputPass,
          pageToken: this.state.pageToken,
          maxResults: 20,
        },
      })
      .catch(err => {
        throw new Error(err.response);
      })
      .catch(err => console.log(err));

    this.state.pageToken = response.data.nextPageToken;
    this.setState({
      videos: this.state.videos.concat(response.data.items),
    });
  };

  render() {
    return (
      <Container className="p-0">
        <header className="bg-white d-flex justify-content-center align-items-center header">
          <SearchBar onFormSubmit={this.onInputSubmit} />
        </header>
        <main className="bg-light d-md-flex">
          <div className="col-md-8 py-3">
            <VideoDetail video={this.state.selectedVideo} />
          </div>
          <div className="col-md-4 py-3">
            <InfiniteScroll
              dataLength={this.state.videos.length}
              next={this.loadVideos}
              hasMore={true}
            >
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </InfiniteScroll>
          </div>
        </main>
      </Container>
    );
  }
}

export default App;
