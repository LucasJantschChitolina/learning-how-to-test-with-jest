import { getCurrentWeather as current } from './currentWeather';
import { ICurrentProps} from '../../types/current';

test('get current weather when passing city name', () => {
    const expected: ICurrentProps = {
            location: {
                name: 'New York',
                country: 'United States of America',
                region: 'New York'
            },
            current: {
                temperature: 25
            }
    }

    return current('New%20York').then((data) => {
        expect(data).toStrictEqual(expected);
  });
})