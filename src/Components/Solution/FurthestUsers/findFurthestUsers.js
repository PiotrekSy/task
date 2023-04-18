// I have started to write my own function using Pythagorean theorem but with problems,
// so im using "farthest pair algorithm" found in web.
// Only problem was proper use of geolocation variables: 
import { capitalize } from '../../utils/capitalizeFunction';

export const findFurthestUsers = (usersData,) => {

    let maxDistance = 0;
    let furthestUsers = {};

    for (let i = 0; i < usersData.length; i++) {
        for (let j = i + 1; j < usersData.length; j++) {
            let distance = Math.sqrt((usersData[j].address.geolocation.lat - usersData[i].address.geolocation.lat) ** 2
                + (usersData[j].address.geolocation.long - usersData[i].address.geolocation.long) ** 2);
            if (distance > maxDistance) {
                maxDistance = distance;
                furthestUsers = {
                    'firstUser': capitalize(usersData[i].name.firstname + ' ' + usersData[i].name.lastname),
                    'firstUserHometown': capitalize(usersData[i].address.city),
                    'firstUserLongitude': usersData[i].address.geolocation.long.toString(),
                    'firstUserLatitude': usersData[i].address.geolocation.lat.toString(),
                    'secondUser': capitalize(usersData[j].name.firstname + ' ' + usersData[j].name.lastname),
                    'secondUserHometown': capitalize(usersData[j].address.city),
                    'secondUserLongitude': usersData[j].address.geolocation.long.toString(),
                    'secondUserLatitude': usersData[j].address.geolocation.lat.toString(),
                    'maxDistance': maxDistance.toFixed(2)
                }
            }
        }
    }
    return furthestUsers;
}
