import faker from 'faker';

const fakeService = {

  fetchFlights(itemCount, departureCity, minPrice, maxPrice) {
    const items = [];
    for (let i = 0; i < itemCount; i++) {
      items.push({
        no: faker.random.number(),
        company: faker.company.companyName(),
        timeSlot: faker.date.future(),
        departureCity,
        arrivalCity: faker.address.city(),
        pricings: fakeService.fetchPricings(3, minPrice, maxPrice)
      });
    }
    return items;
  },

  fetchPricings(itemCount, minPrice, maxPrice) {
    const items = [];
    for (let i = 0; i < itemCount; i++) {
      items.push({
        price: Math.floor(Math.random() * (maxPrice - minPrice + 1) + minPrice ),
        type: faker.random.arrayElement(['Economy Flex', 'Business Flex', 'Economy', 'First', 'Business', 'Business Plus', 'Economy Plus'])
      });
    }
    return items;
  }

}

export default fakeService;
