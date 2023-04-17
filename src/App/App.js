import styles from './App.module.scss';
import Task from '../Components/Task';
import Data from '../Components/Data';
import Solution from '../Components/Solution';
import { UsersContext, ProductsContext, CartsContext } from '../Context/DataContext/DataContext';
import { useState, useEffect } from 'react';

const App = () => {
  // data states to pass in context:
  const [userData, setUserData] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [cartsData, setCartsData] = useState([]);

  //data fetching: 
  useEffect(() => {

    const users = fetch('https://fakestoreapi.com/users');
    const products = fetch('https://fakestoreapi.com/products');
    const carts = fetch('https://fakestoreapi.com/carts/?startdate=2000-01-01&enddate=2023-04-07');

    users.then(response => response.json())
      .then(data => setUserData(data));
    products.then(response => response.json())
      .then(data => setProductsData(data));
    carts.then(response => response.json())
      .then(data => setCartsData(data));
  }, []);

  return (
    <div className={styles.appBackground}>
      <UsersContext.Provider value={userData}>
        <ProductsContext.Provider value={productsData}>
          <CartsContext.Provider value={cartsData}>
            <Task />
            <Data />
            <Solution />
          </CartsContext.Provider>
        </ProductsContext.Provider>
      </UsersContext.Provider>
    </div>
  );
}

export default App;
