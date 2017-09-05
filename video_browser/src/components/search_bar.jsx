import React, {Component} from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div className="search-bar">
                <input
                    type="text"
                    onChange={event => this.props.onChange(event.target.value)}/>
            </div>
        );
    }

}

export default SearchBar;