import styles from './Data.module.scss';
import Users from './Users';
import Carts from './Carts';
import Products from './Products';
import { texts } from './texts';

const Data = () => {

    return (
        <div className={styles.dataContainer}>
            <p className={styles.title}>{texts.title}</p>
            <Users />
            <Products />
            <Carts />
        </div>)
}

export default Data;