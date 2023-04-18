import { useContext, useState } from 'react';
import { UsersContext } from '../../../Context/DataContext/DataContext';
import styles from './FurthestUsers.module.scss';

// function that capitalizes first letters of every word from string"
function capitalize(string) {
    var rawString = string.toLowerCase().split(' ');
    for (var i = 0; i < rawString.length; i++) {
        rawString[i] = rawString[i].charAt(0).toUpperCase() + rawString[i].substring(1);
    }
    return rawString.join(' ');
}

const FurthestUsers = () => {
    // fetched data from context:
    const usersData = useContext(UsersContext);
    // data hiding:
    const [shownJson, setShownJson] = useState(false);
    const handleShowJson = () => setShownJson(!shownJson);
    const [] = useState('Loading...')

    const usersArray = [];
    usersData?.forEach((user) => usersArray.push({
        "user": capitalize(user.name.firstname + ' ' + user.name.lastname),
        "geolocation": [user.address.geolocation?.long, user.address.geolocation?.lat],
        "city": capitalize(user.address.city)
    }));

    // I have started to write my own function using Pythagorean theorem but with problems,
    // so im using "farthest pair algorithm" found in web.
    // Only problem was proper use of geolocation variables: 
    let maxDistance = 0;
    let farthestPoints = [];

    for (let i = 0; i < usersArray.length; i++) {
        for (let j = i + 1; j < usersArray.length; j++) {
            let distance = Math.sqrt((usersArray[j].geolocation[0] - usersArray[i].geolocation[0]) ** 2
                + (usersArray[j].geolocation[1] - usersArray[i].geolocation[1]) ** 2);
            if (distance > maxDistance) {
                maxDistance = distance;
                farthestPoints = [usersArray[i], usersArray[j]]
            }
        }

    }

    return (
        <div className={styles.solutionContainer}>
            <p className={styles.title}>4. Users living furthest away from each other:</p>
            <div data-testid="title"> - {farthestPoints[0]?.user} from {farthestPoints[0]?.city} and {farthestPoints[1]?.user}from {farthestPoints[1]?.city}</div>
            <div> - Distance between them measured using "farthest pair algorithm" is ~ {maxDistance.toFixed(2)} based on given geolocation data.</div>
            <button type='button' onClick={handleShowJson}>SHOW USERS LOCATIONS</button>
            <div >{shownJson && usersData?.map((user) =>
                <div className={styles.card}>
                    <p className={styles.name} >{capitalize(user?.name.firstname)} {capitalize(user?.name.lastname)} from {capitalize(user?.address.city)}</p>
                    <div>Longitude : {user?.address.geolocation.long}</div>
                    <div>Latitude : {user?.address.geolocation.lat}</div>
                </div>
            )}
            </div>
        </div>
    )
}

export default FurthestUsers;

