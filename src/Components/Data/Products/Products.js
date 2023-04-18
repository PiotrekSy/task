import { ProductsContext } from '../../../Context/DataContext/DataContext';
import styles from './Products.module.scss';
import { useState, useContext } from 'react';
import { texts } from './texts';

const Products = () => {

    const productsData = useContext(ProductsContext);
    const [productsDataOpen, setProductsDataOpen] = useState(false);
    const showProductsHandler = () => setProductsDataOpen(!productsDataOpen);

    return (
        <>
            <div className={styles.productsHeader}>
                <button type='button'
                    onClick={showProductsHandler}>
                    {texts.buttonShow}</button>
            </div>
            {productsDataOpen && <div className={styles.products}>
                {productsData.length > 0 && productsData?.map(product =>
                    <div key={product.id}
                        className={styles.productCard}>
                        <div
                            className={styles.image}
                            style={{
                                background: `url(${product.image})`,
                                backgroundSize: 'contain',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }} />
                        <div className={styles.description}>
                            <p className={styles.title}>
                                {product.title}
                            </p>
                            <p className={styles.category}>
                                {texts.category}
                                {product.category}
                            </p>
                            <p className={styles.id}>
                                {texts.id}
                                {product.id}
                            </p>
                            <p className={styles.description}>
                                {product.description}
                            </p>
                            <p className={styles.rating}>
                                {texts.rating}
                                {product.rating.rate}{' '}
                                ({product.rating.count}{' votes'})
                            </p>
                            <p className={styles.price}>
                                {texts.price}
                                {product.price}{'$'}
                            </p>
                        </div>
                        <br />
                    </div>)}
            </div>}
        </>
    )
}

export default Products;