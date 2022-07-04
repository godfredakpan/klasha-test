
import routes from '../src/routes/';

test('check all routes', () => {
  expect(routes.length).toBe(7);
});


// simple test to check if routes are touched