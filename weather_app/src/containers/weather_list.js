import React, {Component} from 'react';
import {connect} from 'react-redux';

class WeatherList extends Component {
    renderWeather(city) {
        const currentCity = city.city;
        const currentData = city.list[0].main;
        return (
            <tr key={currentCity.id}>
                <td>{currentCity.name}</td>
                <td>{currentData.temp}</td>
                <td>{currentData.pressure}</td>
                <td>{currentData.humidity}</td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(city => this.renderWeather(city))}
                </tbody>
            </table>
        );

    }

}

const mapStateToProps = ({weather}) => {
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);