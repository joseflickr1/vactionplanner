import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: 'AIzaSyB0h1X79RgjSb9hmKyEoM3UNf-Naw_UXnI',
    authDomain: 'vactionplanner-sun.firebaseapp.com/',
    projectId: 'vactionplanner-sun',
};

firebase.initializeApp(config);