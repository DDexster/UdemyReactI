import React, {Component} from 'react';

class VideoListItem extends Component {

    render() {
        const video = this.props.video;
        return (
            <li className="list-group-item" onClick={() => this.props.toggle(video)}>
                <div className="video-list media">
                    <div className="media-left">
                        <img
                            src={video.snippet.thumbnails.default.url}
                            alt={video.snippet.title}
                            className="media-object"/>
                    </div>
                    <div className="media-body">
                        <div className="media-heading">
                            {video.snippet.title}
                        </div>
                    </div>
                </div>
            </li>
        );

    }

}

export default VideoListItem;