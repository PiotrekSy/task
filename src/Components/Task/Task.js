import { useState } from 'react';
import styles from './Task.module.scss';

const Task = () => {

    const [open, setOpen] = useState(false);
    const showTaskHandler = () => setOpen(!open);

    return (
        <div className={styles.taskContainer}>
            <div className={styles.taskHeader}>
                {/* <p className={styles.taskTitle}>The content of the task</p> */}
                <button type='button' onClick={showTaskHandler}>Show Task text</button>
            </div>
            {open && <div className={styles.productCard}>
                <p>Using data from links below:</p>
                <p>Users: https://fakestoreapi.com/users</p>
                <p>Carts: https://fakestoreapi.com/carts/?startdate=2000-01-01&enddate=2023-04-07</p>
                <p>Products: https://fakestoreapi.com/products</p>
                <br />
                <p>Implement a program which:</p>
                <p>1. Retrieves user, product and shopping cart data</p>
                <p>2. Creates a data structure containing all available product categories and the total value of
                    products of a given category</p>
                <p>3. Finds a cart with the highest value, determines its value and full name of its owner</p>
                <p>4. Finds the two users living furthest away from each other
                    A desirable part of a given solution is also a set of tests to verify its correctness.</p>
            </div>}
        </div>
    )
}

export default Task;