import { texts } from './texts';
import { useContext, useState } from 'react';
import {
    UsersContext,
    ProductsContext,
    CartsContext
} from '../../../Context/DataContext/DataContext';
import styles from './MostExpensiveCart.module.scss';
import { findMostExpensiveCartFunction } from './findMostExpensiveCartFunction';

const MostExpensiveCart = () => {

    // fetched data from context:
    const usersData = useContext(UsersContext);
    const productsData = useContext(ProductsContext);
    const cartsData = useContext(CartsContext);
    // JSON hiding:
    const [shownJson, setShownJson] = useState(false);
    const handleShowJson = () => setShownJson(!shownJson);

    // function finding most expensive cart:    
    const cartsArray = findMostExpensiveCartFunction(cartsData, productsData, usersData);

    return (
        <div className={styles.solutionContainer}>
            <p className={styles.title}>{texts.taskText}</p>
            <div>
                {texts.cartNumber}{cartsArray.mostExpensiveCart?.basketNumber}
                {texts.mostExpensive}{texts.value}
                {cartsArray.mostExpensiveCart?.basketValue}{'$. '}
                {cartsArray.cartOwner}{texts.owner}
            </div>
            <button type='button' onClick={handleShowJson}>{texts.buttonShow}</button>
            {shownJson && (<pre className={styles.card}>{JSON.stringify(cartsArray, null, 5)}</pre>)}
        </div>
    )
}

export default MostExpensiveCart;