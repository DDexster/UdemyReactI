import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart.js';
import GoogleMap from '../components/gogle_map';

class WeatherList extends Component {
    renderWeather(city) {
        const CELSIUS = 273;
        const cityCoord = city.city.coord;
        const temperatures = city.list.map((weather) => weather.main.temp - CELSIUS);
        const pressures = city.list.map((weather) => weather.main.pressure);
        const humidities = city.list.map((weather) => weather.main.humidity);
        return (
            <tr key={city.city.name}>
                <td><GoogleMap lat={cityCoord.lat} lon={cityCoord.lon}/></td>
                <td><Chart data={temperatures} color="red" units="C"/></td>
                <td><Chart data={pressures} color="orange" units="hPa"/></td>
                <td><Chart data={humidities} color="grey" units="%"/></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature, (C)</th>
                    <th>Pressure, (hPa)</th>
                    <th>Humidity, (%)</th>
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
};

export default connect(mapStateToProps)(WeatherList);