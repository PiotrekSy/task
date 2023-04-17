import { useState, useContext } from 'react';
import { ProductsContext } from '../../../Context/DataContext/DataContext';
import styles from './SortedCategories.module.scss';

const SortedCategories = () => {

    // products data from context:
    const productsData = useContext(ProductsContext);
    const [shownJson, setShownJson] = useState(false);
    const handleShowJson = () => setShownJson(!shownJson);

    // function sorting products by categories inside 'categories' data structure:
    let categories = {};
    for (const product of productsData) {
        if (!categories[product.category]) {
            categories[product.category] = { totalValue: 0 };
        }
        categories[product.category].totalValue += (product.price);
    }

    const categoriesSimplified = Object.keys(categories);
    const totalValuesSimplified = Object.values(categories);

    return (
        <div className={styles.solutionContainer}>
            <p className={styles.title}>2. Categories and values:</p>
            <ul>{categoriesSimplified.map((element, index) =>
                <li key={index}> - {element} - total value of products in this category: {totalValuesSimplified[index].totalValue.toFixed(2)}$</li>)}
            </ul>
            <button type="button" onClick={handleShowJson}>SHOW JSON DATA STRUCTURE</button>
            {shownJson && <pre className={styles.card}>{JSON.stringify(categories, null, 5)}</pre>}        </div>
    )
}

export default SortedCategories;
