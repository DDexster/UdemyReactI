import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component{
    renderList() {
        return this.props.books.map((book, index) => 
            <li className="list-group-item" key={index}>{book.title}</li>
        )
    }
    
    render() {
        return (
            <ul className="list-group col-md-4">
                {this.renderList()}
            </ul>
        )
    }
}

const mapStateToProps = state => {
    return {
        books: state.books
    }
}


export default connect(mapStateToProps)(BookList);