import { CartsContext } from '../../../Context/DataContext/DataContext';
import styles from './Carts.module.scss';
import { useState, useContext } from 'react';

//date format options:
const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'Europe/Warsaw'
};

const Carts = () => {

    const cartsData = useContext(CartsContext)
    const [cartsDataOpen, setCartsDataOpen] = useState(false);
    const showCartsHandler = () => setCartsDataOpen(!cartsDataOpen);

    return (
        <>
            <div className={styles.cartsHeader}>
                <button type='button' onClick={showCartsHandler}>Show Carts</button>
            </div>
            {cartsDataOpen && <div className={styles.carts}>
                {cartsData.length > 0 && cartsData?.map(cart =>
                    <div
                        key={cart.id}
                        className={styles.productCard}>
                        <p className={styles.id}>Cart ID: {cart.id}</p>
                        <p>Purchase Date: {new Date(cart.date).toLocaleString('pl-PL', options)}</p>
                        <ul>Product List:
                            {cart.products.map(product => <li> - Product ID: {product.productId}, Quantity: {product.quantity}</li>)}
                        </ul>
                        <p>Buyer ID: {cart.userId}</p>
                    </div>)}
            </div>}
        </>
    )
}

export default Carts;