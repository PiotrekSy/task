import styles from './Solution.module.scss';
import SortedCategories from './SortedCategories';
import MostExpensiveCart from './MostExpensiveCart';
import FurthestUsers from './FurthestUsers';

const Solution = () => {
    return (
        <div className={styles.solutionContainer}>
            <SortedCategories />
            <MostExpensiveCart />
            <FurthestUsers />
        </div>
    )
}

export default Solution;