import React, { Component } from 'react';
import SearchFilter from '../../component/SearchFilter';
import FlightListView from '../../component/FlightListView';
import searchService from '../../service/searchService';
import './Home.css';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);
    this.state = {
      isLoading: false,
      flight: []
    };
  }

  onSearch(departureCity, minPrice, maxPrice) {
    this.setState({ isLoading: true }, () => {
      searchService.doSearch(departureCity, minPrice, maxPrice)
        .then(flights => {
          this.setState({ flights, isLoading: false });
        });
    });
  }

  render() {
    return (
      <div id="container-home">
        <div class="home-element">
          <SearchFilter onSearch={this.onSearch} />
        </div>
        <div class="home-element">
          <FlightListView
            flights={this.state.flights}
            isLoading={this.state.isLoading}
          />
        </div>
      </div>
    );
  }
}
