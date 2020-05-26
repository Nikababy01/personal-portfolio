import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';
import profiledisplay from './components/profiledisplay/profiledisplay';


const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  profiledisplay.createProject();
};

init();
