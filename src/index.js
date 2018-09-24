import _ from 'lodash';
import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


const API_KEY = 'AIzaSyCi34An4__4U0Utald7cOacgtkHbFxRXp8';

//Create a new component. This component should produce some HTML
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    // Jquery Ajax or Ajax function
    YTSearch({key:API_KEY, term: term}, (videos)=> {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render (){
    const videoSearch = _.debounce((term)=> {this.videoSearch(term)}, 300);

    return (
      <div className="search-bar">
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}
//Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
