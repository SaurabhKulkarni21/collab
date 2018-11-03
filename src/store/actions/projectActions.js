export const createProject = (project) => {
    console.log("This is the project",project)
    return (dispatch, getState, { getFirestore, getFirebase }) => {
        // Make async calls to database
        const firestore = getFirestore();
        const profile =  getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project });
        }).catch((err) => {
            console.log("This is the error",err)
            dispatch({ type: 'CREATE_PROJECT_ERROR', project });
        })
        
    }
};
