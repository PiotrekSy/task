import { texts } from './texts';
import { useState } from 'react';
import styles from './Task.module.scss';

const Task = () => {

    const [open, setOpen] = useState(false);
    const showTaskHandler = () => setOpen(!open);

    return (
        <div className={styles.taskContainer}>
            <div className={styles.taskHeader}>
                <button type='button' onClick={showTaskHandler}>
                    {texts.buttonShow}
                </button>
            </div>
            {open && <div className={styles.productCard}>
                <p className={styles.dataTitle}>{texts.apiHeader}</p>
                <p className={styles.api}>{texts.users}
                    <a href={texts.usersApi}>{texts.usersApi}</a>
                </p>
                <p className={styles.api}>{texts.carts}
                    <a href={texts.cartsApi}>{texts.cartsApi}</a>
                </p>
                <p className={styles.api}>{texts.products}
                    <a href={texts.productsApi}>{texts.productsApi}</a>
                </p>
                <p className={styles.dataTitle}>{texts.usersHeader}</p>
                <p className={styles.tasks}>{texts.firstTask}</p>
                <p className={styles.tasks}>{texts.secondTask}</p>
                <p className={styles.tasks}>{texts.thirdTask}</p>
                <p className={styles.tasks}>{texts.fourthTask}</p>
            </div>}
        </div>
    )
}

export default Task;