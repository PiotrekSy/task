import styles from '../FurthestUsers.module.scss'
import { capitalize } from '../../../utils/capitalizeFunction';
import { texts } from '../texts';

const FullList = ({ user }) => {
    return (
        <div className={styles.card}>
            <p className={styles.name}>{capitalize(user?.name.firstname)}{' '}{capitalize(user?.name.lastname)}</p>
            <div>{texts.long} {user?.address.geolocation.long}</div>
            <div>{texts.lat}{user?.address.geolocation.lat}</div>
            <div>{texts.address}{capitalize(user?.address.street)}{' '}{user?.address.number}{', '}
                {user?.address.zipcode}{' '}{capitalize(user?.address.city)}
            </div>
        </div>
    )
}

export default FullList;
