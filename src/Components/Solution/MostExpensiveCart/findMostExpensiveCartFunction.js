
// function that calculates values for every cart:
import { capitalize } from '../../utils/capitalizeFunction';

export const findMostExpensiveCartFunction = (cartsData, productsData, usersData) => {

    let cartsArray = [];
    let cartUser;

    // calculating the most expensive cart and sorting array with every cart by cart price
    cartsData?.forEach((element) => {
        let cartValue = 0;
        element.products?.forEach(cartElement => {
            let elementValue = 0;
            for (let i = 0; i < productsData?.length; i++) {
                if (cartElement?.productId === productsData[i]?.id) {
                    elementValue = parseFloat(productsData[i]?.price) * cartElement?.quantity;
                }
            }
            cartValue += parseFloat(elementValue);
        });
        // filling array with objects and calculated values:
        cartsArray.push({
            "basketNumber": element.id,
            "basketValue": cartValue.toFixed(2), "userId": element.userId
        });
        // sorting for better listing and extracting crucial properties:
        cartsArray.sort((a, b) => b.basketValue - a.basketValue)
    });

    // finding owner of most expensive cart
    usersData?.forEach((user) => {
        if (cartsArray[0]?.userId === user.id) {
            cartUser = capitalize(user.name.firstname + ' ' + user.name.lastname)
        }
    })

    // function returning only most expensive cart and its owner:
    return { 'mostExpensiveCart': cartsArray[0], 'cartOwner': cartUser };
}


