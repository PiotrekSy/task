import { texts } from './texts';
import { useContext, useState } from 'react';
import styles from './FurthestUsers.module.scss';
import { findFurthestUsers } from './findFurthestUsers';
import { capitalize } from '../../utils/capitalizeFunction';
import { UsersContext } from '../../../Context/DataContext/DataContext';

const FurthestUsers = () => {
    // fetched data from context:
    const usersData = useContext(UsersContext);
    // data hiding:
    const [shownSolutionJson, setShownSolutionJson] = useState(false);
    const handleShowSolutionJson = () => setShownSolutionJson(!shownSolutionJson);
    const [shownEveryoneJson, setShownEveryoneJson] = useState(false);
    const handleShowEveryoneJson = () => setShownEveryoneJson(!shownEveryoneJson);
    // function to find two users living furthest away from each other
    const furthestUsers = findFurthestUsers(usersData)

    return (
        <div className={styles.solutionContainer}>
            <p className={styles.title}>{texts.taskText}</p>
            <div className={styles.people} >
                <p>{'1. '}{furthestUsers.firstUser}{texts.from}{furthestUsers.firstUserHometown}</p>
                <p>{'2. '}{furthestUsers.secondUser}{texts.from}{furthestUsers.secondUserHometown}</p>
            </div>
            <div>{texts.distanceDescription1}{furthestUsers.maxDistance}{texts.distanceDescription2}</div>
            {/* visualization of solution people */}
            <button type='button' onClick={handleShowSolutionJson}>{texts.buttonSolution}</button>
            {shownSolutionJson && <>
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
            </>}

            {/* visualization of every uer compared */}
            <button type='button' onClick={handleShowEveryoneJson}>{texts.buttonEveryone}</button>
            {shownEveryoneJson && usersData?.map((user) =>
                <div className={styles.card}>
                    <p className={styles.name}>{capitalize(user?.name.firstname)}{' '}{capitalize(user?.name.lastname)}</p>
                    <div>{texts.long} {user?.address.geolocation.long}</div>
                    <div>{texts.lat}{user?.address.geolocation.lat}</div>
                    <div>{texts.address}{capitalize(user?.address.street)}{' '}{user?.address.number}{', '}
                        {user?.address.zipcode}{' '}{capitalize(user?.address.city)}
                    </div>
                </div>
            )}
        </div>
    )
}

export default FurthestUsers;