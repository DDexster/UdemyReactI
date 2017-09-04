import React, {Component} from 'react';
import SearchBar from './components/search_bar.jsx';

const APP_API_KEY = 'AIzaSyBiSuS5IH2u-7ymHQNWRJnNoZjAEA3EuL4';

class App extends Component {

    render() {
        return (
            <div>
                <SearchBar/>
            </div>
        );

    }

}

export default App;