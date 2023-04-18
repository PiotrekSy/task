import { expect } from '@jest/globals';
import { findMostExpensiveCartFunction } from './findMostExpensiveCartFunction';

describe('Most expensive cart', () => {

    test('findMostExpensiveCartFunction returns expected output', async () => {

        const userResponse = await fetch('https://fakestoreapi.com/users');
        const productsResponse = await fetch('https://fakestoreapi.com/products');
        const cartsResponse = await fetch('https://fakestoreapi.com/carts/?startdate=2000-01-01&enddate=2023-04-07')

        const usersData = await userResponse.json();
        const productsData = await productsResponse.json();
        const cartsData = await cartsResponse.json();

        const expectedResult = {
            "mostExpensiveCart": {
                "basketNumber": 2,
                "basketValue": '2578.70',
                "userId": 1
            },
            "cartOwner": "John Doe"
        };
        console.log('response from most expensive cart task test should be :',
            JSON.stringify(({
                "mostExpensiveCart": {
                    "basketNumber": 2,
                    "basketValue": '2578.70',
                    "userId": 1
                },
                "cartOwner": "John Doe"
            }), null, 5))


        expect(findMostExpensiveCartFunction(cartsData, productsData, usersData)).toEqual(expectedResult);
    });
})