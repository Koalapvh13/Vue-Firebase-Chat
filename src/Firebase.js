import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBSwVtzUrjrNuCeuZnfH9pkis-7RD_QUa8",
    authDomain: "vue-chat-app-e38cc.firebaseapp.com",
    databaseURL: "https://vue-chat-app-e38cc.firebaseio.com",
    projectId: "vue-chat-app-e38cc",
    storageBucket: "vue-chat-app-e38cc.appspot.com"
};

firebase.inicializeApp(config)

export default firebase
