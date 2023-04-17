import styles from './Users.module.scss';
import { useState, useContext } from 'react';
import { UsersContext } from '../../../Context/DataContext/DataContext';

const Users = () => {
    // data from context:
    const userData = useContext(UsersContext);
    // hiding data:
    const [userDataOpen, setUserDataOpen] = useState(false);
    const showUsersHandler = () => setUserDataOpen(!userDataOpen);
    //function to capitalize first letters of words on demand:
    function capitalize(string) {
        var rawString = string.toLowerCase().split(' ');
        for (var i = 0; i < rawString.length; i++) {
            rawString[i] = rawString[i].charAt(0).toUpperCase() + rawString[i].substring(1);
        }
        return rawString.join(' ');
    }

    return (
        <>
            <div className={styles.usersHeader}>
                <button type='button' onClick={showUsersHandler}>Show Users</button>
            </div>
            {userDataOpen && <div className={styles.users}>
                {userData.length > 0 && userData?.map(user =>
                    <div key={user.id} className={styles.productCard}>
                        <p>id: {user.id}</p>
                        <p>user: {user.username}</p>
                        <p>email: {user.email}</p>
                        <p>address: {capitalize(user.name.firstname)} {capitalize(user.name.lastname)}, {capitalize(user.address.street)} {user.address.number}, {user.address.zipcode} {capitalize(user.address.city)}</p>
                        <p>localization: {user.address.geolocation.long} : {user.address.geolocation.lat}</p>
                        <p>phone: {user.phone}</p>
                        {/* <p>userPassword: {user.password}</p> */}
                        <br />
                    </div>
                )}
            </div>}
        </>
    )
}

export default Users;