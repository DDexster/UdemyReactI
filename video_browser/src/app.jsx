import _ from 'lodash';
import React, {Component} from 'react';
import SearchBar from './components/search_bar.jsx';
import VideoList from './components/video_list.jsx';
import VideoDetails from './components/video_detail.jsx';
import search from 'youtube-api-search';

const APP_API_KEY = 'AIzaSyBiSuS5IH2u-7ymHQNWRJnNoZjAEA3EuL4';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            term: '',
            currentVideo: null
        }

        this.toggleVideo = this.toggleVideo.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentWillMount() {
        this._search();
    }

    _search() {
        search({
            key: APP_API_KEY,
            term: this.state.term
        }, videos => this.setState({videos, currentVideo: videos[0]}));
    }

    handleInputChange(term) {
        this.setState({term});
        this._search();
    }

    toggleVideo(currentVideo) {
        this.setState({currentVideo});
    }

    render() {
        const search = _.debounce(term => {
            this.handleInputChange(term)
        }, 500);
        return (
            <div>
                <SearchBar onChange={search}/>
                <VideoDetails video={this.state.currentVideo}/>
                <VideoList videos={this.state.videos} toggle={this.toggleVideo}/>
            </div>
        );

    }

}

export default App;