const serviceAccount = require('./timezone-b1c79-firebase-adminsdk-actag-4239d0ff9e.json');
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

initializeApp({
    credential: cert(serviceAccount)
});

const db = getFirestore();

const COLLECTIONS = {
    users: 'Users',
}

module.exports = {
  db,
  COLLECTIONS
};