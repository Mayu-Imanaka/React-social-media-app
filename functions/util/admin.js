const admin = require('firebase-admin');

var serviceAccount = require("../serviceAccountKey/socialape200515-firebase-adminsdk-kss2b-59dac2f745.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://socialape200515.firebaseio.com"
});


const db = admin.firestore();

module.exports = { admin, db };