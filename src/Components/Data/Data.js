import styles from './Data.module.scss';
import Users from './Users';
import Carts from './Carts';
import Products from './Products';

const Data = () => {

    return (
        <div className={styles.dataContainer}>
            <p className={styles.title}>1. Data fetched from API:</p>
            <Users />
            <Products />
            <Carts />
        </div>)
}

export default Data;