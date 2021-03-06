import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { Link } from 'react-router-dom';

class PostsIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts(){
        return _.map(this.props.posts, post => {
            return(
                <li className="list-group-item" key={post.id}>
                    <Link to={`posts/${post.id}`}>{post.title}</Link>
                </li>
            )
        })
    }

    render() {
        return (
            <div>
                <div className="pull-right">
                    <Link className="btn btn-primary" to='/posts/new'>
                        Add a Post
                    </Link>
                </div>
                <h3>Posts Root</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = ({ posts }) => {
    return { posts };
};

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);