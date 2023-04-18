import { expect } from '@jest/globals';
import { findFurthestUsers } from './findFurthestUsers';

describe('Furthest Users Distance', () => {
    test('findFurthestUsers returns expected output', async () => {

        const usersResponse = await fetch('https://fakestoreapi.com/users');
        const usersData = await usersResponse.json();

        const expectedResult = {
            'firstUser': 'John Doe',
            'firstUserHometown': 'Kilcoole',
            'firstUserLongitude': '81.1496',
            'firstUserLatitude': '-37.3159',
            'secondUser': 'Derek Powell',
            'secondUserHometown': 'San Antonio',
            'secondUserLongitude': '-40.1310',
            'secondUserLatitude': '40.3467',
            'maxDistance': '144.02'
        }

        console.log('response from furthest users task test should be:',
            JSON.stringify(({
                'firstUser': 'John Doe',
                'firstUserHometown': 'Kilcoole',
                'firstUserLongitude': '81.1496',
                'firstUserLatitude': '-37.3159',
                'secondUser': 'Derek Powell',
                'secondUserHometown': 'San Antonio',
                'secondUserLongitude': '-40.1310',
                'secondUserLatitude': '40.3467',
                'maxDistance': '144.02'
            }), null, 5))


        expect(findFurthestUsers(usersData)).toEqual(expectedResult);
    });
})