import styles from './Solution.module.scss';
import SortedCategories from './SortedCategories';
import MostExpensiveCart from './MostExpensiveCart';
import FurthestUsers from './FurthestUsers';

const Solution = () => {
    return (
        <div className={styles.solutionContainer}>
            <p className={styles.title}>Solutions: </p>
            <SortedCategories />
            <MostExpensiveCart />
            <FurthestUsers />
        </div>
    )
}

export default Solution;