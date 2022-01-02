import * as Location from 'expo-location'; // getting single var ref diff functions

const tenMetersWithDegrees = 0.0001; // reps ten meters in longitude & latitude

const getLocation = increment => {
    return {
        timestamp: 10000000,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            altitude: 5,
            longitude: -79.81392140910042 + increment * tenMetersWithDegrees,
            latitude: 43.71205628457539 + increment * tenMetersWithDegrees
        }
    };
};

let counter = 0;

setInterval(() => {
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    });
    counter++;
}, 1000);