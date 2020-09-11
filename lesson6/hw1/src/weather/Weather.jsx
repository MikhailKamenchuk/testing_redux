import React from 'react';
import { connect } from 'react-redux';
import { isFetchingSelector, weatherDataSelector } from './weather.selectors';
import { getWeatherData } from './weather.actions'
import Spinner from './Spinner';

class Weather extends React.Component {

  componentDidMount() {
    this.props.getWeatherData()
  }

  render() {
    const { isFetching, cityes } = this.props;
    if (isFetching) {
      return <Spinner />
    }
    if (!cityes) {
      return null
    }
    return (
      <main className="weather">
        <h1 className="weather__title">Weather data</h1>
        <ul className="cities-list">
          {cityes.map(city => {
            return (
              <li key={city.id} className="city">
                <span className="city__name">{city.name}</span>
                <span className="city__temperature">{`${city.temperature} F`}</span>
              </li>
            )
          })}
        </ul>
      </main>
    )
  }
}

const mapState = state => {
  return {
    cityes: weatherDataSelector(state),
    isFetching: isFetchingSelector(state)
  }
}
const mapDispatch = {
  getWeatherData
}

export default connect(mapState, mapDispatch)(Weather)