import React, {Component} from 'react';
import VideoListItem from './video_list_item.jsx';

class VideoList extends Component {

    render() {
        const videoItems = this.props.videos.map((video) => (
                <VideoListItem key={video.etag} video={video} toggle={this.props.toggle}/>
            ))
        return (
            <ul className=" col-sm-12 col-md-4 list-group">
                {videoItems}
            </ul>
        );

    }

}

export default VideoList;