import { texts } from './texts';
import { useContext, useState } from 'react';
import styles from './FurthestUsers.module.scss';
import { findFurthestUsers } from './findFurthestUsers';
import { UsersContext } from '../../../Context/DataContext/DataContext';
import FullList from './FullList';
import SolutionList from './SolutionList';

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
            {shownSolutionJson && <SolutionList furthestUsers={furthestUsers} />}
            {/* visualization of every uer compared */}
            <button type='button' onClick={handleShowEveryoneJson}>{texts.buttonEveryone}</button>
            {shownEveryoneJson && usersData?.map((user) => <FullList user={user} />

            )}
        </div>
    )
}

export default FurthestUsers;