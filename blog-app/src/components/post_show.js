import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPost, deletePost} from "../actions/index";
import {Link} from 'react-router-dom';


class PostShow extends Component {
    componentDidMount() {
        if (!this.props.post) {
            const {id} = this.props.match.params;
            this.props.fetchPost(id);
        }
    }

    handleDelete() {
        const {id} = this.props.match.params;
        this.props.deletePost(id, () => this.props.history.push('/'));
    }

    render() {
        const {post} = this.props;

        if (!post) {
            return <div>Loading...</div>
        }
        return (
            <div className="container">
                <button className="btn btn-danger pull-right" onClick={this.handleDelete.bind(this)}>Delete Post
                </button>
                <Link to='/' className="btn btn-default pull-right">Back to Index</Link>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

const mapStateToProps = ({posts}, ownProps) => {
    return {
        post: posts[ownProps.match.params.id]
    };
};

export default connect(mapStateToProps, {fetchPost, deletePost})(PostShow);