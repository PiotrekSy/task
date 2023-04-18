import { useContext, useState } from 'react';
import {
    UsersContext,
    ProductsContext,
    CartsContext
} from '../../../Context/DataContext/DataContext';
import styles from './MostExpensiveCart.module.scss';

// function that capitalizes first letters of every word from string on demand"
function capitalize(string) {
    var rawString = string.toLowerCase().split(' ');
    for (var i = 0; i < rawString.length; i++) {
        rawString[i] = rawString[i].charAt(0).toUpperCase() + rawString[i].substring(1);
    }
    return rawString.join(' ');
}

const MostExpensiveCart = () => {
    // fetched data from context:
    const usersData = useContext(UsersContext);
    const productsData = useContext(ProductsContext);
    const cartsData = useContext(CartsContext);
    // JSON hiding:
    const [shownJson, setShownJson] = useState(false);
    const handleShowJson = () => setShownJson(!shownJson);

    let cartsArray = [];
    let cartUser;

    // function that calculates values for every cart:
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
        cartsArray.push({ "basketNumber": element.id, "basketValue": cartValue.toFixed(2), "userId": element.userId });
        // sorting for better listing and extracting crucial properties:
        cartsArray.sort((a, b) => b.basketValue - a.basketValue)
        return cartsArray;
    });

    usersData?.forEach((user) => {
        if (cartsArray[0]?.userId === user.id) {
            return cartUser = capitalize(user.name.firstname + ' ' + user.name.lastname)
        }
    })

    return (
        <>
            <div className={styles.solutionContainer}>
                <p className={styles.title}>3. Most expensive cart:</p>
                <div> - cart number: {cartsArray[0]?.basketNumber} - value: {cartsArray[0]?.basketValue}$</div>
                <div> - cart owner: {cartUser} </div>
                <button type='button' onClick={handleShowJson}>SHOW CARTS ARRAY</button>
                {shownJson && (<pre className={styles.card}>{JSON.stringify(cartsArray, null, 5)}</pre>)}
            </div>
        </>
    )
}

export default MostExpensiveCart;