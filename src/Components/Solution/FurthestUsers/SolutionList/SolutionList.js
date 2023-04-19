import styles from '../FurthestUsers.module.scss'
import { texts } from '../texts';

const SolutionList = ({ furthestUsers }) => {
    return (
        <>
            <div className={styles.card}>
                <p className={styles.name} >{furthestUsers.firstUser}{texts.from}{furthestUsers.firstUser}</p>
                <div>{texts.long}{furthestUsers.firstUserLongitude}</div>
                <div>{texts.lat}{furthestUsers.firstUserLatitude}</div>
            </div>
            <div className={styles.card}>
                <p className={styles.name} >{furthestUsers.secondUser}{texts.from}{furthestUsers.secondUserHometown}</p>
                <div>{texts.long}{furthestUsers.secondUserLongitude}</div>
                <div>{texts.lat}{furthestUsers.secondUserLatitude}</div>
            </div>
        </>
    )
}

export default SolutionList;
