class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedVideo: window.exampleVideoData[0],
      videos: window.exampleVideoData
    };
    this.handleVideoClick = this.handleVideoClick.bind(this);
    this.handleSearchResults = this.handleSearchResults.bind(this);
    this.handleLiveSearch = _.debounce(this._search, 500).bind(this);
  }

  componentDidMount() {
    this._search();
  }

  handleVideoClick(selectedVideo) {
    this.setState({selectedVideo});
  }

  _search(term = 'Gordon Ramsay') {
    const options = { q: term, max: 5 };
    this.props.searchYouTube(options, this.handleSearchResults);
  }

  handleSearchResults(newVideos) {
    this.setState({videos: newVideos, selectedVideo: newVideos[0]});
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handler={this.handleLiveSearch} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.selectedVideo} />
          </div>
          <div className="col-md-5">
            <VideoList handler={this.handleVideoClick} videos={this.state.videos} />
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
