import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

export default class SearchFilter extends Component {

  constructor(props) {
    super(props);

    this.onDepartureChange = this.onDepartureChange.bind(this);
    this.onMinPriceChange = this.onMinPriceChange.bind(this);
    this.onMaxPriceChange = this.onMaxPriceChange.bind(this);
    this.onSearch = this.onSearch.bind(this);

    this.state = {
      departureCity: null,
      minPrice: 0,
      maxPrice: 2500
    };
  }

  onDepartureChange(e) {
    e.preventDefault();
    if (e.target) {
      this.setState({ departureCity: e.target.value });
    }
  }

  onMinPriceChange(minPrice) {
    this.setState({ minPrice });
  }

  onMaxPriceChange(maxPrice) {
    this.setState({ maxPrice });
  }

  onSearch() {
    const { departureCity, minPrice, maxPrice } = this.state;
    if (departureCity) {
      this.props.onSearch(departureCity, minPrice, maxPrice);
    }
  }

  render() {
    return (
      <fieldset>
        <legend>Search</legend>
        <p>
          <label>Departure city</label><br />
          <input
            onChange={this.onDepartureChange}
            style={{ fontSize: '18px', padding: '3px', fontWeight: 'bold' }}
            type="text"
            placeholder="Departure city"
          />
        </p>
        <p>
          <label>Minimum price</label><br />
          <div className="slider">
            <Slider
              min={0}
              max={2500}
              value={this.state.minPrice}
              onChange={this.onMinPriceChange}
            />
            <div className="value">{this.state.minPrice}</div>
          </div>
        </p>
        <p>
          <label>Maximum price</label><br />
          <div className="slider">
            <Slider
              min={0}
              max={2500}
              value={this.state.maxPrice}
              onChange={this.onMaxPriceChange}
            />
            <div className="value">{this.state.maxPrice}</div>
          </div>
        </p>
        <input onClick={this.onSearch} type="submit" />
      </fieldset>
    );
  }
}

SearchFilter.propTypes = {
  onSearch: PropTypes.func.isRequired
};
