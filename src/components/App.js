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
    search: '',
  };

  componentDidMount() {
    this.onInputSubmit("the blancos we're tired");
  }

  onInputSubmit = async input => {
    const response = await youtube
      .get('/search', {
        params: {
          q: input,
          maxResults: 2,
        },
      })
      .catch(err => {
        //err > 500 ? server side : user
        err.response
          ? console.error(`Server responded with status ${err.response.status}`)
          : err.request
          ? console.error(`Can't get response ${err.request}`)
          : console.error(
              `Something happened in setting up the request ${err.message}`
            );
      });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
      pageToken: response.data.nextPageToken,
      search: input,
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  loadVideos = async () => {
    const { pageToken, search } = this.state;

    const response = await youtube
      .get('/search', {
        params: {
          q: search,
          pageToken: pageToken,
          maxResults: 2,
        },
      })
      .catch(err => {
        err.response
          ? console.error(`Server responded with status ${err.response.status}`)
          : err.request
          ? console.error(`Can't get response ${err.request}`)
          : console.error(
              `Something happened in setting up the request ${err.message}`
            );
      });

    this.setState({
      pageToken: response.data.nextPageToken,
      videos: [...this.state.videos, ...response.data.items],
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
