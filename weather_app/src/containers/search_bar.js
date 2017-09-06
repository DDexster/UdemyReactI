import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index.js';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    handleInputChange(term) {
        this.setState({term});
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term:''});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Get a 5-day forcast in any city in Ukraine"
                    type="text"
                    className="form-control"
                    value={this.state.term}
                    onChange={(event) => this.handleInputChange(event.target.value)}/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-default">Submit</button>
                </span>
            </form>
        );
    }
}

const mapDispatchToProps = dispatch =>{
    return bindActionCreators({fetchWeather}, dispatch);
}


export default connect(null, mapDispatchToProps)(SearchBar);