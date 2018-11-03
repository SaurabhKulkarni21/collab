const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello collabs");
}); 

const createNotification = (notification => {
    return admin.firestore().collection('notifications').add(notification)
    .then(doc => console.log("Notification has been added", doc));

});

// cloud functions to trigger when a user creates a new project
exports.projectCreated = functions.firestore.document('projects/{projectId}').onCreate(doc => {
    const project =  doc.data();
    const notification = {
        content: 'created a new project',
        user: `${project.authorFirstName} ${project.authorLastName}`,
        time: admin.firestore.FieldValue.serverTimestamp()

    }

    return createNotification(notification)
})

// cloud function to trigger when a new user signs up
exports.userJoined = functions.auth.user().onCreate(user => {

    return admin.firestore().collection('users').doc(user.uid).get()
    .then(doc => {
        const newUser = doc.data();
        const notification = {
            content: 'has signed up.',
            user: `${newUser.firstName} ${newUser.lastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }
        return createNotification(notification);
    })
})
