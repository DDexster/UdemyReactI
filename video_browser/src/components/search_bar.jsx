import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    handleChange(term) {
        this.setState({term})
    }

    render() {
        return (<input
            type="text"
            onChange={event => this.handleChange(event.target.value)}
            value={this.state.term}/>);
    }

}

export default SearchBar;