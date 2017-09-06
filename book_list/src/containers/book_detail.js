import React, {Component} from 'react';
import { connect } from "react-redux";

class BookDetail extends Component {
    render() {
        if (!this.props.book) {
            return <h1>No Book Selected</h1>
        }
        return (
            <div>
                <h1>{this.props.book.title}</h1>
                <p>Pages: {this.props.book.pages}</p>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {book: state.activeBook}
}

export default connect(mapStateToProps)(BookDetail);