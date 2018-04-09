import faker from 'faker';
import fakeService from './fakeService';

const searchService = {

  doSearch(departureCity, minPrice, maxPrice) {
    const itemsCount = parseInt(faker.random.arrayElement([8, 12, 13, 15], 10));
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const flights = fakeService.fetchFlights(
          itemsCount,
          departureCity,
          minPrice,
          maxPrice
        );
        resolve(flights)
      }, 2500);
    });
  }
};

export default searchService;
