import { ProductsContext } from '../../../Context/DataContext/DataContext';
import styles from './Products.module.scss';
import { useState, useContext } from 'react';

const Products = () => {

    // data from context:
    const productsData = useContext(ProductsContext);
    // hiding data:  
    const [productsDataOpen, setProductsDataOpen] = useState(false);
    const showProductsHandler = () => setProductsDataOpen(!productsDataOpen);

    return (
        <>
            <div className={styles.productsHeader}>
                <button type='button' onClick={showProductsHandler}>Show Products</button>
            </div>
            {productsDataOpen && <div className={styles.products}>
                {productsData.length > 0 && productsData?.map(product =>
                    <div
                        key={product.id}
                        className={styles.productCard}>
                        <div
                            style={{
                                height: '200px',
                                minWidth: '200px',
                                background: `url(${product.image})`,
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                margin: '20px'
                            }} />
                        <div
                            className={styles.description}>
                            <p className={styles.title}>{product.title}</p>
                            <p className={styles.category}>Product Category: {product.category}</p>
                            <p className={styles.id}>Id: {product.id}</p>
                            <p className={styles.description}>Product Description: {product.description}</p>
                            <p className={styles.rating}>Product Rating: {product.rating.rate}, Votes: ({product.rating.count})</p>
                            <p className={styles.price}>Product Price: {product.price}$</p>
                        </div>
                        <br />
                    </div>)}
            </div>}
        </>
    )
}

export default Products;