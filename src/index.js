import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';
const API_KEY= '';//your api key here

// Create a new component. This component should produce
// some HTML
class App extends Component{

  constructor(props){
    super(props);

    this.state= { 
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('git');//search when the page first loads
  }

  videoSearch(term){
    YTSearch({ key: API_KEY, term: term}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
       });
      //when the same name is used, example: (videos: videos), 
      //you can do it like that, making your code a bit cleaner
      //it produces: this.setState({ videos: videos })
    });
  }

  render(){

    const videoSearch= _.debounce((term) => {this.videoSearch(term)}, 300);

    return (<div>
      <SearchBar onSearchTermChange={videoSearch}/>
      <VideoDetail video={this.state.selectedVideo}/>
      <VideoList 
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos= {this.state.videos} />
    </div>);
  }
}

// Take this component's generated HTML and put it
//on the page (int the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
