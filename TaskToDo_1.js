/**Task
 * 
 * Create a function that return broken cars 
 * and translate array elements to format: [‘Toyota car is broken.’, ‘Porsche car is broken.’]
 */
const cars = [
  {
    name: 'Toyota',
    isBroken: false,
  },
  {
    name: 'Fiat',
    isBroken: true,
  },
  {
    name: 'Mercedes',
    isBroken: false,
  },
  {
    name: 'Porsche',
    isBroken: true,
  },
];

// ver. 1
const brokenCars = cars.filter(car => {
  if (car.isBroken) return true;
});

const carsInfo = brokenCars.map(car => {
  return `${car.name} car is broken.`;
});

// ver. 2
const brokenCars2 = cars.filter(car => car.isBroken);
const carsInfo2 = brokenCars2.map(car => `${car.name} car is broken.`);

// ver. 3
const filteredCarsInfo = cars
  .filter(car => car.isBroken)
  .map(car => `${car.name} car is broken.`);
