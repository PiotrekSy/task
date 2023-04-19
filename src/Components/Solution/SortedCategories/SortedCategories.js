import { texts } from './texts';
import { useState, useContext } from 'react';
import styles from './SortedCategories.module.scss';
import { capitalize } from '../../utils/capitalizeFunction';
import { categoriesCalculator } from './categoriesCalculator';
import { ProductsContext } from '../../../Context/DataContext/DataContext';

const SortedCategories = () => {
    // products data from context
    const productsData = useContext(ProductsContext);

    // collapse function
    const [shownJson, setShownJson] = useState(false);
    const handleShowJson = () => setShownJson(!shownJson);
    const categories = categoriesCalculator(productsData);

    const categoriesSimplified = Object.keys(categories);
    const totalValuesSimplified = Object.values(categories);

    return (
        <div className={styles.solutionContainer}>
            <p className={styles.title}>{texts.taskText}</p>
            <ul>{categoriesSimplified.map((element, index) =>
                <li key={index} className={styles.answer}>
                    {index + 1 + '. '}{capitalize(element)}{texts.description}
                    {totalValuesSimplified[index].totalValue.toFixed(2)}{'$'}
                </li>)}
            </ul>
            <button type="button" onClick={handleShowJson}>
                {texts.buttonText}
            </button>
            {shownJson && <pre className={styles.card}>
                {JSON.stringify(categories, null, 5)}
            </pre>}
        </div>
    )
}

export default SortedCategories;
