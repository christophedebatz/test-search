import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader';
import FlightView from './FlightView';

export default class FlightListView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      flight: this.props.flights
    };
  }

  render() {
    if (this.props.flights || this.props.isLoading) {
      let flightsListMarkup = null;
      let counterMarkup = 0;
      if (this.props.flights) {
        counterMarkup = this.props.flights.length;
        flightsListMarkup = this.props.flights.map(flight => (
          <FlightView key={flight.no} flight={flight} />
        ));
      }

      return (
        <Loader loaded={!this.props.isLoading}>
          <div style={{ fontWeight: 'bold', padding: '10px', textAlign: 'center' }}>
            Total found items:  {counterMarkup} flight(s).
          </div>
          {flightsListMarkup}
        </Loader>
      );
    }
    return ( <p align="center">No flight for this search</p> );
  }
}
