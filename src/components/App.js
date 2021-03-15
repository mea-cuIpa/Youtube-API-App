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
    const {
      data: { items, nextPageToken },
    } = await youtube
      .get('/search', {
        params: {
          q: input,
          maxResults: 7,
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
      videos: items,
      selectedVideo: items[0],
      pageToken: nextPageToken,
      search: input,
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  loadVideos = async () => {
    const { pageToken, search } = this.state;

    const {
      data: { items, nextPageToken },
    } = await youtube
      .get('/search', {
        params: {
          q: search,
          pageToken: pageToken,
          maxResults: 7,
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
      pageToken: nextPageToken,
      videos: [...this.state.videos, ...items],
    });
  };

  render() {
    const { videos, selectedVideo } = this.state;

    return (
      <Container className="p-0">
        <header className="bg-white d-flex justify-content-center align-items-center header">
          <SearchBar onFormSubmit={this.onInputSubmit} />
        </header>
        <main className="bg-light d-md-flex">
          <div className="col-md-8 py-3">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="col-md-4 py-3">
            <InfiniteScroll
              dataLength={videos.length}
              next={this.loadVideos}
              hasMore={true}
            >
              <VideoList onVideoSelect={this.onVideoSelect} videos={videos} />
            </InfiniteScroll>
          </div>
        </main>
      </Container>
    );
  }
}

export default App;
