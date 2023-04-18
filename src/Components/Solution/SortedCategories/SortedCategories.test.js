import { expect } from '@jest/globals';
import { categoriesCalculator } from './categoriesCalculator';

describe('Categories', () => {
    test('categoriesCalculator returns expected output', async () => {

        const response = await fetch('https://fakestoreapi.com/products');
        const productsData = await response.json();
        // console.log(JSON.stringify(usersData, null, 2))

        const expectedResult = {
            "men's clothing": { "totalValue": 204.23000000000002 },
            "jewelery": { "totalValue": 883.98 },
            "electronics": { "totalValue": 1994.99 },
            "women's clothing": { "totalValue": 157.72 }
        }

        console.log('response from sorted categories task test should be :',
            JSON.stringify(({
                "mostExpensiveCart": {
                    "basketNumber": 2,
                    "basketValue": '2578.70',
                    "userId": 1
                },
                "cartOwner": "John Doe"
            }), null, 5))

        expect(categoriesCalculator(productsData)).toEqual(expectedResult);
    });
})