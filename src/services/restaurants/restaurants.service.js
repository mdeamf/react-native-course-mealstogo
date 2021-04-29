import camelize from 'camelize';
import { mocks } from './mock';

export const restaurantsRequest = (location = '37.7749295,-122.4194155') => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject('not found');
    }
    resolve(restaurantsMap(mock));
  });
};

export const restaurantsMap = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    delete restaurant.photos;
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours?.open_now,
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
    };
  });
  return camelize(mappedResults);
};