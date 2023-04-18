import { texts } from './texts';
import styles from './Users.module.scss';
import { useState, useContext } from 'react';
import { capitalize } from '../../utils/capitalizeFunction.js';
import { UsersContext } from '../../../Context/DataContext/DataContext';

const Users = () => {

    const userData = useContext(UsersContext);
    const [userDataOpen, setUserDataOpen] = useState(false);
    const showUsersHandler = () => setUserDataOpen(!userDataOpen);

    return (
        <>
            <div className={styles.usersHeader}>
                <button type='button' onClick={showUsersHandler}>
                    {texts.showButton}
                </button>
            </div>
            {userDataOpen && <div className={styles.users}>
                {userData.length > 0 && userData?.map(user =>
                    <div key={user.id} className={styles.productCard}>
                        <p>{texts.id} {user.id}</p>
                        <p>{texts.user}{user.username}</p>
                        <p>{texts.email}{user.email}</p>
                        <p>{texts.address}
                            {capitalize(user.name.firstname)}{' '}
                            {capitalize(user.name.lastname)}{', '}
                            {capitalize(user.address.street)}{' '}
                            {user.address.number}{', '}
                            {user.address.zipcode}{' '}
                            {capitalize(user.address.city)}</p>
                        <p>{texts.localization}
                            {user.address.geolocation.long}{', '}
                            {user.address.geolocation.lat}</p>
                        <p>{texts.phone}{user.phone}</p>
                    </div>
                )}
            </div>}
        </>
    )
}

export default Users;