import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import youtube from '../API/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import '../styles.css';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onInputSubmit('kittisaurus lulu');
  }

  onInputSubmit = async input => {
    const response = await youtube
      .get('/search', {
        params: {
          q: input,
        },
      })
      .catch(err => {
        throw new Error(err.response);
      })
      .catch(err => console.log(err));

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
    console.log(video);
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
            <VideoList
              onVideoSelect={this.onVideoSelect}
              videos={this.state.videos}
            />
          </div>
        </main>
      </Container>
    );
  }
}

export default App;
