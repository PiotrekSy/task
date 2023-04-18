import styles from './Carts.module.scss';
import { texts } from './texts';
import { useState, useContext } from 'react';
import { options } from './dateFormatOptions';
import { CartsContext } from '../../../Context/DataContext/DataContext';

const Carts = () => {

    const cartsData = useContext(CartsContext)
    const [cartsDataOpen, setCartsDataOpen] = useState(false);
    const showCartsHandler = () => setCartsDataOpen(!cartsDataOpen);

    return (
        <>
            <div className={styles.cartsHeader}>
                <button type='button' onClick={showCartsHandler}>
                    {texts.buttonShow}
                </button>
            </div>
            {cartsDataOpen && <div className={styles.carts}>
                {cartsData.length > 0 && cartsData?.map(cart =>
                    <div key={cart.id}
                        className={styles.productCard}>
                        <p className={styles.id}>{texts.id}{cart.id}</p>
                        <p>{texts.date}{new Date(cart.date).toLocaleString('pl-PL', options)}</p>
                        <ul>{texts.list}
                            {cart.products.map(product =>
                                <li>
                                    {'- '}{texts.productId}{product.productId}
                                    {', '}{texts.productQuantity}{product.quantity}
                                </li>)}
                        </ul>
                        <p>{texts.userId}{cart.userId}</p>
                    </div>)}
            </div>}
        </>
    )
}

export default Carts;